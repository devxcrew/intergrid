import { z } from 'zod';

export const labNodeSchema: z.ZodType<unknown> = z.lazy(() => z.object({
  id: z.string().uuid(),
  type: z.string(),
  props: z.record(z.string(), z.unknown()),
  children: z.array(labNodeSchema).optional(),
}));

export const labTokensSchema = z.object({
  colors: z.record(z.string(), z.string()).optional(),
  typography: z.record(z.string(), z.string()).optional(),
  spacing: z.record(z.string(), z.string()).optional(),
  radius: z.record(z.string(), z.string()).optional(),
  blur: z.record(z.string(), z.string()).optional(),
  shadow: z.record(z.string(), z.string()).optional(),
});

export const labDocumentSchema = z.object({
  id: z.string().uuid(),
  assetId: z.string().uuid(),
  name: z.string().min(1).max(255),
  ownerId: z.string().uuid().optional(),
  rootNode: labNodeSchema,
  tokens: labTokensSchema,
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});

export const createLabDraftSchema = z.object({
  assetId: z.string().uuid(),
  name: z.string().min(1).max(255),
  initialNode: labNodeSchema,
  initialTokens: labTokensSchema.optional(),
});

export const updateLabDraftSchema = labDocumentSchema.partial().omit({ id: true, assetId: true, createdAt: true });

export type LabNode = z.infer<typeof labNodeSchema>;
export type LabTokens = z.infer<typeof labTokensSchema>;
export type LabDocument = z.infer<typeof labDocumentSchema>;
export type CreateLabDraftInput = z.infer<typeof createLabDraftSchema>;
export type UpdateLabDraftInput = z.infer<typeof updateLabDraftSchema>;
