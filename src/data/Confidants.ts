import confidants from "../../data/confidants.yml";

export interface ConfidantLevelRequirements {
  story?: boolean;          // requires story progress
  trueEnding?: boolean;     // requires progress on true ending
  secondSemester?: boolean; // only after 8/22
  courage?: number;
  charm?: number;
  guts?: number;
  proficiency?: number;
  kindness?: number;
  knowledge?: number;
}
export interface ConfidantBenefit {
  rank: number | "Max" | "Royal";
  name?: string;
  description: string;
}
export interface ConfidantQuestion {
  [answerText: string]: ConfidantAnswer;
}
export interface ConfidantAnswer {
  points?: number;
  romance?: boolean;
  bad?: boolean;
  end?: boolean;
}
export interface RankMetadata {
  requirements?: ConfidantLevelRequirements;
  romance?: boolean;
}

export interface ConfidantRank {
  [questionNumber: string]: ConfidantQuestion | RankMetadata | undefined;
  meta?: RankMetadata;
}

export interface Confidant {
  name: string;
  character: string;
  benefits: ConfidantBenefit[];
  questions: { [rank: string]: ConfidantRank };
}

export type ConfidantList = Confidant[];

export const getConfidant = (name: string): Confidant | void => {
  for (let confidant of Confidants) {
    if (confidant.name == name) return confidant;
  }
};

export const Confidants: ConfidantList = confidants;
