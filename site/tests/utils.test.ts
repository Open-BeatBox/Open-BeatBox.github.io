import { truncateText, sanitizeField } from "../src/lib/utils";

const longText = "a".repeat(200);
console.log("truncateText length", truncateText(longText, 50).length <= 51);
console.log("sanitizeField removes tags", sanitizeField("<script>alert('x')</script>ok") === "ok");
