import React from "react";
import { Table } from "react-bootstrap";
import { useConfidant } from ".";
import { FaMinus, FaAngleUp, FaAngleDoubleUp, FaArrowUp } from "react-icons/fa";
import { ConfidantAnswer, ConfidantLevelRequirements, ConfidantRank, RankMetadata } from "../data";

const camel = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);

export const ConfidantIntro = () => {
  const { name, character } = useConfidant();

  return (
    <h2>
      {camel(name)} <span className="char-name">{character}</span>
    </h2>
  );
};

export const ConfidantBenefits = () => {
  const { benefits } = useConfidant();
  return (
    <>
      <Table striped bordered>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {benefits.map((row, index) => (
            <tr key={index}>
              <td>{row.rank > 9 ? row.rank == 10 ? "Max" : "Royal" : row.rank}</td>
              <td>{row.name}</td>
              <td>{row.description}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export const ConfidantAnswers = () => {
  const { ranks } = useConfidant();
  return (
    <>
      {ranks.map((rank, index) => (
        <Rank rank={rank} key={index} />
      ))}
    </>
  );
};

const parseRequirements = (reqs: ConfidantLevelRequirements) => {
  if (reqs.story) return "Unlocked through story progression";
  if (reqs.trueEnding) return "Requires progressing towards true ending";
  if (reqs.secondSemester) return "Only unlockable after 8/22";

  if (reqs.courage) return `Requires ${reqs.courage == 5 ? "Max" : `Level ${reqs.courage}`} Courage`;
  if (reqs.charm) return `Requires ${reqs.charm == 5 ? "Max" : `Level ${reqs.charm}`} Charm`;
  if (reqs.guts) return `Requires ${reqs.guts == 5 ? "Max" : `Level ${reqs.guts}`} Guts`;
  if (reqs.proficiency) return `Requires ${reqs.proficiency == 5 ? "Max" : `Level ${reqs.proficiency}`} Proficiency`;
  if (reqs.kindness) return `Requires ${reqs.kindness == 5 ? "Max" : `Level ${reqs.kindness}`} Kindness`;
  if (reqs.knowledge) return `Requires ${reqs.knowledge == 5 ? "Max" : `Level ${reqs.knowledge}`} Knowledge`;
};

const TableHead = ({ rank, meta }: { rank: string | number; meta: RankMetadata | undefined }) => (
  <thead>
    <tr>
      <th colSpan={4}>
        {rank > 9 ? rank == 10 ? "Max" : "Royal" : `Rank ${rank}`}
        {meta && meta.romance && " (Romance)"}
      </th>
    </tr>
    {meta && meta.requirements && (
      <tr>
        <th colSpan={4} className="requirements-cell">
          {parseRequirements(meta.requirements)}
        </th>
      </tr>
    )}
  </thead>
);

const Points = ({ points, max }: { points: number; max: boolean }) => {
  const Symbol = (() => {
    switch (points) {
      case 1:
        return FaAngleUp;
      case 2:
        return FaArrowUp;
      case 3:
        return FaAngleDoubleUp;
      default:
        return FaMinus;
    }
  })();
  return (
    <span className="answer-points">
      <Symbol className={max ? "max-points" : ""} title={`+${points} points`} />
    </span>
  );
};

const Rank = ({ rank: { rank, meta, questions } }: { rank: ConfidantRank }) => (
  <Table bordered className="answers-table">
    <TableHead rank={rank} meta={meta} />
    <tbody>
      {questions &&
        questions.map((question, index) => (
          <tr key={index}>
            <td key={index}>{question.number == "Follow-up" ? "Follow-up" : `Question ${question.number}`}</td>
            {question.answers && question.answers.map((answer, index) => <Answer answer={answer} key={index} />)}
            {question.answers && // Add padding if needed
              question.answers.length < 3 && <Padding count={question.answers.length} />}
          </tr>
        ))}
    </tbody>
  </Table>
);

const Answer = ({ answer: { answer, points, max } }: { answer: ConfidantAnswer }) => (
  <td>
    {answer} <Points points={points} max={max ?? false} />
  </td>
);

const Padding = ({ count }: { count: number }) => {
  if (count == 3) return null;
  return (
    <>
      {Array.from(Array(3 - count)).map((_row, index) => (
        <td key={index}></td>
      ))}
    </>
  );
};

export const ConfidantInfo = {
  intro: ConfidantIntro,
  benefits: ConfidantBenefits,
  answers: ConfidantAnswers,
};
export default ConfidantInfo;
