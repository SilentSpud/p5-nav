import React, { createContext, useContext } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { getPersona, getSkill, Persona, Skill } from "../data";
import { Table } from "react-bootstrap";
import { CostTag, SkillTags, StatusTag } from ".";
import { Elements } from "../persona";

const SkillCtx = createContext<Skill>({} as Skill);
const useSkill = (): Skill => useContext(SkillCtx);

/*
interface Skill {
  name: string;
  cost?: number;
  effect: string;
  element: string | ResElems | SkillElems;
  personas?: PersonaRef[];
  talk?: string;
  fuse?: string | string[];
  card?: string;
  unique?: string;
}
*/

const BasicInfo = () => {
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

const UnlockInfo = () => {
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
        {talk &&
          (() => {
            const persona = getPersona(talk) as Persona;
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
          })()}
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
            <td>Unique:</td>
            <td>{unique}</td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

export const SkillInfo = () => {
  const router = useRouter();
  let { skill } = router.query;
  switch (typeof skill) {
    case "string":
      break;
    case "object":
      skill = skill[0];
    case "undefined":
      return null;
  }
  const info = getSkill(decodeURIComponent(skill));
  if (!skill || !info) return null;

  return (
    <SkillCtx.Provider value={info}>
      <h1>
        <SkillTags skill={info} />
      </h1>
      <BasicInfo />
      <UnlockInfo />
    </SkillCtx.Provider>
  );
};
