import React from "react";
import { personaHeaders, Weaknesses } from "./PersonaClasses";
import prepareTable from "./tableMaker";
import personaMap from './../data/Personas';
import { Cell } from "react-table";

const personaParser = (personaList) => React.useMemo(() => {
  const pList = [];
  for (const persona of personaList) {
    pList.push({
      lvl: persona.level,
      name: persona.name,
      arcana: persona.arcana,
      strength: persona.stats.strength,
      magic: persona.stats.magic,
      endurance: persona.stats.endurance,
      agility: persona.stats.agility,
      luck: persona.stats.luck,
      physical: persona.elems.physical,
      gun: persona.elems.gun,
      fire: persona.elems.fire,
      ice: persona.elems.ice,
      electric: persona.elems.electric,
      wind: persona.elems.wind,
      psychic: persona.elems.psychic,
      nuclear: persona.elems.nuclear,
      bless: persona.elems.bless,
      curse: persona.elems.curse
    });
  }
  return pList;
}, [personaList]);


const cellParser = (cell: Cell) => {
  let cellClass = "";
  switch (cell.column.parent.id) {
    case 'elements': {
      cellClass = "elem";
      switch (cell.value) {
        case Weaknesses.resist: {
          return <div {...cell.getCellProps({ className: ("text-warning " + cellClass) })}>Res</div>
        }
        case Weaknesses.repel: {
          return <div {...cell.getCellProps({ className: ("text-danger " + cellClass) })}>Rep</div>
        }
        case Weaknesses.weak: {
          return <div {...cell.getCellProps({ className: ("text-success " + cellClass) })}>Weak</div>
        }
        case Weaknesses.none: {
          return <div {...cell.getCellProps({ className: (cellClass) })}>&nbsp;</div>
        }
        case Weaknesses.absorb: {
          return <div {...cell.getCellProps({ className: ("text-info " + cellClass) })}>Abs</div>
        }
        case Weaknesses.nullify: {
          return <div {...cell.getCellProps({ className: ("text-light " + cellClass) })}>Null</div>
        }
      }
    }
    case 'stats': {
      cellClass = "stat";
    }

    default: {
      return <div {...cell.getCellProps({ className: (cellClass) })}>{cell.render("Cell")}</div>
    }
  }
}
const makeTable = () => {
  return prepareTable(personaHeaders(), personaParser(personaMap), cellParser);
}
export default makeTable;
