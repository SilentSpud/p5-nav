import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { Row, Cell } from "react-table";
import PrepareTable from "../table";
import { Skills, Skill, PersonaRef } from "../data";
import { SkillTags, CostTag, StatusTag } from "../skill";
import { Elements } from "../persona";


const camel = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);
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
            Cell: ({ value }) => <Image src={Elements[value]} alt={camel(value)} title={camel(value)} draggable={false} />,
          },
          {
            id: "name",
            width: 60,
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
          {
            id: "effect",
            width: 175,
            accessor: ({ effect }: Skill) => effect,
            Header: "Effect",
            Cell: ({ value }) => <StatusTag text={value} />,
          },
        ],
      },
      {
        Header: <>&nbsp;</>,
        id: "details",
        columns: [
          {
            id: "personas",
            width: 250,
            accessor: ({ personas }: Skill) => personas,
            Header: "Personas",
            Cell: ({ value }) =>
              value ? (
                <span className="persona-links">
                  {value.map(({ name, level }: PersonaRef, index: number) => (
                    <span key={index}>
                      <Link href={`/persona/${encodeURIComponent(name)}`}>
                        <a>{name}</a>
                      </Link>
                      {level ? ` (${level})` : ""}
                      {index < value.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </span>
              ) : null,
          },
        ],
      },
    ],
    []
  );

export const SkillList = (): JSX.Element => {
  const router = useRouter();
  const headers = Headers();
  const rowParser = ({ getRowProps, cells, values: { name } }: Row, index: number) => {
    const parseClick = ({ target }) => {
      if (target.tagName.toLowerCase() == "a") return false;
      router.push(`/skill/${name}`);
    };
    return (
      <div {...getRowProps()} key={index} onClick={parseClick}>
        {cells.map(
          (cell: Cell, index: number): JSX.Element => (
            <div {...cell.getCellProps()} key={index}>
              {cell.render("Cell")}
            </div>
          )
        )}
      </div>
    );
  };
  return <PrepareTable {...{ columns: headers, data: Skills, rowParser, className: "skills", sortId: "name" }} />;
};
export default SkillList;
