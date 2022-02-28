import personas from "../../data/personas.json";
export const Personas: Persona[] = personas;
export default Personas;

export const getPersona = (id: string): Persona | undefined => {
  for (const persona of Personas) {
    if (persona.name.toString() == id) return persona;
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
export enum DamageElements {
  phys = "Physical",
  gun = "Gun",
  fire = "Fire",
  ice = "Ice",
  elec = "Electric",
  wind = "Wind",
  psy = "Psychic",
  nuke = "Nuclear",
  bless = "Bless",
  curse = "Curse",
}
export enum SpecialElements {
  almighty = "Almighty",
  ailment = "Ailment",
  support = "Support",
  passive = "Passive",
  healing = "Healing",
  trait = "Trait",
}
export interface Persona {
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
    physical: WeaknessLevels | string;
    gun: WeaknessLevels | string;
    fire: WeaknessLevels | string;
    ice: WeaknessLevels | string;
    electric: WeaknessLevels | string;
    wind: WeaknessLevels | string;
    psychic: WeaknessLevels | string;
    nuclear: WeaknessLevels | string;
    bless: WeaknessLevels | string;
    curse: WeaknessLevels | string;
  };
  skills: SkillUnlock[];
}
export interface SkillUnlock {
  name: string;
  level: number;
}
