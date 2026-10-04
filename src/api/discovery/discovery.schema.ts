import { z } from "zod";

export const SearchQuerySchema = z.object({
  query: z.string().optional(),
  category: z.enum(["buttons", "cards", "navigation", "hero", "forms", "animation", "typography", "layout", "other"]).optional(),
  appearance: z.string().optional(),
  industry: z.string().optional(),
  page: z.coerce.number().min(1).default(1),
  limit: z.coerce.number().min(1).max(100).default(20),
});

export const CollectionSchema = z.object({
  id: z.string().uuid(),
  title: z.string().min(1),
  description: z.string().optional(),
  authorId: z.string(),
  itemIds: z.array(z.string().uuid()), // References to Agent1's Asset items
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});

export const CreateCollectionSchema = CollectionSchema.pick({
  title: true,
  description: true,
  itemIds: true,
});

export type SearchQuery = z.infer<typeof SearchQuerySchema>;
export type Collection = z.infer<typeof CollectionSchema>;
export type CreateCollection = z.infer<typeof CreateCollectionSchema>;
