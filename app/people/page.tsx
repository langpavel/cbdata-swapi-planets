import PeopleTable from "@/components/table/PeopleTable";
import { fetchResourceData } from "@/lib/swapi/fetchResourceData";
import { PeopleResource } from "@/lib/swapi/resources";
import { SwapiResourceHydrator } from "@/lib/swapi/SwapiResourceHydrator";

export default async function People() {
  const entries = [];
  try {
    entries.push(await fetchResourceData(PeopleResource));
  } catch (error) {
    console.error("Failed to prefetch people for SSR:", error);
  }

  return (
    <main>
      <h1 className="text-4xl font-bold m-4">People</h1>
      <SwapiResourceHydrator entries={entries}>
        <PeopleTable />
      </SwapiResourceHydrator>
    </main>
  );
}
