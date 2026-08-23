export const STATUS_LABELS: Record<string, string> = {
  pendiente: 'Pendiente',
  en_curso: 'En curso',
  bloqueada: 'Bloqueada',
  bloqueado: 'Bloqueado',
  requiere_revision: 'Requiere revisión',
  terminada: 'Terminada',
  descartada: 'Descartada',
  adoptada: 'Adoptada',
  provisional: 'Provisional',
  siguiente: 'Siguiente',
  cumplido: 'Cumplido',
};

export const statusLabel = (status: string) => STATUS_LABELS[status] ?? status;
export const statusClass = (status: string) => `status status--${status.replaceAll('_', '-')}`;

export const formatDate = (date: Date) => new Intl.DateTimeFormat('es-PE', {
  year: 'numeric',
  month: 'short',
  day: '2-digit',
  timeZone: 'UTC',
}).format(date);

export function progress(tasks: Array<{ status: string }>) {
  const active = tasks.filter((task) => task.status !== 'descartada');
  const done = active.filter((task) => task.status === 'terminada').length;
  return {
    done,
    total: active.length,
    percent: active.length ? Math.round((done / active.length) * 100) : 0,
  };
}

