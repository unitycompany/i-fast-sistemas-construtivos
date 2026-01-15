export function publicAsset(path: string): string {
  if (!path) return "/";
  return path.startsWith("/") ? path : `/${path}`;
}

export function brandAsset(fileName: string): string {
  return publicAsset(`brands/${fileName}`);
}
