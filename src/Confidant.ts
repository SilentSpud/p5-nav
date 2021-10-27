export interface Requirements {
  story?: boolean;
  trueEnding?: boolean;
  date?: string;
  courage?: number | "max";
  charm?: number | "max";
  proficiency?: number | "max";
  kindness?: number | "max";
  knowledge?: number | "max";
};
export interface Benefit {
  rank: number | "max" | "royal";
  description: string;
}
export interface Question {
  [answerText: string]: Answer
}
export interface Answer {
  points?: number;
  romance?: boolean;
  bad?: boolean;
  end?: boolean;
}
export interface RankMetadata {
  requirements?: Requirements;
  unlock?: string;
  romance?: boolean;
}

export interface Rank {
  [questionNumber: string]: Question | RankMetadata;
  meta?: RankMetadata;
}

export interface Confidant {
  character: string;
  benefits: {
    [name: string]: Benefit;
  };
  questions: {
    [rank: string]: Rank
  }
}
export interface ConfidantList {
  [name: string]: Confidant;
}
export default Confidant;
