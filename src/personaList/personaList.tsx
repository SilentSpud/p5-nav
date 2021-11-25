import React from "react";
import Link from "next/link";
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
  const rowParser = ({ getRowProps, cells, values: { name } }: Row, i: number) => (
    <Link key={i} href={`/persona/${name}`}><a {...getRowProps()}>
      {cells.map((cell) => cellParser(cell))}
    </a></Link>
  );
  return <PrepareTable {...{ columns: personaHeaders, data: Personas, rowParser, className: "personas" }} />;
};
export default PersonaList;
