import { z } from "zod";

export const VersionSchema = z.object({
  id: z.string().uuid(),
  assetId: z.string().uuid(),
  versionNumber: z.number().int().positive(),
  authorId: z.string().min(1),
  snapshot: z.record(z.string(), z.any()),
  changeSummary: z.string().optional(),
  createdAt: z.string().datetime(),
});

export type Version = z.infer<typeof VersionSchema>;

export const RemixSchema = z.object({
  id: z.string().uuid(),
  sourceAssetId: z.string().uuid(),
  sourceVersionId: z.string().uuid(),
  newAssetId: z.string().uuid(),
  remixedBy: z.string().min(1),
  attributionLink: z.string().url().optional(),
  createdAt: z.string().datetime(),
});

export type Remix = z.infer<typeof RemixSchema>;

export const CreateVersionInputSchema = z.object({
  assetId: z.string().uuid(),
  draftId: z.string().uuid(),
  changeSummary: z.string().optional(),
});

export type CreateVersionInput = z.infer<typeof CreateVersionInputSchema>;

export const CreateRemixInputSchema = z.object({
  sourceAssetId: z.string().uuid(),
  sourceVersionId: z.string().uuid(),
  title: z.string().min(1).max(255),
  draftId: z.string().uuid(),
});

export type CreateRemixInput = z.infer<typeof CreateRemixInputSchema>;
