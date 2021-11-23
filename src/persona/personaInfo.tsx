import React from "react";
import { Table } from "react-bootstrap";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { Elements, NameTags, Persona, usePersona, ArcanaPopup } from ".";
import { getPersona, PersonaProps } from "../data";

const BasicInfo = () => {
  const { arcana, level, trait, inherits, item, alarmItem } = usePersona();
  return (
    <Table>
      <tbody>
        <tr>
          <td>Arcana:</td>
          <td>
            <ArcanaPopup arcana={arcana.toLowerCase()} />
          </td>
        </tr>
        <tr>
          <td>Level:</td>
          <td>{level}</td>
        </tr>
        {trait && (
          <tr>
            <td>Trait:</td>
            <td>{trait}</td>
          </tr>
        )}
        {inherits && (
          <tr>
            <td>Inherits:</td>
            <td>
              <Image src={Elements[inherits]} alt={inherits} title={inherits} draggable={false} />
            </td>
          </tr>
        )}
        {item && (
          <tr>
            <td>Execution Item:</td>
            <td>{item}</td>
          </tr>
        )}
        {alarmItem && (
          <tr>
            <td>Alarm Item:</td>
            <td>{alarmItem}</td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

const ShadowInfo = () => {
  const { shadow, personality } = usePersona();
  return (
    <Table>
      <thead>
        <tr>
          <th colSpan={2}>Shadow</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Shadow:</td>
          <td>{shadow}</td>
        </tr>
        <tr>
          <td>Personality:</td>
          <td>{personality}</td>
        </tr>
      </tbody>
    </Table>
  );
};

const StatsTable = () => {
  const {
    stats: { strength, magic, endurance, agility, luck },
  } = usePersona();
  return (
    <Table className="persona-stats">
      <thead>
        <tr>
          <th colSpan={5}>Stats</th>
        </tr>
        <tr>
          <th>Strength</th>
          <th>Magic</th>
          <th>Endurance</th>
          <th>Agility</th>
          <th>Luck</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{strength}</td>
          <td>{magic}</td>
          <td>{endurance}</td>
          <td>{agility}</td>
          <td>{luck}</td>
        </tr>
      </tbody>
    </Table>
  );
};
const SkillTable = () => {
  const { skills } = usePersona();
  return (
    <Table className="persona-skills">
      <thead>
        <tr>
          <th colSpan={2}>Skills</th>
        </tr>
      </thead>
      <tbody>
        {skills.map((skill, index) => (
          <tr key={index}>
            <td>{skill.name}</td>
            <td>{skill.level}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export const PersonaInfo = () => {
  const router = useRouter();
  let { persona } = router.query;
  switch (typeof persona) {
    case "string":
      break;
    case "object":
      persona = persona[0];
    case "undefined":
      return null;
  }
  const info = getPersona(decodeURIComponent(persona));
  if (!persona || !info) return null;
  return (
    <Persona persona={info}>
      <h1>
        <NameTags persona={info} />
      </h1>
      <BasicInfo />
      {info.shadow && <ShadowInfo />}
      <StatsTable />
      <SkillTable />
    </Persona>
  );
};
