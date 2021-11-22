import React from "react";
import { Table } from "react-bootstrap";
import { useConfidant } from ".";
import { ConfidantLevelRequirements, ConfidantRank, RankMetadata } from "../data";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faMinus, faAngleUp, faAnglesUp, faArrowUp, IconDefinition } from "@fortawesome/free-solid-svg-icons";

const camel = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);

export const ConfidantIntro = () => {
  const { name, character } = useConfidant();

  return (
    <>
      <h2>{camel(name)}</h2>
      <h3>{character}</h3>
    </>
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
              <td>{row.rank}</td>
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
  return <>{ranks.map((rank, index) => parseRank(rank, index))}</>;
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
        {rank == "Max" ? "Max" : `Rank ${rank}`}
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
  const symbol = (() => {
    switch (points) {
      case 1:
        return faAngleUp;
      case 2:
        return faAnglesUp;
      case 3:
        return faArrowUp;
      default:
        return faMinus;
    }
  })();
  return (
    <span className="answer-points">
      <Icon icon={symbol} className={max ? "max-points" : ""} title={`+${points} points`} />
    </span>
  );
};

const parseRank = (rank: ConfidantRank, index: number) => {
  return (
    <Table bordered key={index} className="answers-table">
      <TableHead rank={rank.rank} meta={rank.meta} />
      <tbody>
        {rank.questions &&
          rank.questions.map((question, index) => (
            <tr key={index}>
              <td>{question.number == "Follow-up" ? "Follow-up" : `Question ${question.number}`}</td>
              {question.answers &&
                question.answers.map((answer, index) => {
                  // Create td with span for each answer
                  return (
                    <td key={index}>
                      {answer.answer} <Points points={answer.points} max={answer.max ?? false} />
                    </td>
                  );
                })}
              {question.answers &&
                question.answers.length < 3 &&
                (() => {
                  // Add padding if needed
                  const elems: JSX.Element[] = [];
                  for (let i = question.answers.length; i < 3; i++) {
                    elems.push(<td></td>);
                  }
                  return elems;
                })()}
            </tr>
          ))}
      </tbody>
    </Table>
  );
};

export const ConfidantInfo = {
  intro: ConfidantIntro,
  benefits: ConfidantBenefits,
  answers: ConfidantAnswers,
};
export default ConfidantInfo;
