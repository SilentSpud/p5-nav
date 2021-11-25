import React from "react";
import { FaCrown, FaDollarSign, FaClock, FaPlusSquare, FaAsterisk, FaChevronCircleUp } from "react-icons/fa";
import { IconType } from "react-icons/lib";
import { Persona, WeaknessLevels as Weaknesses } from "../data";

const NameTag = ({ className, title, icon: Icon }: { className: string; title: string; icon: IconType }) => (
  <span className={`icon ${className}`} title={title}>
    <Icon />
  </span>
);

export const NameTags = ({ persona: { name, treasureDemon, dlcExclusive, thirdSemester, newGamePlus, specialFusion, maxConfidant } }: { persona: Persona }) => (
  <>
    {name}
    {treasureDemon && <NameTag className="rare" title="Rare persona" icon={FaCrown} />}
    {dlcExclusive && <NameTag className="dlc" title="DLC exclusive" icon={FaDollarSign} />}
    {thirdSemester && <NameTag className="third" title="Third semester exclusive" icon={FaClock} />}
    {newGamePlus && <NameTag className="ngp" title="New Game+ exclusive" icon={FaPlusSquare} />}
    {specialFusion && <NameTag className="fusion" title="Special fusion" icon={FaAsterisk} />}
    {maxConfidant && <NameTag className="max" title="Maxed confidant required" icon={FaChevronCircleUp} />}
  </>
);

export const Resistance = ({ value, element, full }: { value: string; element: string; full?: boolean }) => {
  const inf: { className?: string; key: string; children?: React.ReactNode | React.ReactNode[] } = { key: element };
  switch (value as Weaknesses) {
    case Weaknesses.resist:
      inf.className = "text-warning";
      inf.children = full ? <>Resist</> : <>Res</>;
      break;
    case Weaknesses.repel:
      inf.className = "text-danger";
      inf.children = full ? <>Repel</> : <>Rep</>;
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
  return <span {...inf}></span>;
};
