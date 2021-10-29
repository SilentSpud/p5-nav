import React from "react";
import { HeaderGroup, Row, useFlexLayout, useGlobalFilter, useSortBy, useTable } from "react-table";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';
const Icon = FontAwesomeIcon;

const parseRow = (row: Row, parseFunction, i: number) => {
  return (
    <div key={i} {...row.getRowProps()}>
      {row.cells.map((cell) => parseFunction(cell))}
    </div>
  );
}

const renderHeader = (headers: HeaderGroup[], setGlobalFilter: (filterValue) => void) => {
  return headers.map((row, i) => (
    <div key={i} {...row.getHeaderGroupProps()}>
      {row.headers.map((cell) => {
        if (cell.id == "title_0") {
          return <div {...cell.getHeaderProps({ className: "searchbox" })}>{searchForm(setGlobalFilter)}</div>;
        } else {
          return <div {...cell.getHeaderProps(cell.getSortByToggleProps())}>
            {cell.render("Header")}
            {cell.canSort && <span>{cell.isSortedDesc && <Icon icon={faSortUp} /> || cell.isSorted && <Icon icon={faSortDown} /> || <Icon icon={faSort} />}</span>}
          </div>;
        }
      })}
    </div>
  ));
}

const searchForm = (setGlobalFilter: (filterValue) => void) => (
  <input type="search" placeholder="Search" className="text-light w-100 h-100 search" onChange={(key) => setGlobalFilter(key.currentTarget.value || undefined)}></input>
);


const prepareTable = (columnData, tableData, rowParser) => {
  const sortId = columnData[0]?.columns[0]?.accessor ?? columnData[0]?.accessor ?? "";
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    setGlobalFilter,
    prepareRow
  } = useTable({
    columns: columnData,
    data: tableData,
    initialState: { sortBy: [{ id: sortId }] }
  }, useGlobalFilter, useSortBy, useFlexLayout);
  return <section {...getTableProps({ className: "table table-dark" })}>
    <header role="rowgroup">
      {renderHeader(headerGroups, setGlobalFilter)}
    </header>
    <main {...getTableBodyProps()}>
      {rows.map((row, i) => {
        prepareRow(row);
        return parseRow(row, rowParser, i);
      })}
    </main>
  </section>
};
export default prepareTable;
