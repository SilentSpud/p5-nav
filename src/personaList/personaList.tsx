import React from "react";
import { useRouter } from "next/router";
import { Cell, Column, Row } from "react-table";
import { Personas } from "../data";
import { personaHeaders } from "./personaTableConfig";
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

const cellParser = (cell: Cell) => {
  switch (cell?.column?.parent?.id) {
    case "stats": {
      return <div {...cell.getCellProps({ className: "stats" })}>{cell.render("Cell")}</div>;
    }

    default: {
      return <div {...cell.getCellProps()}>{cell.render("Cell")}</div>;
    }
  }
};

export const PersonaList = (): JSX.Element => {
  const data = Personas;
  const router = useRouter();
  const columns = personaHeaders as Column[];
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
