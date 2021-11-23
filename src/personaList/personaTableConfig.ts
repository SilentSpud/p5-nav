import { Row } from "react-table";
import { WeaknessLevels as Weaknesses } from "../data";

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
    Header: "Persona List",
    id: "title",
    columns: [
      { Header: "Lvl", accessor: "lvl", width: 30 },
      { Header: "Name", accessor: "name", width: 150 },
      { Header: "Arcana", accessor: "arcana", width: 70 },
      { Header: "Shadow", accessor: "shadow", width: 150 },
      { Header: "Personality", accessor: "personality", width: 70 },
    ],
  },
  {
    Header: "Stats",
    id: "stats",
    columns: [
      { Header: "Strength", accessor: "strength", width: 60 },
      { Header: "Magic", accessor: "magic", width: 50 },
      { Header: "Endurance", accessor: "endurance", width: 65 },
      { Header: "Agility", accessor: "agility", width: 55 },
      { Header: "Luck", accessor: "luck", width: 40 },
    ],
  },
  {
    Header: "Elements",
    id: "elements",
    columns: [
      { Header: "Physical", accessor: "physical", sortType: sortElems, width: 55 },
      { Header: "Gun", accessor: "gun", sortType: sortElems, width: 40 },
      { Header: "Fire", accessor: "fire", sortType: sortElems, width: 40 },
      { Header: "Ice", accessor: "ice", sortType: sortElems, width: 40 },
      { Header: "Electric", accessor: "electric", sortType: sortElems, width: 55 },
      { Header: "Wind", accessor: "wind", sortType: sortElems, width: 40 },
      { Header: "Psychic", accessor: "psychic", sortType: sortElems, width: 50 },
      { Header: "Nuclear", accessor: "nuclear", sortType: sortElems, width: 55 },
      { Header: "Bless", accessor: "bless", sortType: sortElems, width: 45 },
      { Header: "Curse", accessor: "curse", sortType: sortElems, width: 45 },
    ],
  },
];
