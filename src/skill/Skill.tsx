import React, { createContext, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { getPersona, Skill as SkillInfo } from "../data";
import { Table } from "react-bootstrap";
import { CostTag, StatusTag } from ".";
import { Elements } from "../persona";

const SkillCtx = createContext<SkillInfo>({} as SkillInfo);
const useSkill = (): SkillInfo => useContext(SkillCtx);

export const BasicInfo = () => {
  const { cost, effect, element } = useSkill();
  return (
    <Table className="skill-info">
      <tbody>
        {cost && (
          <tr>
            <td>Cost</td>
            <td>
              <CostTag cost={cost} />
            </td>
          </tr>
        )}
        <tr>
          <td>Effect</td>
          <td>
            <StatusTag text={effect} />
          </td>
        </tr>
        <tr>
          <td>Element</td>
          <td>
            <Image src={Elements[element]} alt={element.toString()} title={element.toString()} draggable={false} />
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export const UnlockInfo = () => {
  const { talk, execute, card, unique } = useSkill();
  if (!talk && !execute && !card && !unique) return null;
  return (
    <Table className="skill-unlocks">
      <thead>
        <tr>
          <th colSpan={2}>Unlock Info</th>
        </tr>
      </thead>
      <tbody>
        {talk && <TalkInfo talk={talk} />}
        {execute && (
          <tr>
            <td>Execution</td>
            {execute.map((persona, index) => (
              <td key={index}>
                <Link href={`/persona/${persona}`}>
                  <a>{persona}</a>
                </Link>
                {index < execute.length - 1 ? ", " : ""}
              </td>
            ))}
          </tr>
        )}
        {card && (
          <tr>
            <td>Card:</td>
            <td>{card}</td>
          </tr>
        )}
        {unique && (
          <tr>
            <td>Unique to:</td>
            <td>
              <Link href={`/persona/${unique}`}>
                <a>{unique}</a>
              </Link>
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

const TalkInfo = ({ talk }: { talk: string }) => {
  const persona = getPersona(talk);
  if (!persona) return null;
  return (
    <tr>
      <td>Negotiation</td>
      <td>
        {persona.shadow} (
        <Link href={`/persona/${talk}`}>
          <a>{talk}</a>
        </Link>
        )
      </td>
    </tr>
  );
};

export const Skill = ({ skill, children }: { skill: SkillInfo; children: React.ReactNode | React.ReactNode[] }) => (
  <SkillCtx.Provider value={skill}>{children}</SkillCtx.Provider>
);
