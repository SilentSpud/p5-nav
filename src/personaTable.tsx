import React from "react";
import { HeaderGroup, Row, useAsyncDebounce, useFlexLayout, useGlobalFilter, useSortBy, useTable } from "react-table";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';
import { DamageTypes, personaSchema, Weaknesses } from "./PersonaClasses";
import { Form } from "react-bootstrap";

const sortElems = (rowA: Row, rowB: Row, columnId) => {
  const sortOrder = [Weaknesses.weak.toString(), Weaknesses.none.toString(), Weaknesses.nullify.toString(), Weaknesses.repel.toString(), Weaknesses.absorb.toString(), Weaknesses.resist.toString()];
  return (sortOrder.indexOf(rowA.values[columnId]) < sortOrder.indexOf(rowB.values[columnId]) ? 1 : -1);
}

const pTableData = (personaList) => React.useMemo(() => {
  const pList = [];
  for (let persona of personaList) {
    pList.push({
      lvl: persona.level,
      name: persona.name,
      arcana: persona.arcana,
      strength: persona.stats.strength,
      magic: persona.stats.magic,
      endurance: persona.stats.endurance,
      agility: persona.stats.agility,
      luck: persona.stats.luck,
      physical: persona.elems.physical,
      gun: persona.elems.gun,
      fire: persona.elems.fire,
      ice: persona.elems.ice,
      electric: persona.elems.electric,
      wind: persona.elems.wind,
      psychic: persona.elems.psychic,
      nuclear: persona.elems.nuclear,
      bless: persona.elems.bless,
      curse: persona.elems.curse
    });
  }
  return pList;
}, [personaList]);

const parseRow = (row: Row) => {
  return (
    <div {...row.getRowProps()}>
      {row.cells.map((cell) => {
        let cellClass = "";
        switch (cell.column.parent.id) {
          case 'elements': {
            cellClass = "elem";
            switch (cell.value) {
              case Weaknesses.resist: {
                return <div {...cell.getCellProps({ className: ("text-warning " + cellClass) })}>Res</div>
              }
              case Weaknesses.repel: {
                return <div {...cell.getCellProps({ className: ("text-danger " + cellClass) })}>Rep</div>
              }
              case Weaknesses.weak: {
                return <div {...cell.getCellProps({ className: ("text-success " + cellClass) })}>Weak</div>
              }
              case Weaknesses.none: {
                return <div {...cell.getCellProps({ className: (cellClass) })}>&nbsp;</div>
              }
              case Weaknesses.absorb: {
                return <div {...cell.getCellProps({ className: ("text-info " + cellClass) })}>Abs</div>
              }
              case Weaknesses.nullify: {
                return <div {...cell.getCellProps({ className: ("text-light " + cellClass) })}>Null</div>
              }
            }
          }
          case 'stats': {
            cellClass = "stat";
          }

          default: {
            return <div {...cell.getCellProps({ className: (cellClass) })}>{cell.render("Cell")}</div>
          }
        }
      }
      )}
    </div>
  );
}

const renderHeader = (headers: HeaderGroup[], setGlobalFilter) => {
  return headers.map((row) => (
    <div {...row.getHeaderGroupProps()}>
      {row.headers.map((cell) => {
        if (cell.id == "title_0") {
          return (<div {...cell.getHeaderProps({className: "searchbox"})}>{globalFilter(setGlobalFilter)}</div>);
        } else {
          return (<div {...cell.getHeaderProps(cell.getSortByToggleProps())}>{cell.render("Header")}<span>{
            cell.canSort && (cell.isSorted ? cell.isSortedDesc ? <FontAwesomeIcon icon={faSortUp} /> : <FontAwesomeIcon icon={faSortDown} /> : <FontAwesomeIcon icon={faSort} />)
          }</span></div>);
        }
      })}
    </div>))
}

const globalFilter = (setGlobalFilter: (filterValue: any) => void) => {
  const [value, setValue] = React.useState('search');
  const form = ( <input type="search" placeholder="Search" id="personaSearch" className="text-light w-100 h-100" onChange={(key) => {
    if (key.currentTarget.value.length == 0) {
      setGlobalFilter(undefined);
    }
    else if (key.currentTarget.value != value) {
      setValue(key.currentTarget.value);
      setGlobalFilter(value || undefined);
    }
  }}></input> );

  return form;
}


export const prepareTable = (personaList) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    setGlobalFilter,
    prepareRow
  } = useTable({
    columns: personaSchema(),
    data: pTableData(personaList),
    initialState: { sortBy: [{ id: "lvl" }] }
  }, useGlobalFilter, useSortBy, useFlexLayout);
  return (
    <section {...getTableProps({ className: "personas table table-dark" })}>
      <header role="rowgroup">
        {renderHeader(headerGroups, setGlobalFilter)}
      </header>
      <main {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return parseRow(row);
        })}
      </main>
    </section>
  )
};
