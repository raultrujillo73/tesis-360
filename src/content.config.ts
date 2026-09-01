import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const taskStatus = z.enum(['pendiente', 'en_curso', 'bloqueada', 'requiere_revision', 'terminada', 'descartada']);
const phaseStatus = z.enum(['pendiente', 'en_curso', 'bloqueada', 'terminada', 'descartada']);
const priority = z.enum(['P0', 'P1', 'P2', 'P3']);

const phases = defineCollection({
  loader: glob({ pattern: '*.md', base: './seguimiento/fases' }),
  schema: z.object({
    id: z.string(),
    order: z.number().int(),
    title: z.string(),
    status: phaseStatus,
    objective: z.string().default(''),
    tasks: z.array(z.object({
      id: z.string(),
      title: z.string(),
      status: taskStatus,
      priority: priority.nullable().default(null),
      responsible: z.string().nullable().default(null),
      deliverable: z.string().nullable().default(null),
      completion_criteria: z.string().nullable().default(null),
      notes: z.string().nullable().default(null),
    })),
  }),
});

const milestones = defineCollection({
  loader: glob({ pattern: '*.md', base: './seguimiento/hitos' }),
  schema: z.object({
    id: z.string(),
    order: z.number().int(),
    title: z.string(),
    status: z.enum(['pendiente', 'siguiente', 'cumplido', 'bloqueado']),
    after_phase: z.string(),
  }),
});

const decisions = defineCollection({
  loader: glob({ pattern: '*.md', base: './seguimiento/decisiones' }),
  schema: z.object({
    id: z.string(),
    date: z.coerce.date(),
    title: z.string(),
    status: z.enum(['adoptada', 'provisional', 'pendiente', 'descartada']),
    reason: z.string(),
    impact: z.string(),
    related_tasks: z.array(z.string()).default([]),
  }),
});

const logs = defineCollection({
  loader: glob({ pattern: '*.md', base: './seguimiento/log' }),
  schema: z.object({
    date: z.coerce.date(),
    title: z.string(),
    summary: z.string(),
    tasks: z.array(z.string()).default([]),
    decisions: z.array(z.string()).default([]),
    sources: z.array(z.string()).default([]),
    source_updates: z.array(z.string()).default([]),
  }),
});

const sources = defineCollection({
  loader: glob({ pattern: '*.md', base: './bibliografia/fuentes' }),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    authors: z.string().default(''),
    year: z.number().int().nullable().default(null),
    type: z.enum(['paper', 'tesis', 'libro', 'norma', 'otro']),
    venue: z.string().default(''),
    doi: z.string().default(''),
    openalex: z.string().default(''),
    url: z.string().default(''),
    priority,
    download_status: taskStatus,
    reading_status: taskStatus,
    analysis_status: taskStatus,
    topics: z.array(z.string()).default([]),
    intended_use: z.array(z.string()).default([]),
  }),
});

const currentStatus = defineCollection({
  loader: glob({ pattern: 'ESTADO_ACTUAL.md', base: './seguimiento' }),
  schema: z.object({
    last_updated: z.coerce.date(),
    project_status: z.string(),
    research_phase: z.string(),
    support_phase: z.string(),
    next_task: z.string(),
    next_milestone: z.string(),
    blockers: z.array(z.string()),
    pending_questions: z.array(z.string()).default([]),
    summary: z.string(),
  }),
});

const diagnostics = defineCollection({
  loader: glob({
    pattern: ['investigacion/estado-del-arte/*.md', 'investigacion/marco-conceptual/*.md', 'investigacion/formulacion/*.md', 'plan_tesis/auditorias/*.md'],
    base: './',
    generateId: ({ entry }) => (entry.split('/').pop()?.replace(/\.md$/, '') ?? entry).toLowerCase(),
  }),
  schema: z.object({
    title: z.string(),
    version: z.string().default(''),
    fecha: z.coerce.date(),
    estado: z.string().default(''),
    documento_base: z.string().optional(),
  }),
});

export const collections = { phases, milestones, decisions, logs, sources, currentStatus, diagnostics };
