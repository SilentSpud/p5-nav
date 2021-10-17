import React from "react";
import { HeaderGroup, Row, useFlexLayout, useSortBy, useTable } from "react-table";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';
import { DamageTypes, Weaknesses } from "./PersonaClasses";

const pTableCols = () => React.useMemo(
  () => [
    {
      Header: "Persona List",
      id: "title",
      className: "sticky",
      columns: [
        { Header: "Level",  accessor: "lvl",    width: 50 },
        { Header: "Name",   accessor: "name",   width: 200 },
        { Header: "Arcana", accessor: "arcana", width: 100 }
      ]
    },
    {
      Header: "Stats",
      id: "stats",
      columns: [
        { Header: "Strength",   accessor: "strength",   width: 65 },
        { Header: "Magic",      accessor: "magic",      width: 50 },
        { Header: "Endurance",  accessor: "endurance",  width: 75 },
        { Header: "Agility",    accessor: "agility",    width: 60 },
        { Header: "Luck",       accessor: "luck",       width: 50 }
      ]
    },
    {
      Header: "Elements",
      id: "elements",
      columns: [
        { Header: "Physical", accessor: "physical", sortType: sortElems, width: 70 },
        { Header: "Gun",      accessor: "gun",      sortType: sortElems, width: 40 },
        { Header: "Fire",     accessor: "fire",     sortType: sortElems, width: 40 },
        { Header: "Ice",      accessor: "ice",      sortType: sortElems, width: 50 },
        { Header: "Electric", accessor: "electric", sortType: sortElems, width: 60 },
        { Header: "Wind",     accessor: "wind",     sortType: sortElems, width: 50 },
        { Header: "Psychic",  accessor: "psychic",  sortType: sortElems, width: 70 },
        { Header: "Nuclear",  accessor: "nuclear",  sortType: sortElems, width: 70 },
        { Header: "Bless",    accessor: "bless",    sortType: sortElems, width: 70 },
        { Header: "Curse",    accessor: "curse",    sortType: sortElems, width: 70 }
      ]
    }
  ],
  []
);

const getStatVal = (stat:string) => {
  switch(stat) {
    case Weaknesses.weak:
      return 5;
    case Weaknesses.none:
      return 4;
    case Weaknesses.resist:
      return 3;
    case Weaknesses.nullify:
      return 2;
    case Weaknesses.repel:
      return 1;
    case Weaknesses.absorb:
      return 0;
  }
}

const sortElems = (rowA: Row, rowB: Row, columnId) => (getStatVal(rowA.values[columnId]) < getStatVal(rowB.values[columnId]) ? 1 : -1);

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
                return <div {...cell.getCellProps({ className: ("text-warning " + cellClass)}) }>Res</div>
              }
              case Weaknesses.repel: {
                return <div {...cell.getCellProps({ className: ("text-danger " + cellClass)}) }>Rep</div>
              }
              case Weaknesses.weak: {
                return <div {...cell.getCellProps({ className: ("text-success " + cellClass)}) }>Weak</div>
              }
              case Weaknesses.none: {
                return <div {...cell.getCellProps({ className: (cellClass)})}>&nbsp;</div>
              }
              case Weaknesses.absorb: {
                return <div {...cell.getCellProps({ className: ("text-info " + cellClass)}) }>Abs</div>
              }
              case Weaknesses.nullify: {
                return <div {...cell.getCellProps({ className: ("text-light " + cellClass)}) }>Null</div>
              }
            }
          }

          default: {
            return <div {...cell.getCellProps({ className: (cellClass)})}>{cell.render("Cell")}</div>
          }
        }
      }
      )}
    </div>
  );
}

const renderHeader = (headers: HeaderGroup[]) => {
  return headers.map((row) => (
    <div {...row.getHeaderGroupProps()}>
      {row.headers.map((cell) => {

        return (<div {...cell.getHeaderProps(cell.getSortByToggleProps())}>{cell.render("Header")}<span>{
          cell.canSort && (cell.isSorted ? cell.isSortedDesc ? <FontAwesomeIcon icon={faSortUp} /> : <FontAwesomeIcon icon={faSortDown} /> : <FontAwesomeIcon icon={faSort} />)
        }</span></div>
        );
      })}
    </div>))
}


export const prepareTable = (personaList) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({
    columns: pTableCols(),
    data: pTableData(personaList),
    initialState: { sortBy: [{id: "lvl"}] }
    }, useSortBy, useFlexLayout);
  return (
      <div {...getTableProps({className: "personas table table-dark"})}>
        <div role="rowgroup">
          {renderHeader(headerGroups)}
        </div>
        <div {...getTableBodyProps({ style: { maxWidth: '100vw' } })}>
          {rows.map((row, i) => {
            prepareRow(row);
            return parseRow(row);
          })}
        </div>
      </div>
  )
};
