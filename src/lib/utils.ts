import DOMPurify from "isomorphic-dompurify";

export const truncateText = (text: string, length = 140) => {
  if (!text) return "";
  return text.length > length ? `${text.slice(0, length)}…` : text;
};

export const sanitizeField = (value: unknown) => {
  if (typeof value !== "string") return "";
  return DOMPurify.sanitize(value.trim(), { ALLOWED_TAGS: [], ALLOWED_ATTR: [] });
};
