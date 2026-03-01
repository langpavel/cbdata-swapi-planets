import type { ResourceDefinition } from "@/lib/fetch-store/types";

/**
 * Fetches and parses resource data on the server.
 * Returns both the resolved URL and the parsed data so the caller can
 * seed the client-side store for hydration.
 *
 * @example
 * ```ts
 * const { url, data } = await fetchResourceData(PlanetsResource);
 * ```
 */
export async function fetchResourceData<T>(
  def: ResourceDefinition<T, []>,
): Promise<{ url: string; data: T }> {
  const url = typeof def.url === "string" ? def.url : def.url();
  if (!url) throw new Error("Resource URL resolved to null");

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(
      `Failed to fetch ${url}: ${res.statusText} (HTTP ${res.status})`,
    );
  }

  const raw = await res.json();
  const data = def.parse(raw);

  return { url, data };
}
