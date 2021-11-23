import React from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faCrown, faDollarSign, faClock, faSquarePlus, faAsterisk, faCircleChevronUp, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { PersonaProps, WeaknessLevels as Weaknesses } from "../data";

const NameTag = ({ className, title, icon }: { className: string; title: string; icon: IconDefinition }) => (
  <span className={`icon ${className}`} title={title}>
    <Icon icon={icon} />
  </span>
);

export const NameTags = ({
  persona: { name, treasureDemon, dlcExclusive, thirdSemester, newGamePlus, specialFusion, maxConfidant },
}: {
  persona: PersonaProps;
}) => (
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

export const Resistance = ({ value, element, full }: { value: string; element: string; full: boolean }) => {
  const inf: { className?: string; key: string; children?: React.ReactNode | React.ReactNode[] } = { key: element };
  switch (value as Weaknesses) {
    case Weaknesses.resist:
      inf.className = "text-warning";
      inf.children = full ? <>Resists</> : <>Res</>;
      break;
    case Weaknesses.repel:
      inf.className = "text-danger";
      inf.children = full ? <>Repels</> : <>Rep</>;
      break;
    case Weaknesses.weak:
      inf.className = "text-success";
      inf.children = full ? <>Weak</> : <>Weak</>;
      break;
    case Weaknesses.none:
      inf.className = "text-muted";
      inf.children = full ? <>Neutral</> : <>&nbsp;</>;
      break;
    case Weaknesses.absorb:
      inf.className = "text-info";
      inf.children = full ? <>Absorb</> : <>Abs</>;
      break;
    case Weaknesses.nullify:
      inf.className = "text-light";
      inf.children = full ? <>Nullify</> : <>Null</>;
      break;
  }
  inf.className += " elem";
  return <span {...inf}></span>;
};
