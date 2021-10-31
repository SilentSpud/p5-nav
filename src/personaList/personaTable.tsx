import React from "react";
import personaMap, { Weaknesses } from "../data/Personas"
import { personaHeaders } from "./PersonaTableConfig";
import prepareTable from "../tableMaker";
import { Cell } from "react-table";
import PersonaPopup from "./PersonaPopup";

const personaParser = () => React.useMemo(() => {
  const pList = [];
  for (const persona of personaMap) {
    pList.push({
      lvl: persona.level,
      name: persona.name,
      shadow: persona.shadow,
      arcana: persona.arcana,
      personality: persona.personality,
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
}, []);


const cellParser = (cell: Cell) => {
  switch (cell.column.parent.id) {
    case 'elements': {
      switch (cell.value) {
        case Weaknesses.resist: return <div {...cell.getCellProps({ className: ("text-warning elem") })}>Res</div>;
        case Weaknesses.repel: return <div {...cell.getCellProps({ className: ("text-danger elem") })}>Rep</div>;
        case Weaknesses.weak: return <div {...cell.getCellProps({ className: ("text-success elem") })}>Weak</div>;
        case Weaknesses.none: return <div {...cell.getCellProps({ className: ("elem") })}>&nbsp;</div>;
        case Weaknesses.absorb: return <div {...cell.getCellProps({ className: ("text-info elem") })}>Abs</div>;
        case Weaknesses.nullify: return <div {...cell.getCellProps({ className: ("text-light elem") })}>Null</div>;
      }
    }
    case 'stats': {
      return <div {...cell.getCellProps({ className: "stats" })}>{cell.render("Cell")}</div>
    }

    default: {
      return <div {...cell.getCellProps()}>{cell.render("Cell")}</div>
    }
  }
}

const showPopup = (evt) => {
  const targetPersona = evt.currentTarget.querySelector("div[role=\"cell\"]:nth-child(2)").innerText ?? "";

  console.log(targetPersona);
}


const makeTable = (): JSX.Element => {
  const columns = personaHeaders(), data = personaParser(), rowHandler = cellParser, clickHandler = showPopup;
  return prepareTable({ columns, data, rowHandler, clickHandler });
}
export default makeTable;
