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
    </Persona>
  );
};
