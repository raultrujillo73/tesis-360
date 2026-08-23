import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import YAML from 'yaml';

const root = process.cwd();
const planPath = path.join(root, 'PLAN_MAESTRO_TRABAJO_TESIS_360.md');
const plan = await readFile(planPath, 'utf8');

const slugify = (value) => value
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-|-$/g, '')
  .slice(0, 54);

const statusMap = new Map([
  ['⬜', 'pendiente'],
  ['🟡', 'en_curso'],
  ['🟠', 'bloqueada'],
  ['🔁', 'requiere_revision'],
  ['✅', 'terminada'],
  ['❌', 'descartada'],
]);

function sectionEnd(from) {
  const rest = plan.slice(from);
  const match = rest.match(/^# \d+\. /m);
  return match ? from + match.index : plan.length;
}

function valueFrom(block, label) {
  const expression = new RegExp(`^- \\*\\*${label}:\\*\\*\\s*(.+)$`, 'mi');
  return block.match(expression)?.[1]?.trim() ?? null;
}

function cleanStatus(raw) {
  if (!raw) return 'pendiente';
  for (const [symbol, status] of statusMap) {
    if (raw.includes(symbol)) return status;
  }
  return 'pendiente';
}

const phaseMatches = [...plan.matchAll(/^# \d+\. FASE (\d+) — (.+)$/gm)];

for (const match of phaseMatches) {
  const number = Number(match[1]);
  const id = `F${number}`;
  const title = match[2].trim();
  const start = match.index + match[0].length;
  const end = sectionEnd(start);
  const block = plan.slice(start, end).trim();
  const objective = block.match(/^\*\*Objetivo:\*\*\s*(.+)$/m)?.[1]?.trim() ?? '';
  const taskMatches = [...block.matchAll(/^### (F\d+-T\d+) — (.+)$/gm)];
  const tasks = taskMatches.map((taskMatch, index) => {
    const taskStart = taskMatch.index + taskMatch[0].length;
    const taskEnd = index + 1 < taskMatches.length ? taskMatches[index + 1].index : block.length;
    const taskBlock = block.slice(taskStart, taskEnd).trim();
    const rawStatus = valueFrom(taskBlock, 'Estado');
    const notes = taskBlock
      .split('\n')
      .filter((line) => !/^- \*\*(Estado|Prioridad|Responsable|Entregable|Criterio de cierre):\*\*/i.test(line.trim()))
      .filter((line) => line.trim() !== '---')
      .join('\n')
      .trim();

    return {
      id: taskMatch[1],
      title: taskMatch[2].trim(),
      status: cleanStatus(rawStatus),
      priority: valueFrom(taskBlock, 'Prioridad')?.match(/P[0-3]/)?.[0] ?? null,
      responsible: valueFrom(taskBlock, 'Responsable') ?? null,
      deliverable: valueFrom(taskBlock, 'Entregable'),
      completion_criteria: valueFrom(taskBlock, 'Criterio de cierre'),
      notes: notes || null,
    };
  });

  const data = {
    id,
    order: number,
    title,
    status: number === 0 || number === 1 ? 'en_curso' : 'pendiente',
    objective,
    tasks,
  };
  const frontmatter = YAML.stringify(data, { lineWidth: 0 }).trimEnd();
  const body = `# ${id} — ${title}\n\nEste archivo contiene el estado operativo de la fase. Las definiciones extensas y la secuencia general se conservan en el Plan Maestro.\n`;
  const fileId = `F${String(number).padStart(2, '0')}`;
  const filename = `${fileId}-${slugify(title)}.md`;
  await writeFile(path.join(root, 'seguimiento/fases', filename), `---\n${frontmatter}\n---\n\n${body}`, 'utf8');
}

const milestoneOrder = ['D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7'];
const afterPhase = { D1: 'F2', D2: 'F4', D3: 'F5', D4: 'F7', D5: 'F10', D6: 'F11', D7: 'F17' };
const milestoneMatches = [...plan.matchAll(/^# \d+\. HITO (D\d+) — (.+)$/gm)];

for (const match of milestoneMatches) {
  const id = match[1];
  const title = match[2].trim();
  const start = match.index + match[0].length;
  const end = sectionEnd(start);
  const body = plan.slice(start, end).trim();
  const data = {
    id,
    order: milestoneOrder.indexOf(id) + 1,
    title,
    status: id === 'D1' ? 'siguiente' : 'pendiente',
    after_phase: afterPhase[id],
  };
  const fileId = `D${String(Number(id.slice(1))).padStart(2, '0')}`;
  const filename = `${fileId}-${slugify(title)}.md`;
  await writeFile(
    path.join(root, 'seguimiento/hitos', filename),
    `---\n${YAML.stringify(data).trimEnd()}\n---\n\n# ${id} — ${title}\n\n${body}\n`,
    'utf8',
  );
}

console.log(`Migradas ${phaseMatches.length} fases y ${milestoneMatches.length} hitos.`);
