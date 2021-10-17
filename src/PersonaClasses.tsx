import React from "react";
import { Row } from "react-table";

export const personaSchema = () => React.useMemo(
  () => [
    {
      Header: "Persona List",
      id: "title",
      className: "sticky",
      columns: [
        { Header: "Level",  accessor: "lvl",    width: 50 },
        { Header: "Name",   accessor: "name",   width: 200 },
        { Header: "Arcana", accessor: "arcana", width: 100 }
      ]
    },
    {
      Header: "Stats",
      id: "stats",
      columns: [
        { Header: "Strength",   accessor: "strength",   width: 65 },
        { Header: "Magic",      accessor: "magic",      width: 50 },
        { Header: "Endurance",  accessor: "endurance",  width: 75 },
        { Header: "Agility",    accessor: "agility",    width: 60 },
        { Header: "Luck",       accessor: "luck",       width: 50 }
      ]
    },
    {
      Header: "Elements",
      id: "elements",
      columns: [
        { Header: "Physical", accessor: "physical", sortType: sortElems, width: 70 },
        { Header: "Gun",      accessor: "gun",      sortType: sortElems, width: 40 },
        { Header: "Fire",     accessor: "fire",     sortType: sortElems, width: 40 },
        { Header: "Ice",      accessor: "ice",      sortType: sortElems, width: 50 },
        { Header: "Electric", accessor: "electric", sortType: sortElems, width: 60 },
        { Header: "Wind",     accessor: "wind",     sortType: sortElems, width: 50 },
        { Header: "Psychic",  accessor: "psychic",  sortType: sortElems, width: 70 },
        { Header: "Nuclear",  accessor: "nuclear",  sortType: sortElems, width: 70 },
        { Header: "Bless",    accessor: "bless",    sortType: sortElems, width: 70 },
        { Header: "Curse",    accessor: "curse",    sortType: sortElems, width: 70 }
      ]
    }
  ],
  []
);

const sortElems = (rowA: Row, rowB: Row, columnId: string) => {
  const sortOrder = [Weaknesses.weak.toString(), Weaknesses.none.toString(), Weaknesses.nullify.toString(), Weaknesses.repel.toString(), Weaknesses.absorb.toString(), Weaknesses.resist.toString()];
  return (sortOrder.indexOf(rowA.values[columnId]) < sortOrder.indexOf(rowB.values[columnId]) ? 1 : -1);
}

// elements with weakness stats
export enum DamageTypes {
  phy = "physical",
  gun = "gun",
  fir = "fire",
  ice = "ice",
  ele = "electric",
  wnd = "wind",
  psy = "psychic",
  nuc = "nuclear",
  ble = "bless",
  cur = "curse"/*,
  "almighty"
  "ailment"
  "support"
  "passive"
  "healing"
  "trait";*/
}
// weakness stats
export enum Weaknesses {
  weak = "wk",
  none = "-",
  resist = "rs",
  nullify = "nu",
  repel = "rp",
  absorb =  "ab"
}



// PersonaData.ts
export interface PersonaData {
  name: string;
  arcana: string;
  level: number;
  stats: {
    strength: number;
    magic: number;
    endurance: number;
    agility: number;
    luck: number;
  };
  elems: {
    physical: Weaknesses;
    gun: Weaknesses;
    fire: Weaknesses;
    ice: Weaknesses;
    electric: Weaknesses;
    wind: Weaknesses;
    psychic: Weaknesses;
    nuclear: Weaknesses;
    bless: Weaknesses;
    curse: Weaknesses;
  };
  skills: {
    [index: string]: number;
  };
  personality?: string;
  special?: boolean;
  max?: boolean;
  dlc?: boolean;
  note?: string;
  rare?: boolean;
  inherits?: string;
  item?: string;
  itemr?: string;
  trait?: string;
}

// SkillData.ts
export interface SkillData {
  name?: string;
  cost?: number;
  effect: string;
  element:
  | "phys"
  | "gun"
  | "fire"
  | "ice"
  | "electric"
  | "wind"
  | "psy"
  | "nuclear"
  | "bless"
  | "curse"
  | "almighty"
  | "ailment"
  | "support"
  | "passive"
  | "healing"
  | "trait";
  personas?: {
    [name: string]: number;
  };
  talk?: string;
  fuse?: string | string[];
  card?: string;
  unique?: string;
  dlc?: boolean;
  note?: string;

  // for display in list
  elemDisplay?: string;
  costDisplay?: string;
  personaDisplay?: string;
  talkDisplay?: string;
  fuseDisplay?: string;
}

export interface SkillMap {
  [index: string]: SkillData;
}
