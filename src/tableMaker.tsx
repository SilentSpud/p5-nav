import React from "react";
import { HeaderGroup, Row, useFlexLayout, useGlobalFilter, useSortBy, useTable } from "react-table";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';
const Icon = FontAwesomeIcon;

const parseRow = (row: Row, parseFunction: Function) => {
  return (
    <div {...row.getRowProps()}>
      {row.cells.map((cell) => parseFunction(cell))}
    </div>
  );
}

const renderHeader = (headers: HeaderGroup[], setGlobalFilter: (filterValue: any) => void) => {
  return headers.map((row) => (
    <div {...row.getHeaderGroupProps()}>
      {row.headers.map((cell) => {
        if (cell.id == "title_0") {
          return (<div {...cell.getHeaderProps({ className: "searchbox" })}>{globalFilter(setGlobalFilter)}</div>);
        } else {
          return (<div {...cell.getHeaderProps(cell.getSortByToggleProps())}>{cell.render("Header")}<span>{
            cell.canSort && (cell.isSorted ? cell.isSortedDesc ? <Icon icon={faSortUp} /> : <Icon icon={faSortDown} /> : <Icon icon={faSort} />)
          }</span></div>);
        }
      })}
    </div>))
}

const globalFilter = (setGlobalFilter: (filterValue: any) => void) => {
  const form = (<input type="search" placeholder="Search" className="text-light w-100 h-100 search" onChange={(key) => {
    if (key.currentTarget.value.length == 0) {
      setGlobalFilter(undefined);
    }
    else {
      setGlobalFilter(key.currentTarget.value || undefined);
    }
  }}></input>);

  return form;
}


const prepareTable = (columnData, tableData, rowParser: Function) => {
  const sortId = columnData[0].columns ? columnData[0].columns[0].accessor : columnData[0].accessor ?? "";
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
  return (
    <section {...getTableProps({ className: "table table-dark" })}>
      <header role="rowgroup">
        {renderHeader(headerGroups, setGlobalFilter)}
      </header>
      <main {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return parseRow(row, rowParser);
        })}
      </main>
    </section>
  )
};
export default prepareTable;
