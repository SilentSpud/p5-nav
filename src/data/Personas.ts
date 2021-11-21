import personas from "../../data/personas.yml";
export const Personas: PersonaList = personas;

export const getPersona = (id: string): PersonaData | undefined => {
  for (const p of Personas) {
    if (p.name.toString() == id) return p;
  }
};

export enum WeaknessLevels {
  weak = "wk",
  none = "-",
  resist = "rs",
  nullify = "nu",
  repel = "rp",
  absorb = "ab",
}
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
  cur = "curse",
  alm = "almighty",
  ail = "ailment",
  sup = "support",
  pas = "passive",
  hea = "healing",
  tra = "trait",
}
export interface PersonaData {
  name: string;
  arcana: string;
  level: number;
  trait?: string;
  inherits?: string;
  item?: string;
  alarmItem?: string;
  shadow?: string;
  personality?: string;
  treasureDemon?: boolean;
  dlcExclusive?: boolean; // pay up
  specialFusion?: boolean; // ony available through a special fusion
  maxConfidant?: boolean; // only available if you've maxed out the confidant of the associated arcana
  thirdSemester?: boolean; // only available after 1/12
  newGamePlus?: boolean; // only available in NG+
  stats: {
    strength: number;
    magic: number;
    endurance: number;
    agility: number;
    luck: number;
  };
  elements: {
    physical: WeaknessLevels;
    gun: WeaknessLevels;
    fire: WeaknessLevels;
    ice: WeaknessLevels;
    electric: WeaknessLevels;
    wind: WeaknessLevels;
    psychic: WeaknessLevels;
    nuclear: WeaknessLevels;
    bless: WeaknessLevels;
    curse: WeaknessLevels;
  };
  skills: {
    [name: string]: number;
  };
}
export type PersonaList = PersonaData[];
