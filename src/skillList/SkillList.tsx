import React from "react";
import { useRouter } from "next/router";
import { Column, Row } from "react-table";
import PrepareTable from "../tableMaker";
import { Skills } from "../data";


const Headers = [
  {
    Header: "Skill List",
    id: "title",
    columns: [
      { Header: <>Name</>, accessor: "name", width: 100 },
      { Header: <>Cost</>, accessor: "cost", width: 50 },
      { Header: <>Element</>, accessor: "element", width: 50 },
      { Header: <>Effect</>, accessor: "effect", width: 350 },
    ],
  },
  {
    Header: "Flags",
    id: "flags",
    columns: [
      { Header: "Talk", accessor: "talk", width: 150 },
      { Header: "Fuse", accessor: "fuse", width: 100 },
      { Header: "Card", accessor: "card", width: 100 },
      { Header: "Unique", accessor: "unique", width: 100 },
    ],
  }
];

interface CellData {
  name: string | JSX.Element;
  cost: number | JSX.Element;
  effect: string | JSX.Element;
  element: string | JSX.Element;
  talk: string | JSX.Element;
  fuse: string | JSX.Element;
  card: string | JSX.Element;
  unique: string | JSX.Element;
}

const parseSkills = () => React.useMemo(() => {
  const pList: CellData[] = [];
  for (const skill of Skills) {
    pList.push({
      name: skill.name,
      cost: skill.cost ?? <>&nbsp;</>,
      effect: skill.effect,
      element: skill.element.toString() ?? <>&nbsp;</>,
      talk: skill.talk ?? <>&nbsp;</>,
      fuse: (skill.fuse && (typeof skill.fuse == "string" ? skill.fuse : skill.fuse.join(", "))) ?? <>&nbsp;</>,
      card: skill.card ?? <>&nbsp;</>,
      unique: skill.unique ?? <>&nbsp;</>
    });
  }
  return pList;
}, []);

const Row = ({ rowProps, cells }): JSX.Element => (
  <div {...rowProps()}>
    {cells.map((cell, index): JSX.Element => (
      <div {...cell.getCellProps()} key={index}>{cell.render("Cell")}</div>
    ))}
  </div>
)


export const SkillList = (): JSX.Element => {
  const columns = Headers as Column[];
  const data = parseSkills();
  const rowParser: (row: Row<{}>, index: number) => JSX.Element = (row, index) => (
    <Row key={index} rowProps={row.getRowProps} cells={row.cells} />
  )
  return PrepareTable({ columns, data, rowParser, className: "skills" });
};
export default SkillList;
