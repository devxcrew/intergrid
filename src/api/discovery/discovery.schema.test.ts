import { test } from "node:test";
import assert from "node:assert/strict";
import { SearchQuerySchema } from "./discovery.schema.js";

test("SearchQuerySchema covers defaults for page and limit", () => {
  const result = SearchQuerySchema.parse({});
  assert.equal(result.page, 1);
  assert.equal(result.limit, 20);
});

test("SearchQuerySchema accepts valid category", () => {
  const result = SearchQuerySchema.parse({ category: "buttons" });
  assert.equal(result.category, "buttons");
});

test("SearchQuerySchema rejects invalid category", () => {
  assert.throws(() => SearchQuerySchema.parse({ category: "invalid-category" }), /invalid option/i);
});

test("SearchQuerySchema rejects page 0", () => {
  assert.throws(() => SearchQuerySchema.parse({ page: 0 }), /expected number to be >=1/i);
});

test("SearchQuerySchema rejects limit 101", () => {
  assert.throws(() => SearchQuerySchema.parse({ limit: 101 }), /expected number to be <=100/i);
});
