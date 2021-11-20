import confidants from "../../data/confidants.yml";
export const Confidants: ConfidantList = confidants;

export type ConfidantList = Confidant[];
export interface Confidant {
  name: string;
  character: string;
  benefits: ConfidantBenefit[];
  ranks: ConfidantRank[];
}
export interface ConfidantBenefit {
  name: string;
  rank: number | "Max" | "Royal";
  description: string;
}
export interface ConfidantRank {
  rank: string;
  questions?: ConfidantQuestion[];
  meta?: RankMetadata;
}
export interface ConfidantQuestion {
  number: string;
  answers: ConfidantAnswer[];
}
export interface ConfidantAnswer {
  answer: string;
  points?: number;
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
