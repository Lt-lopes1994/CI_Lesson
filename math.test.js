import teste from "node:test";
import assert from "node:assert/strict";
import { sum } from "./math.js";

teste("sum of 1 and 2 should be 3", () => {
  assert.strictEqual(sum(1, 2), 3);
});

teste("async test", async () => {
  const result = await Promise.resolve(42);
  assert.strictEqual(result, 42);
});
