import React from "react";
import { Row, useFlexLayout, useGlobalFilter, useSortBy, useTable } from "react-table";
import { Header } from ".";

export type PrepareTableProps = {
  rowParser: (row: Row, index: number) => JSX.Element;
  className?: string;
  data: any[];
  columns: any[];
};
export const PrepareTable = ({ columns, data, rowParser, className }: PrepareTableProps) => {
  let sortId = columns[0]?.columns[0]?.id?.toString() ?? columns[0]?.id?.toString() ?? "";
  for (let column of columns) {
    if (column.sort) {
      sortId = column.id;
      break;
    }
    if (column.columns) {
      for (let col of column.columns) {
        if (col.sort) {
          sortId = col.id;
          break;
        }
      }
    }
  }

  const { getTableProps, getTableBodyProps, headerGroups, rows, setGlobalFilter, prepareRow } = useTable(
    { columns, data, initialState: { sortBy: [{ id: sortId }] } },
    useGlobalFilter,
    useSortBy,
    useFlexLayout
  );
  return (
    <section {...getTableProps({ className: `table table-dark ${className ?? ""}` })}>
      <header role="rowgroup">{Header(headerGroups, setGlobalFilter)}</header>
      <main {...getTableBodyProps()}>
        {rows.map((row, index) => {
          prepareRow(row);
          return rowParser(row, index);
        })}
      </main>
    </section>
  );
};
export default PrepareTable;