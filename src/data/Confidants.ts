import confidants from "../../data/confidants.json";
export const Confidants: Confidant[] = confidants;

export const getConfidant = (name: string): Confidant | StoryConfidant | undefined => {
  for (let confidant of Confidants) {
    if (confidant.name == name) return confidant;
  }
  for (let confidant of StoryConfidants) {
    if (confidant.name == name) return Object.assign(confidant, { story: true });
  }
};

export const StoryConfidants: StoryConfidant[] = [
  {
    name: "magician",
    character: "Morgana",
  },
  {
    name: "fool",
    character: "Igor",
  },
  {
    name: "judgement",
    character: "Sae Niijima",
  },
  {
    name: "strength",
    character: "Justine & Caroline",
  },
];

export interface StoryConfidant {
  name: string;
  character: string;
  story?: true;
}
export interface Confidant {
  name: string;
  character: string;
  benefits: ConfidantBenefit[];
  ranks: ConfidantRank[];
}
export interface ConfidantBenefit {
  name: string;
  rank: number | string | "Max" | "Royal";
  description: string;
}
export interface ConfidantRank {
  rank: number | string;
  questions?: ConfidantQuestion[];
  meta?: RankMetadata;
}
export interface ConfidantQuestion {
  number: number | string | "Follow-up";
  answers: ConfidantAnswer[];
}
export interface ConfidantAnswer {
  answer: string;
  points: number;
  max?: boolean;
  romance?: boolean; // starts romance
  bad?: boolean;
  end?: boolean; // ends romance
}
export interface RankMetadata {
  requirements?: ConfidantLevelRequirements;
  romance?: boolean; // requires romance
}
export interface ConfidantLevelRequirements {
  story?: boolean; // requires story progress
  trueEnding?: boolean; // requires progress on true ending
  secondSemester?: boolean; // only after 8/22
  courage?: number;
  charm?: number;
  guts?: number;
  proficiency?: number;
  kindness?: number;
  knowledge?: number;
}
