interface Requirements {
  story?: boolean;
  courage?: number;
  charm?: number;
  proficiency?: number;
  trueEnding?: boolean;
  kindness?: number;
  date?: string;
  knowledge?: number;
};
interface Benefit {
  rank: number | "max" | "royal";
  description: string;
}
interface Question {
  points?: number;
  romance?: boolean;
  bad?: boolean;
  end?: boolean;
}
interface RankMetadata extends Question {
  requirements?: Requirements;
  unlock?: string;
  romance?: boolean;
}

interface Rank {
  [questionNumber: string]: Question;
  meta: RankMetadata
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
