import assert from "node:assert/strict";
import { truncateText, sanitizeField } from "../src/lib/utils";

const longText = "a".repeat(200);
assert.ok(truncateText(longText, 50).length <= 51);
assert.equal(sanitizeField("<script>alert('x')</script>ok"), "ok");
