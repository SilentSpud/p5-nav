import skills from "../../data/skills.json";
export const Skills: SkillData[] = skills;

export const getSkill = (name: string): SkillData | undefined => {
  for (const skill of Skills) {
    if (skill.name == name) return skill;
  }
};

export interface SkillData {
  name: string;
  cost?: number;
  effect: string;
  element: string | ResElems | SkillElems;
  personas?: PersonaRef[];
  talk?: string;
  fuse?: string | string[];
  card?: string;
  unique?: string;
}
interface PersonaRef {
  name: string;
  level: number;
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
