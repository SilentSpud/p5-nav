import { FaSortUp, FaSortDown, FaSort } from "react-icons/fa";
import React from "react";
import { CloseButton } from "react-bootstrap";
import { useTableInfo } from ".";

export const SearchForm = ({ filter }: { filter: (filterValue: string | undefined) => void }) => {
  const searchRef = React.createRef<HTMLInputElement>();
  return React.useMemo(
    () => (
      <div className="search">
        <input
          type="search"
          placeholder="Search"
          className="w-100 h-100"
          ref={searchRef}
          onChange={({ currentTarget: { value } }) => filter(value || undefined)}
        />
        <CloseButton
          className="clear"
          onClick={() => {
            filter(undefined);
            if (!searchRef.current) return;
            searchRef.current.value = "";
            searchRef.current.focus();
          }}
        />
      </div>
    ),
    [filter, searchRef]
  );
};

export const Header = () => {
  const { headerGroups, setGlobalFilter } = useTableInfo();
  return (
    <header role="rowgroup">
      {headerGroups.map((row, i) => (
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
      ))}
    </header>
  );
};
