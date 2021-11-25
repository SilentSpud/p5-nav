import React from "react";
import type { Row } from "react-table";
import { WeaknessLevels as Weaknesses } from "../data";
import type { Persona } from "../data";
import { NameTags, Resistance } from "../persona";

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

const ResistanceCell = ({ value, id }) => <Resistance element={id} value={value} />;
const ResistanceHeader = ({ text, caption }: { text: string; caption?: string }) => <span className="title" title={caption ?? ""} children={text} />;

export const personaHeaders = [
  {
    Header: "",
    id: "title",
    columns: [
      { id: "lvl", width: 30, sort: true, accessor: ({ level }: Persona) => level, Header: "Lvl" },
      {
        id: "name",
        width: 150,
        accessor: ({ name }: Persona) => name,
        Header: "Name",
        Cell: ({ row: { original } }) => <NameTags persona={original} />,
      },
      { id: "arcana", width: 70, accessor: ({ arcana }: Persona) => arcana, Header: "Arcana" },
      { id: "shadow", width: 150, accessor: ({ shadow }: Persona) => shadow, Header: "Shadow" },
      { id: "personality", width: 70, accessor: ({ personality }: Persona) => personality, Header: "Personality" },
    ],
  },
  {
    Header: "Stats",
    id: "stats",
    columns: [
      {
        id: "strength",
        width: 35,
        accessor: ({ stats: { strength } }: Persona) => strength,
        Header: <span className="title" title="Strength" children="Str" />,
        Cell: ({ value }) => <span className="mono" children={value} />,
      },
      {
        id: "magic",
        width: 35,
        accessor: ({ stats: { magic } }: Persona) => magic,
        Header: <span className="title" title="Magic" children="Mag" />,
        Cell: ({ value }) => <span className="mono" children={value} />,
      },
      {
        id: "endurance",
        width: 35,
        accessor: ({ stats: { endurance } }: Persona) => endurance,
        Header: <span className="title" title="Endurance" children="End" />,
        Cell: ({ value }) => <span className="mono" children={value} />,
      },
      {
        id: "agility",
        width: 35,
        accessor: ({ stats: { agility } }: Persona) => agility,
        Header: <span className="title" title="Agility" children="Agi" />,
        Cell: ({ value }) => <span className="mono" children={value} />,
      },
      {
        id: "luck",
        width: 35,
        accessor: ({ stats: { luck } }: Persona) => luck,
        Header: <span className="title" title="Luck" children="Luc" />,
        Cell: ({ value }) => <span className="mono" children={value} />,
      },
    ],
  },
  {
    Header: "Elements",
    id: "elements",
    columns: [
      {
        id: "phys",
        width: 35,
        sortType: sortElems,
        accessor: ({ elements: { physical } }: Persona) => physical,
        Header: <ResistanceHeader caption="Physical" text="Phys" />,
        Cell: ({ value, column: { id } }) => <ResistanceCell value={value} id={id} />,
      },
      {
        id: "gun",
        width: 35,
        sortType: sortElems,
        accessor: ({ elements: { gun } }: Persona) => gun,
        Header: <ResistanceHeader text="Gun" />,
        Cell: ({ value, column: { id } }) => <ResistanceCell value={value} id={id} />,
      },
      {
        id: "fire",
        width: 35,
        sortType: sortElems,
        accessor: ({ elements: { fire } }: Persona) => fire,
        Header: <ResistanceHeader text="Fire" />,
        Cell: ({ value, column: { id } }) => <ResistanceCell value={value} id={id} />,
      },
      {
        id: "ice",
        width: 35,
        sortType: sortElems,
        accessor: ({ elements: { ice } }: Persona) => ice,
        Header: <ResistanceHeader text="Ice" />,
        Cell: ({ value, column: { id } }) => <ResistanceCell value={value} id={id} />,
      },
      {
        id: "elec",
        width: 35,
        sortType: sortElems,
        accessor: ({ elements: { electric } }: Persona) => electric,
        Header: <ResistanceHeader caption="Electric" text="Elec" />,
        Cell: ({ value, column: { id } }) => <ResistanceCell value={value} id={id} />,
      },
      {
        id: "wind",
        width: 35,
        sortType: sortElems,
        accessor: ({ elements: { wind } }: Persona) => wind,
        Header: <ResistanceHeader text="Wind" />,
        Cell: ({ value, column: { id } }) => <ResistanceCell value={value} id={id} />,
      },
      {
        id: "psy",
        width: 35,
        sortType: sortElems,
        accessor: ({ elements: { psychic } }: Persona) => psychic,
        Header: <ResistanceHeader caption="Psychic" text="Psy" />,
        Cell: ({ value, column: { id } }) => <ResistanceCell value={value} id={id} />,
      },
      {
        id: "nuke",
        width: 35,
        sortType: sortElems,
        accessor: ({ elements: { nuclear } }: Persona) => nuclear,
        Header: <ResistanceHeader caption="Nuclear" text="Nuke" />,
        Cell: ({ value, column: { id } }) => <ResistanceCell value={value} id={id} />,
      },
      {
        id: "bless",
        width: 35,
        sortType: sortElems,
        accessor: ({ elements: { bless } }: Persona) => bless,
        Header: <ResistanceHeader caption="Bless" text="Bles" />,
        Cell: ({ value, column: { id } }) => <ResistanceCell value={value} id={id} />,
      },
      {
        id: "curse",
        width: 35,
        sortType: sortElems,
        accessor: ({ elements: { curse } }: Persona) => curse,
        Header: <ResistanceHeader caption="Curse" text="Curs" />,
        Cell: ({ value, column: { id } }) => <ResistanceCell value={value} id={id} />,
      },
    ],
  },
];
