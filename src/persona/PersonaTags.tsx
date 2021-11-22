import React from "react";
import { CellPropGetter, TableCellProps } from "react-table";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faCrown, faDollarSign, faClock, faSquarePlus, faAsterisk, faCircleChevronUp, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { Persona, WeaknessLevels as Weaknesses } from "../data";

const NameTag = ({ className, title, icon }: { className: string; title: string; icon: IconDefinition }) => (
  <span className={`icon ${className}`} title={title}>
    <Icon icon={icon} />
  </span>
);

export const NameTags = ({ persona: { name, treasureDemon, dlcExclusive, thirdSemester, newGamePlus, specialFusion, maxConfidant } }: { persona: Persona }) => (
  <>
    {name}
    {treasureDemon && <NameTag className="rare" title="Rare persona" icon={faCrown} />}
    {dlcExclusive && <NameTag className="dlc" title="DLC exclusive" icon={faDollarSign} />}
    {thirdSemester && <NameTag className="third" title="Third semester exclusive" icon={faClock} />}
    {newGamePlus && <NameTag className="ngp" title="New Game+ exclusive" icon={faSquarePlus} />}
    {specialFusion && <NameTag className="fusion" title="Special fusion" icon={faAsterisk} />}
    {maxConfidant && <NameTag className="max" title="Maxed confidant required" icon={faCircleChevronUp} />}
  </>
);

export const Resistance = ({ value, inherits }: { value: string; inherits?: (propGetter?: CellPropGetter<any>) => TableCellProps }) => {
  const inf: { className?: string; children?: React.ReactNode | React.ReactNode[] } = {};
  switch (value as Weaknesses) {
    case Weaknesses.resist:
      inf.className = "text-warning";
      inf.children = <>Res</>;
      break;
    case Weaknesses.repel:
      inf.className = "text-danger";
      inf.children = <>Rep</>;
      break;
    case Weaknesses.weak:
      inf.className = "text-success";
      inf.children = <>Weak</>;
      break;
    case Weaknesses.none:
      inf.children = <>&nbsp;</>;
      break;
    case Weaknesses.absorb:
      inf.className = "text-info";
      inf.children = <>Abs</>;
      break;
    case Weaknesses.nullify:
      inf.className = "text-light";
      inf.children = <>Null</>;
      break;
  }
  inf.className += " elem";
  return <div {...(inherits ? inherits(inf) : inf)}></div>;
};
