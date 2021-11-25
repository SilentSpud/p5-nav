import React from "react";
import Link from "next/link";
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
            id: "element",
            width: 30,
            accessor: (skill: Skill) => skill.element,
            Header: "Element",
            Cell: ({ value }) => <Image src={Elements[value]} alt={value} title={value} draggable={false} />,
          },
          {
            id: "name",
            width: 100,
            accessor: ({ name }: Skill) => name,
            Header: "Name",
            Cell: ({ row: { original } }) => <SkillTags skill={original} />,
          },
          {
            id: "cost",
            width: 20,
            accessor: (skill: Skill) => skill.cost,
            Header: "Cost",
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

export const SkillList = (): JSX.Element => {
  const headers = Headers();
  const rowParser = ({ getRowProps, cells, values: { name } }: Row, index: number) => (
    <Link key={index} href={`/skill/${name}`}><a {...getRowProps()}>
      {cells.map(
        (cell: Cell, index: number): JSX.Element => (
          <div {...cell.getCellProps()} key={index}>
            {cell.render("Cell")}
          </div>
        )
      )}
    </a></Link>
  );
  return <PrepareTable {...{ columns: headers, data: Skills, rowParser, className: "skills", sortId: "name" }} />;
};
export default SkillList;
