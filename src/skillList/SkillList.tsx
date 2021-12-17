import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Skill, PersonaRef } from "../data";
import { SkillTags, CostTag, StatusTag } from "../skill";
import { Elements } from "../persona";
import router from "next/router";
import { Row, Cell } from "react-table";
import { toCamel } from "../pages";

export const Headers = () =>
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
            Cell: ({ value }) => <Image src={Elements[value]} alt={toCamel(value)} title={toCamel(value)} draggable={false} />,
          },
          {
            id: "name",
            width: 60,
            accessor: ({ name }: Skill) => name,
            Header: "Name",
            Cell: ({ row: { original } }: { row: { original: Skill } }) => (
              <>
                {original.name} <SkillTags skill={original} />
              </>
            ),
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
        id: "details",
        columns: [
          {
            id: "effect",
            width: 175,
            accessor: ({ effect }: Skill) => effect,
            Header: "Effect",
            Cell: ({ value }) => <StatusTag text={value} />,
          },
          {
            id: "personas",
            width: 250,
            disableGlobalFilter: true,
            disableSortBy: true,
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

export const SkillRowParser = ({ getRowProps, cells, values: { name } }: Row, index: number) => {
  const parseClick = ({ target }) => {
    if (target.tagName.toLowerCase() == "a") return false;
    router.push(`/skill/${(name as string).replace(/\s/g, "_")}`);
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
