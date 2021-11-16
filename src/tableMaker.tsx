import React from "react";
import { HeaderGroup, useFlexLayout, useGlobalFilter, useSortBy, useTable } from "react-table";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faSort, faSortDown, faSortUp } from "@fortawesome/free-solid-svg-icons";

const renderHeader = (headers: HeaderGroup[], setGlobalFilter: (filterValue: string | undefined) => void) => {
  return headers.map((row, i) => (
    <div {...row.getHeaderGroupProps()} key={i}>
      {row.headers.map((cell) => {
        if (cell.id == "title_0") {
          return <div {...cell.getHeaderProps({ className: "searchbox th" })}>{searchForm(setGlobalFilter)}</div>;
        } else {
          return (
            <div {...cell.getHeaderProps(cell.getSortByToggleProps({ className: "th" }))}>
              {cell.render("Header")}
              {cell.canSort && (
                <span>{(cell.isSortedDesc && <Icon icon={faSortUp} />) || (cell.isSorted && <Icon icon={faSortDown} />) || <Icon icon={faSort} />}</span>
              )}
            </div>
          );
        }
      })}
    </div>
  ));
};

const searchForm = (setGlobalFilter: (filterValue: string | undefined) => void) => (
  <input
    type="search"
    placeholder="Search"
    className="text-light w-100 h-100 search"
    onChange={(key) => setGlobalFilter(key.currentTarget.value || undefined)}
  ></input>
);

const PrepareTable = ({ columns, data, rowParser, className }) => {
  const sortId = columns[0]?.columns[0]?.accessor ?? columns[0]?.accessor ?? "";
  const { getTableProps, getTableBodyProps, headerGroups, rows, setGlobalFilter, prepareRow } = useTable(
    { columns: columns, data: data, initialState: { sortBy: [{ id: sortId }] } },
    useGlobalFilter,
    useSortBy,
    useFlexLayout
  );
  return (
    <section {...getTableProps({ className: `table table-dark ${className}` })}>
      <header role="rowgroup">{renderHeader(headerGroups, setGlobalFilter)}</header>
      <main {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return rowParser(row, i);
        })}
      </main>
    </section>
  );
};
export default PrepareTable;
