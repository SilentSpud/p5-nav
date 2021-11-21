import skills from "../../data/skills.yml";
export const Skills: SkillData[] = skills;
export interface SkillData {
  name: string;
  cost?: number;
  effect: string;
  element: ResElems | SkillElems;
  personas?: {
    [name: string]: number;
  };
  talk?: string;
  fuse?: string | string[];
  card?: string;
  unique?: string;
  dlc?: boolean;
  note?: string;
}
export enum ResElems {
  "phys",
  "gun",
  "fire",
  "ice",
  "electric",
  "wind",
  "psy",
  "nuclear",
  "bless",
  "curse",
}
export enum SkillElems {
  "almighty",
  "ailment",
  "support",
  "passive",
  "healing",
  "trait",
}
