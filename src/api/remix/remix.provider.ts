import type { Version, Remix, CreateVersionInput, CreateRemixInput } from "./remix.schema.js";

export interface AssetProviderContract {
  createAsset(data: { title: string; authorId: string }): Promise<{ id: string }>;
  getAssetById(id: string): Promise<unknown>;
}

export interface LabDraftSchema {
  sourceAssetId: string;
  tree: Record<string, unknown>;
  userId: string;
  organizationId: string;
}

export interface LabProviderContract {
  getDraft(id: string, userId: string, organizationId: string): Promise<LabDraftSchema | null>;
}

export interface RemixProviderContract {
  getVersion(id: string): Promise<Version | null>;
  listVersions(assetId: string): Promise<Version[]>;
  saveVersion(data: CreateVersionInput, authorId: string): Promise<Version>;
  createRemix(data: CreateRemixInput, authorId: string): Promise<Remix>;
  getRemixLineage(assetId: string): Promise<Remix[]>;
}

export function createRemixProvider(
  assetProvider: AssetProviderContract,
  labProvider: LabProviderContract
): RemixProviderContract {
  const versions: Version[] = [];
  const remixes: Remix[] = [];
  const versionCounters: Record<string, number> = {};

  return {
    async getVersion(id) {
      return versions.find(v => v.id === id) || null;
    },
    async listVersions(assetId) {
      return versions
        .filter(v => v.assetId === assetId)
        .sort((a, b) => b.versionNumber - a.versionNumber);
    },
    async saveVersion(data, authorId) {
      // Mock organizationId for now until identity is verified
      const draft = await labProvider.getDraft(data.draftId, authorId, "org-id");
      if (!draft) {
        throw new Error("Invalid or missing lab draft");
      }

      const vNum = (versionCounters[data.assetId] || 0) + 1;
      versionCounters[data.assetId] = vNum;

      const newVersion: Version = {
        id: crypto.randomUUID(),
        assetId: data.assetId,
        versionNumber: vNum,
        authorId,
        snapshot: draft.tree,
        changeSummary: data.changeSummary,
        createdAt: new Date().toISOString(),
      };
      
      versions.push(newVersion);
      return newVersion;
    },
    async createRemix(data, authorId) {
      const newAsset = await assetProvider.createAsset({ title: data.title, authorId });
      
      await this.saveVersion({
        assetId: newAsset.id,
        draftId: data.draftId,
        changeSummary: "Initial remix",
      }, authorId);

      const newRemix: Remix = {
        id: crypto.randomUUID(),
        sourceAssetId: data.sourceAssetId,
        sourceVersionId: data.sourceVersionId,
        newAssetId: newAsset.id,
        remixedBy: authorId,
        attributionLink: `/desk/assets/${data.sourceAssetId}`,
        createdAt: new Date().toISOString(),
      };
      
      remixes.push(newRemix);
      return newRemix;
    },
    async getRemixLineage(assetId) {
      return remixes.filter(r => r.newAssetId === assetId || r.sourceAssetId === assetId);
    }
  };
}
