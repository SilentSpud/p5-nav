import React from "react";
import { useParams } from "react-router-dom";
import { getPersona, WeaknessLevels as Weaknesses } from "../data";


/* interface PersonaData {
  name: string;
  arcana: string;
  level: number;
  stats: {
    strength: number;
    magic: number;
    endurance: number;
    agility: number;
    luck: number;
  };
  elems: {
    physical: WeaknessLevels;
    gun: WeaknessLevels;
    fire: WeaknessLevels;
    ice: WeaknessLevels;
    electric: WeaknessLevels;
    wind: WeaknessLevels;
    psychic: WeaknessLevels;
    nuclear: WeaknessLevels;
    bless: WeaknessLevels;
    curse: WeaknessLevels;
  };
  skills: {
    [index: string]: number;
  };
  personality?: string;
  shadow?: string;
  special?: boolean;
  max?: boolean;
  dlc?: boolean;
  note?: string;
  rare?: boolean;
  inherits?: string;
  item?: string;
  alarm?: string;
  trait?: string;
}*/

export const personaInfo = (props) => {
  const { id } = useParams<{ id: string }>();
  const personaId = decodeURIComponent(id);
  const Persona = getPersona(personaId);
  return (
    <table>
      <tbody>
        <tr><td>Name:</td><td>{Persona.name}</td></tr>
        <tr><td>Arcana:</td><td>{Persona.arcana}</td></tr>
        <tr><td>Level:</td><td>{Persona.level}</td></tr>
      </tbody>
    </table>
  );
};
