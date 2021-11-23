import React from "react";
import { Row } from "react-table";
import Image from "next/image";
import { WeaknessLevels as Weaknesses } from "../data";
import { Persona } from "../data";
import { NameTags, ResElements, Resistance } from "../persona";
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
    Header: "",
    accessor: (persona: Persona) => persona.level,
    id: "title",
    columns: [
      { Header: "Lvl", width: 30, id: "lvl", accessor: (persona: Persona) => persona.level.toString() },
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
      { Header: "Strength", width: 60, id: "strength", accessor: (persona: Persona) => <>{persona.stats.strength.toString()}</> },
      { Header: "Magic", width: 50, id: "magic", accessor: (persona: Persona) => <>{persona.stats.magic.toString()}</> },
      { Header: "Endurance", width: 65, id: "endurance", accessor: (persona: Persona) => <>{persona.stats.endurance.toString()}</> },
      { Header: "Agility", width: 55, id: "agility", accessor: (persona: Persona) => <>{persona.stats.agility.toString()}</> },
      { Header: "Luck", width: 40, id: "luck", accessor: (persona: Persona) => <>{persona.stats.luck.toString()}</> },
    ],
  },
  {
    Header: "Elements",
    id: "elements",
    columns: [
      {
        Header: <Image src={ResElements.phys} alt="Physical" title="Physical" />,
        width: 55,
        id: "phys",
        sortType: sortElems,
        accessor: (persona: Persona) => persona.elements.physical,
        Cell: ({ value }) => <Resistance element="physical" value={value} />,
      },
      {
        Header: "Gun",
        width: 40,
        id: "gun",
        sortType: sortElems,
        accessor: (persona: Persona) => persona,
        Cell: ({ value }) => <Resistance element="gun" value={value.elements.gun} />,
      },
      {
        Header: "Fire",
        width: 40,
        id: "fire",
        sortType: sortElems,
        accessor: (persona: Persona) => persona,
        Cell: ({ value }) => <Resistance element="fire" value={value.elements.fire} />,
      },
      {
        Header: "Ice",
        width: 40,
        id: "ice",
        sortType: sortElems,
        accessor: (persona: Persona) => persona,
        Cell: ({ value }) => <Resistance element="ice" value={value.elements.ice} />,
      },
      {
        Header: "Electric",
        width: 55,
        id: "elec",
        sortType: sortElems,
        accessor: ({ elements: { electric } }: Persona) => electric,
        Cell: ({ value }) => <Resistance element="electric" value={value} />,
      },
      {
        Header: "Wind",
        width: 40,
        id: "wind",
        sortType: sortElems,
        accessor: ({ elements: { wind } }: Persona) => wind,
        Cell: ({ value }) => <Resistance element="wind" value={value} />,
      },
      {
        Header: "Psychic",
        width: 50,
        id: "psy",
        sortType: sortElems,
        accessor: ({ elements: { psychic } }: Persona) => psychic,
        Cell: ({ value }) => <Resistance element="psychic" value={value} />,
      },
      {
        Header: "Nuclear",
        width: 55,
        id: "nuke",
        sortType: sortElems,
        accessor: ({ elements: { nuclear } }: Persona) => nuclear,
        Cell: ({ value }) => <Resistance element="nuclear" value={value} />,
      },
      {
        Header: "Bless",
        width: 45,
        id: "bless",
        sortType: sortElems,
        accessor: ({ elements: { bless } }: Persona) => bless,
        Cell: ({ value }) => <Resistance element="bless" value={value} />,
      },
      {
        Header: "Curse",
        width: 45,
        id: "curse",
        sortType: sortElems,
        accessor: ({ elements: { curse } }: Persona) => curse,
        Cell: ({ value }) => <Resistance element="curse" value={value} />,
      },
    ],
  },
];
