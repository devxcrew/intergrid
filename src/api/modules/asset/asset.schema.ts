import { z } from "zod";

export const assetNodeSchema: z.ZodType<unknown> = z.lazy(() => z.object({
  id: z.string().uuid(),
  type: z.string(),
  props: z.record(z.string(), z.unknown()),
  children: z.array(assetNodeSchema).optional(),
}));

export const assetTokensSchema = z.object({
  colors: z.record(z.string(), z.string()).optional(),
  typography: z.record(z.string(), z.string()).optional(),
  spacing: z.record(z.string(), z.string()).optional(),
  radius: z.record(z.string(), z.string()).optional(),
  blur: z.record(z.string(), z.string()).optional(),
  shadow: z.record(z.string(), z.string()).optional(),
});

export const assetSchema = z.object({
  id: z.string().uuid(),
  title: z.string().min(1, "Title is required").max(100),
  description: z.string().max(1000).default(""),
  category: z.enum([
    "buttons", "cards", "navigation", "hero", "forms", "animation", "typography", "layout", "other"
  ]),
  tags: z.array(z.string()).default([]),
  authorId: z.string().uuid(), // Note: In production this is bound to Platform session
  version: z.string().default("1.0.0"),
  license: z.string().default("MIT"),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
  compatibility: z.array(z.string()).default([]),
  technology: z.array(z.string()).default([]),
  rootNode: assetNodeSchema.optional(),
  tokens: assetTokensSchema.optional(),
});

export const createAssetSchema = assetSchema.omit({
  id: true,
  authorId: true,
  createdAt: true,
  updatedAt: true,
});

export const updateAssetSchema = createAssetSchema.partial();

export const assetQuerySchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().positive().max(100).default(20),
  search: z.string().optional(),
  category: z.string().optional(),
  sort: z.enum(["createdAt", "title"]).default("createdAt"),
  direction: z.enum(["asc", "desc"]).default("desc"),
});

export type Asset = z.infer<typeof assetSchema>;
export type CreateAssetPayload = z.infer<typeof createAssetSchema>;
export type UpdateAssetPayload = z.infer<typeof updateAssetSchema>;
export type AssetQuery = z.infer<typeof assetQuerySchema>;
