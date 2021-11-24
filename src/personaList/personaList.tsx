import React from "react";
import { useRouter } from "next/router";
import { Cell, Row } from "react-table";
import { Personas } from "../data";
import { personaHeaders } from "./personaTableConfig";
import PrepareTable from "../table";

const cellParser = (cell: Cell) => {
  let className = "";
  switch (cell?.column?.parent?.id) {
    case "elements":
      className = "element";
      break;
    case "stats":
      className = "stats";
      break;
  }
  return <div {...cell.getCellProps({ className })}>{cell.render("Cell")}</div>;
};

export const PersonaList = (): JSX.Element => {
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
  return <PrepareTable {...{ columns: personaHeaders, data: Personas, rowParser: rowParser, className: "personas" }} />;
};
export default PersonaList;
