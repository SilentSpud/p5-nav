import React from "react";

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
