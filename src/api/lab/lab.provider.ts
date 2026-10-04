import { LabDocument, CreateLabDraftInput, UpdateLabDraftInput } from './lab.schema.js';

// Internal memory store until persistence (database) is established
const labDrafts = new Map<string, LabDocument>();

export const labProvider = {
  async getDraft(id: string): Promise<LabDocument | null> {
    return labDrafts.get(id) || null;
  },

  async createDraft(input: CreateLabDraftInput): Promise<LabDocument> {
    const id = crypto.randomUUID();
    const now = new Date().toISOString();
    const draft: LabDocument = {
      id,
      assetId: input.assetId,
      name: input.name,
      rootNode: input.initialNode,
      tokens: input.initialTokens || {},
      createdAt: now,
      updatedAt: now,
    };
    labDrafts.set(id, draft);
    return draft;
  },

  async updateDraft(id: string, input: UpdateLabDraftInput): Promise<LabDocument> {
    const existing = labDrafts.get(id);
    if (!existing) {
      throw new Error(`Lab draft ${id} not found`);
    }
    
    const updated: LabDocument = {
      ...existing,
      ...input,
      updatedAt: new Date().toISOString(),
    };
    labDrafts.set(id, updated);
    return updated;
  },

  async deleteDraft(id: string): Promise<boolean> {
    return labDrafts.delete(id);
  }
};
