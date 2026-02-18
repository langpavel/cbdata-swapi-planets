import * as v from "valibot";

export const Planet = v.object({
  name: v.string(),
  rotation_period: v.string(),
  orbital_period: v.string(),
  diameter: v.string(),
  climate: v.string(),
  gravity: v.string(),
  terrain: v.string(),
  surface_water: v.string(),
  population: v.string(),
  residents: v.array(v.string()),
  films: v.array(v.string()),
  created: v.string(),
  edited: v.string(),
  url: v.string(),
});

export type PlanetType = {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
};
