const repo = process.env.NEXT_PUBLIC_REPO_NAME || "WebCompass";

export const basePath = process.env.NODE_ENV === "production" ? `/${repo}` : "";

export function withBasePath(path: string) {
  if (!path.startsWith("/")) return `${basePath}/${path}`;
  if (!basePath) return path;
  if (path.startsWith(`${basePath}/`) || path === basePath) return path;
  return `${basePath}${path}`;
}

