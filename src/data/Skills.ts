import skills from "../../data/skills.json";
export const Skills: Skill[] = skills;
export default Skills;

export const getSkill = (name: string): Skill | undefined => {
  for (const skill of Skills) {
    if (skill.name == name) return skill;
  }
};

export interface Skill {
  name: string;
  cost?: number;
  effect: string;
  element: string | ResElems | SkillElems;
  personas?: PersonaRef[];
  talk?: string;
  execute?: string[];
  card?: string;
  unique?: string;
}
export interface PersonaRef {
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
