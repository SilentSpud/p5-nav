import React from "react";
import { useHistory } from "react-router-dom";
import { Personas, WeaknessLevels as Weaknesses } from "../data"
import { personaHeaders } from "./personaTableConfig";
import prepareTable from "../tableMaker";
import { Cell, Row } from "react-table";

const personaParser = () => React.useMemo(() => {
  const pList = [];
  for (const persona of Personas) {
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

export const personaList = (): JSX.Element => {
  const columns = personaHeaders(), data = personaParser();
  const history = useHistory();
  const clickHandler = (evt: React.MouseEvent<HTMLDivElement>) => {
    const targetPersona = evt.currentTarget.querySelector<HTMLElement>("div[role=\"cell\"]:nth-child(2)").innerText ?? "";
    history.push(`/persona/${targetPersona}`);
  };
  const rowParser = (row: Row, i: number) => {
    return (
      <div key={i} {...row.getRowProps()} onClick={clickHandler}>
        {row.cells.map((cell) => cellParser(cell))}
      </div>
    );
  }
  return prepareTable({ columns, data, rowParser });
}
export default personaList;
