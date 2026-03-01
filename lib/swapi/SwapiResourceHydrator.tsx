"use client";

import { type ReactNode, useRef } from "react";
import { preloadSwapiEntry } from "@/lib/swapi/createSwapiStore";

type HydrationEntry = { url: string; data: unknown };

/**
 * Preloads server-fetched data into the SWAPI fetch store during render.
 *
 * Wrap table (or any resource-consuming) components with this so the store
 * already contains the data when they first render — both during SSR and
 * client hydration.
 *
 * @example
 * ```tsx
 * const result = await fetchResourceData(PlanetsResource);
 *
 * <SwapiResourceHydrator entries={[result]}>
 *   <PlanetsTable />
 * </SwapiResourceHydrator>
 * ```
 */
export function SwapiResourceHydrator({
  entries,
  children,
}: {
  entries: HydrationEntry[];
  children: ReactNode;
}) {
  const hydrated = useRef<true | null>(null);

  if (hydrated.current == null) {
    for (const { url, data } of entries) {
      preloadSwapiEntry(url, data);
    }
    hydrated.current = true;
  }

  return <>{children}</>;
}
