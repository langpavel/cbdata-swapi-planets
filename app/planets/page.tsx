import PlanetsTable from "@/components/table/PlanetsTable";
import { fetchResourceData } from "@/lib/swapi/fetchResourceData";
import { PlanetsResource } from "@/lib/swapi/resources";
import { SwapiResourceHydrator } from "@/lib/swapi/SwapiResourceHydrator";

export default async function Planets() {
  const entries = [];
  try {
    entries.push(await fetchResourceData(PlanetsResource));
  } catch (error) {
    console.error("Failed to prefetch planets for SSR:", error);
  }

  return (
    <main>
      <h1 className="text-4xl font-bold m-4">Planets</h1>
      <SwapiResourceHydrator entries={entries}>
        <PlanetsTable />
      </SwapiResourceHydrator>
    </main>
  );
}
