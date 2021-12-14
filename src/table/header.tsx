import { FaSortUp, FaSortDown, FaSort } from "react-icons/fa";
import React from "react";
import { HeaderGroup } from "react-table";

export const SearchForm = ({ filter }: { filter: (filterValue: string | undefined) => void }) =>
  React.useMemo(
    () => (
      <div className="search">
        <input type="search" placeholder="Search" className="text-light w-100 h-100" onChange={({ currentTarget: { value } }) => filter(value || undefined)} />
      </div>
    ),
    [filter]
  );

export const Header = (headers: HeaderGroup[], setGlobalFilter: (filterValue: string | undefined) => void) => {
  return headers.map((row, i) => (
    <div {...row.getHeaderGroupProps()} key={i}>
      {row.headers.map((cell) => {
        if (cell.id == "title_0") {
          return (
            <div {...cell.getHeaderProps({ className: "searchbox th" })}>
              <SearchForm filter={setGlobalFilter} />
            </div>
          );
        } else {
          return (
            <div {...cell.getHeaderProps({ ...cell.getSortByToggleProps(), className: "th" })}>
              {cell.render("Header")}
              {cell.canSort && <span>{(cell.isSortedDesc && <FaSortUp />) || (cell.isSorted && <FaSortDown />) || <FaSort />}</span>}
            </div>
          );
        }
      })}
    </div>
  ));
};
