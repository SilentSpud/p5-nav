import { faSortUp, faSortDown, faSort } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import React from "react";
import { CloseButton } from "react-bootstrap";
import { HeaderGroup } from "react-table";

export const SearchForm = ({ filter }: { filter: (filterValue: string | undefined) => void }) => (
  <div className="search">
    <input type="search" placeholder="Search" className="text-light w-100 h-100" onChange={({ currentTarget }) => filter(currentTarget.value || undefined)} />
    <CloseButton className="clear" onClick={() => filter(undefined)} />
  </div>
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