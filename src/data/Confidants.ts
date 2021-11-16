import confidants from "../../data/confidants.yml";

export interface ConfidantLevelRequirements {
  story?: boolean;
  trueEnding?: boolean;
  date?: string;
  courage?: number | "max";
  charm?: number | "max";
  proficiency?: number | "max";
  kindness?: number | "max";
  knowledge?: number | "max";
}
export interface ConfidantBenefit {
  rank: number | "max" | "royal";
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
  unlock?: string;
  romance?: boolean;
}

export interface ConfidantRank {
  [questionNumber: string]: ConfidantQuestion | RankMetadata | undefined;
  meta?: RankMetadata;
}

export interface Confidant {
  name: string;
  character: string;
  benefits: { [name: string]: ConfidantBenefit };
  questions: { [rank: string]: ConfidantRank };
}

export type ConfidantList = Confidant[];

export const getConfidant = (name: string): Confidant | void => {
  for (let confidant of Confidants) {
    if (confidant.name == name) return confidant;
  }
}

export const Confidants: ConfidantList = confidants;
