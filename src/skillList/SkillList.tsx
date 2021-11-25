import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Row, Cell } from "react-table";
import PrepareTable from "../table";
import { Skills, Skill } from "../data";
import { SkillTags, CostTag } from "../skill";
import { Elements } from "../persona";

const Headers = () =>
  React.useMemo(
    () => [
      {
        Header: "Skill List",
        id: "title",
        columns: [
          {
            Header: <>Element</>,
            id: "element",
            width: 35,
            sort: true,
            accessor: (skill: Skill) => skill.element,
            Cell: ({ value }) => <Image src={Elements[value]} alt={value} title={value} draggable={false} />,
          },
          { Header: <>Name</>, id: "name", width: 100, accessor: (skill: Skill) => <SkillTags skill={skill} /> },
          {
            Header: <>Cost</>,
            id: "cost",
            width: 50,
            accessor: (skill: Skill) => skill.cost,
            Cell: ({ value }) => <CostTag cost={value} />,
          },
        ],
      },
      {
        Header: <>&nbsp;</>,
        id: "effect-empty",
        columns: [{ Header: <>Effect</>, id: "effect", width: 350, accessor: (skill: Skill) => skill.effect }],
      },
    ],
    []
  );

const Row = ({ rowProps, cells }): JSX.Element => (
  <div {...rowProps()}>
    {cells.map(
      (cell: Cell, index: number): JSX.Element => (
        <div {...cell.getCellProps()} key={index}>
          {cell.render("Cell")}
        </div>
      )
    )}
  </div>
);

export const SkillList = (): JSX.Element => {
  const headers = Headers();
  const rowParser: (row: Row<{}>, index: number) => JSX.Element = (row, index) => <Row key={index} rowProps={row.getRowProps} cells={row.cells} />;
  return <PrepareTable {...{ columns: headers, data: Skills, rowParser, className: "skills", sortId: "name" }} />;
};
export default SkillList;
