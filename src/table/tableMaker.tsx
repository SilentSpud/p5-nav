import React, { createContext, useContext } from "react";
import { Row, TableInstance, TableOptions, useFlexLayout, useGlobalFilter, usePagination, useSortBy, useTable } from "react-table";
import { Footer, Header } from ".";

const TableCtx = createContext<TableInstance>({} as TableInstance);
export const useTableInfo = (): TableInstance => useContext(TableCtx);

export type PrepareTableProps = {
  rowParser: (row: Row, index: number) => JSX.Element;
  className?: string;
  data: any[];
  columns: any[];
  sortId: string;
};
export const PrepareTable = ({ columns, data, rowParser, className, sortId }: PrepareTableProps) => {
  const initialState = { pageIndex: 0, pageSize: 50, sortBy: [{ id: sortId }] };
  const tableOptions: TableOptions<object> = { columns, data, initialState };
  const instance = useTable(tableOptions, useGlobalFilter, useSortBy, usePagination, useFlexLayout);
  const { getTableProps, getTableBodyProps, page, prepareRow } = instance;
  return (
    <TableCtx.Provider value={instance}>
      <section {...getTableProps({ className: `table ${className ?? ""}` })}>
        <Header />
        <main {...getTableBodyProps()}>
          {page.map((row, index) => {
            prepareRow(row);
            return rowParser(row, index);
          })}
        </main>
        <Footer />
      </section>
    </TableCtx.Provider>
  );
};
export default PrepareTable;
