import React from "react";
import { Row } from "react-table";
import { WeaknessLevels as Weaknesses } from "../data";
import { Persona } from "../data";
import { NameTags, Resistance } from "../persona";
import { SearchForm } from "../table";

const sortElems = (rowA: Row, rowB: Row, columnId: string) => {
  const sortOrder = [
    Weaknesses.weak as string,
    Weaknesses.none as string,
    Weaknesses.nullify as string,
    Weaknesses.repel as string,
    Weaknesses.absorb as string,
    Weaknesses.resist as string,
  ];
  const sortA = rowA.values[columnId],
    sortB = rowB.values[columnId];
  if (sortA == sortB) return 0;
  return sortOrder.indexOf(sortA) < sortOrder.indexOf(sortB) ? 1 : -1;
};

export const personaHeaders = [
  {
    Header: <SearchForm />,
    accessor: (persona: Persona) => persona.level,
    id: "title",
    columns: [
      { Header: "Lvl", width: 30, id: "lvl", accessor: (persona: Persona) => persona.level },
      { Header: "Name", width: 150, id: "name", accessor: (persona: Persona) => <NameTags persona={persona} /> },
      { Header: "Arcana", width: 70, id: "arcana", accessor: (persona: Persona) => persona.arcana },
      { Header: "Shadow", width: 150, id: "shadow", accessor: (persona: Persona) => persona.shadow ?? null },
      { Header: "Personality", width: 70, id: "personality", accessor: (persona: Persona) => persona.personality ?? null },
    ],
  },
  {
    Header: "Stats",
    id: "stats",
    columns: [
      { Header: "Strength", width: 60, id: "strength", accessor: (persona: Persona) => persona.stats.strength },
      { Header: "Magic", width: 50, id: "magic", accessor: (persona: Persona) => persona.stats.magic },
      { Header: "Endurance", width: 65, id: "endurance", accessor: (persona: Persona) => persona.stats.endurance },
      { Header: "Agility", width: 55, id: "agility", accessor: (persona: Persona) => persona.stats.agility },
      { Header: "Luck", width: 40, id: "luck", accessor: (persona: Persona) => persona.stats.luck },
    ],
  },
  {
    Header: "Elements",
    id: "elements",
    columns: [
      {
        Header: "Physical",
        width: 55,
        id: "physical",
        sortType: sortElems,
        accessor: (persona: Persona) => <Resistance element="physical" value={persona.elements.physical} />,
      },
      { Header: "Gun", width: 40, id: "gun", sortType: sortElems, accessor: (persona: Persona) => <Resistance element="gun" value={persona.elements.gun} /> },
      {
        Header: "Fire",
        width: 40,
        id: "fire",
        sortType: sortElems,
        accessor: (persona: Persona) => <Resistance element="fire" value={persona.elements.fire} />,
      },
      { Header: "Ice", width: 40, id: "ice", sortType: sortElems, accessor: (persona: Persona) => <Resistance element="ice" value={persona.elements.ice} /> },
      {
        Header: "Electric",
        width: 55,
        id: "electric",
        sortType: sortElems,
        accessor: ({ elements: { electric } }: Persona) => <Resistance element="electric" value={electric} />,
      },
      {
        Header: "Wind",
        width: 40,
        id: "wind",
        sortType: sortElems,
        accessor: ({ elements: { wind } }: Persona) => <Resistance element="wind" value={wind} />,
      },
      {
        Header: "Psychic",
        width: 50,
        id: "psychic",
        sortType: sortElems,
        accessor: ({ elements: { psychic } }: Persona) => <Resistance element="psychic" value={psychic} />,
      },
      {
        Header: "Nuclear",
        width: 55,
        id: "nuclear",
        sortType: sortElems,
        accessor: ({ elements: { nuclear } }: Persona) => <Resistance element="nuclear" value={nuclear} />,
      },
      {
        Header: "Bless",
        width: 45,
        id: "bless",
        sortType: sortElems,
        accessor: ({ elements: { bless } }: Persona) => <Resistance element="bless" value={bless} />,
      },
      {
        Header: "Curse",
        width: 45,
        id: "curse",
        sortType: sortElems,
        accessor: ({ elements: { curse } }: Persona) => <Resistance element="curse" value={curse} />,
      },
    ],
  },
];
