import React from "react";
import { Table } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import { Elements, usePersona, ArcanaPopup, Resistance } from ".";
import { DamageElements, SpecialElements } from "../data";

export const BasicInfo = () => {
  const { arcana, level, trait, inherits, item, alarmItem } = usePersona();
  const element = inherits ? DamageElements[inherits] ?? SpecialElements[inherits] : undefined;
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
              <Image src={Elements[inherits]} alt={element} title={element} draggable={false} />
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

export const ShadowInfo = () => {
  const { shadow, personality } = usePersona();
  return (
    <Table>
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

export const StatsTable = () => {
  const {
    stats: { strength, magic, endurance, agility, luck },
  } = usePersona();
  return (
    <Table className="persona-stats">
      <thead>
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

export const ElementsTable = () => {
  const {
    elements: { physical, gun, fire, ice, electric, wind, psychic, nuclear, bless, curse },
  } = usePersona();
  return (
    <Table className="persona-elems">
      <thead>
        <tr>
          <th>Physical</th>
          <th>Gun</th>
          <th>Fire</th>
          <th>Ice</th>
          <th>Electric</th>
          <th>Wind</th>
          <th>Psychic</th>
          <th>Nuclear</th>
          <th>Bless</th>
          <th>Curse</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <Resistance full element="physical" value={physical} />
          </td>
          <td>
            <Resistance full element="gun" value={gun} />
          </td>
          <td>
            <Resistance full element="fire" value={fire} />
          </td>
          <td>
            <Resistance full element="ice" value={ice} />
          </td>
          <td>
            <Resistance full element="electric" value={electric} />
          </td>
          <td>
            <Resistance full element="wind" value={wind} />
          </td>
          <td>
            <Resistance full element="psychic" value={psychic} />
          </td>
          <td>
            <Resistance full element="nuclear" value={nuclear} />
          </td>
          <td>
            <Resistance full element="bless" value={bless} />
          </td>
          <td>
            <Resistance full element="curse" value={curse} />
          </td>
        </tr>
      </tbody>
    </Table>
  );
};
export const SkillTable = () => {
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
            <td>{skill.level}</td>
            <td>
              <Link href={`/skill/${skill.name}`}>
                <a>{skill.name}</a>
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
