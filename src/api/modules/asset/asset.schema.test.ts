import assert from "node:assert/strict";
import test from "node:test";
import { createAssetSchema } from "./asset.schema.js";

test("Asset creation accepts a catalog category and applies defaults", () => {
  const result = createAssetSchema.parse({
    title: "Primary Button",
    category: "buttons",
  });
  assert.equal(result.category, "buttons");
  assert.deepEqual(result.tags, []);
});

test("Asset creation rejects an unknown category", () => {
  const result = createAssetSchema.safeParse({
    title: "Primary Button",
    category: "unknown",
  });
  assert.equal(result.success, false);
});
