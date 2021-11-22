import React from "react";
import { useRouter } from "next/router";
import { Cell, Row } from "react-table";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faCrown, faDollarSign, faClock, faSquarePlus, faAsterisk, faCircleChevronUp } from "@fortawesome/free-solid-svg-icons";
import { Personas, PersonaProps, WeaknessLevels as Weaknesses } from "../data";
import { PersonaHeaders } from "./personaTableConfig";
import PrepareTable from "../tableMaker";
import { NameTags, Resistance } from "../persona";

interface CellData {
  lvl: number | JSX.Element;
  name: string | JSX.Element;
  shadow: string | JSX.Element | undefined;
  arcana: string | JSX.Element;
  personality: string | JSX.Element | undefined;
  strength: number | JSX.Element;
  magic: number | JSX.Element;
  endurance: number | JSX.Element;
  agility: number | JSX.Element;
  luck: number | JSX.Element;
  physical: string | JSX.Element;
  gun: string | JSX.Element;
  fire: string | JSX.Element;
  ice: string | JSX.Element;
  electric: string | JSX.Element;
  wind: string | JSX.Element;
  psychic: string | JSX.Element;
  nuclear: string | JSX.Element;
  bless: string | JSX.Element;
  curse: string | JSX.Element;
}

const ParsePersona = () =>
  React.useMemo(() => {
    const pList: CellData[] = [];
    for (const persona of Personas) {
      pList.push({
        lvl: persona.level,
        name: <NameTags persona={persona} />,
        shadow: persona.shadow,
        arcana: persona.arcana,
        personality: persona.personality,
        strength: persona.stats.strength,
        magic: persona.stats.magic,
        endurance: persona.stats.endurance,
        agility: persona.stats.agility,
        luck: persona.stats.luck,
        physical: persona.elements.physical,
        gun: persona.elements.gun,
        fire: persona.elements.fire,
        ice: persona.elements.ice,
        electric: persona.elements.electric,
        wind: persona.elements.wind,
        psychic: persona.elements.psychic,
        nuclear: persona.elements.nuclear,
        bless: persona.elements.bless,
        curse: persona.elements.curse,
      });
    }
    return pList;
  }, []);

const cellParser = (cell: Cell) => {
  switch (cell?.column?.parent?.id) {
    case "elements": {
      return <Resistance value={cell.value} inherits={cell.getCellProps} />;
    }
    case "stats": {
      return <div {...cell.getCellProps({ className: "stats" })}>{cell.render("Cell")}</div>;
    }

    default: {
      return <div {...cell.getCellProps()}>{cell.render("Cell")}</div>;
    }
  }
};

export const PersonaList = (): JSX.Element => {
  const columns = PersonaHeaders(),
    data = ParsePersona();
  const router = useRouter();
  const clickHandler = (evt: React.MouseEvent<HTMLDivElement>) => {
    const targetPersona = evt.currentTarget.querySelector<HTMLElement>('div[role="cell"]:nth-child(2)')?.innerText ?? "";
    router.push(`/persona/${encodeURIComponent(targetPersona)}`);
  };
  const rowParser = (row: Row, i: number) => {
    return (
      <div {...row.getRowProps()} onClick={clickHandler}>
        {row.cells.map((cell) => cellParser(cell))}
      </div>
    );
  };
  return PrepareTable({ columns, data, rowParser, className: "personas" });
};
export default PersonaList;
