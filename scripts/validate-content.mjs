import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import matter from 'gray-matter';

const root = process.cwd();
const errors = [];
const taskStates = new Set(['pendiente', 'en_curso', 'bloqueada', 'requiere_revision', 'terminada', 'descartada']);
const phaseStates = new Set(['pendiente', 'en_curso', 'bloqueada', 'terminada', 'descartada']);
const decisionStates = new Set(['adoptada', 'provisional', 'pendiente', 'descartada']);
const milestoneStates = new Set(['pendiente', 'siguiente', 'cumplido', 'bloqueado']);
const priorities = new Set(['P0', 'P1', 'P2', 'P3']);

async function markdownFiles(directory) {
  const base = path.join(root, directory);
  const names = await readdir(base);
  return names.filter((name) => name.endsWith('.md')).map((name) => path.join(base, name));
}

async function entries(directory) {
  return Promise.all((await markdownFiles(directory)).map(async (file) => {
    const parsed = matter(await readFile(file, 'utf8'));
    return { file: path.relative(root, file), ...parsed.data };
  }));
}

const phases = await entries('seguimiento/fases');
const milestones = await entries('seguimiento/hitos');
const decisions = await entries('seguimiento/decisiones');
const logs = await entries('seguimiento/log');
const sources = await entries('bibliografia/fuentes');
const current = matter(await readFile(path.join(root, 'seguimiento/ESTADO_ACTUAL.md'), 'utf8')).data;

function required(entry, fields) {
  for (const field of fields) {
    if (entry[field] === undefined || entry[field] === null || entry[field] === '') {
      errors.push(`${entry.file ?? 'seguimiento/ESTADO_ACTUAL.md'}: falta ${field}`);
    }
  }
}

const phaseIds = new Set();
const taskIds = new Set();
for (const phase of phases) {
  required(phase, ['id', 'order', 'title', 'status', 'tasks']);
  if (phaseIds.has(phase.id)) errors.push(`${phase.file}: ID de fase duplicado ${phase.id}`);
  phaseIds.add(phase.id);
  if (!phaseStates.has(phase.status)) errors.push(`${phase.file}: estado de fase inválido ${phase.status}`);
  for (const task of phase.tasks ?? []) {
    if (!task.id || !task.title || !task.status) errors.push(`${phase.file}: tarea incompleta`);
    if (taskIds.has(task.id)) errors.push(`${phase.file}: ID de tarea duplicado ${task.id}`);
    taskIds.add(task.id);
    if (!taskStates.has(task.status)) errors.push(`${phase.file}: estado inválido en ${task.id}: ${task.status}`);
    if (task.priority && !priorities.has(task.priority)) errors.push(`${phase.file}: prioridad inválida en ${task.id}`);
    if (task.status === 'terminada' && !task.deliverable && !task.completion_criteria) {
      errors.push(`${phase.file}: ${task.id} está terminada pero no tiene entregable ni criterio de cierre`);
    }
  }
}

if (phases.length !== 22) errors.push(`Se esperaban 22 fases y existen ${phases.length}`);
if (taskIds.size !== 175) errors.push(`Se esperaban 175 tareas y existen ${taskIds.size}`);

const milestoneIds = new Set();
for (const item of milestones) {
  required(item, ['id', 'order', 'title', 'status', 'after_phase']);
  if (milestoneIds.has(item.id)) errors.push(`${item.file}: ID de hito duplicado ${item.id}`);
  milestoneIds.add(item.id);
  if (!milestoneStates.has(item.status)) errors.push(`${item.file}: estado de hito inválido ${item.status}`);
  if (!phaseIds.has(item.after_phase)) errors.push(`${item.file}: fase inexistente ${item.after_phase}`);
}
if (milestones.length !== 7) errors.push(`Se esperaban 7 hitos y existen ${milestones.length}`);

const decisionIds = new Set();
for (const item of decisions) {
  required(item, ['id', 'date', 'title', 'status', 'reason', 'impact']);
  if (decisionIds.has(item.id)) errors.push(`${item.file}: ID de decisión duplicado ${item.id}`);
  decisionIds.add(item.id);
  if (!decisionStates.has(item.status)) errors.push(`${item.file}: estado de decisión inválido ${item.status}`);
}

for (const item of logs) required(item, ['date', 'title', 'summary']);
for (const item of sources) required(item, ['id', 'title', 'type', 'priority', 'download_status', 'reading_status', 'analysis_status']);

required(current, ['last_updated', 'research_phase', 'support_phase', 'next_task', 'next_milestone', 'blockers']);
if (!phaseIds.has(current.research_phase)) errors.push(`ESTADO_ACTUAL: fase de investigación inexistente ${current.research_phase}`);
if (!phaseIds.has(current.support_phase)) errors.push(`ESTADO_ACTUAL: fase de soporte inexistente ${current.support_phase}`);
if (!taskIds.has(current.next_task)) errors.push(`ESTADO_ACTUAL: siguiente tarea inexistente ${current.next_task}`);
if (!milestoneIds.has(current.next_milestone)) errors.push(`ESTADO_ACTUAL: siguiente hito inexistente ${current.next_milestone}`);

if (errors.length) {
  console.error(`Validación fallida (${errors.length} errores):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Contenido válido: ${phases.length} fases, ${taskIds.size} tareas, ${milestones.length} hitos, ${decisions.length} decisiones, ${logs.length} entradas de log y ${sources.length} fuentes.`);
