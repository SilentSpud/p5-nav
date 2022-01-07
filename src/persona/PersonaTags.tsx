import React, { FC, ChildNode } from "react";
import { FaCrown, FaDollarSign, FaPlusCircle, FaClock, FaChevronCircleUp, FaExclamationTriangle } from "react-icons/fa";
import { GiArrowsShield, GiShieldBounces, GiShieldReflect, GiTwinShell } from "react-icons/gi";
import { FiSlash } from "react-icons/fi";
import { IconType } from "react-icons/lib";
import { Persona, WeaknessLevels as Weaknesses } from "../data";
import { usePersona } from ".";

const NameTag = ({ className, title, icon: Icon }: { className: string; title: string; icon: IconType }) => (
  <span className={`icon ${className}`} title={title}>
    <Icon />
  </span>
);

export const NameTags = ({ persona: persona1 }: { persona?: Persona }) => {
  const persona2 = usePersona();
  const persona = persona1 ?? persona2;
  if (!persona) return null;
  const { treasureDemon, dlcExclusive, thirdSemester, newGamePlus, specialFusion, maxConfidant } = persona;
  return (
    <span className="tags">
      {newGamePlus && <NameTag className="ngp" title="New Game+ exclusive" icon={FaPlusCircle} />}
      {thirdSemester && <NameTag className="third" title="Third semester exclusive" icon={FaClock} />}
      {maxConfidant && <NameTag className="max" title="Maxed confidant required" icon={FaChevronCircleUp} />}
      {specialFusion && <NameTag className="fusion" title="Special fusion" icon={GiTwinShell} />}
      {treasureDemon && <NameTag className="rare" title="Rare persona" icon={FaCrown} />}
      {dlcExclusive && <NameTag className="dlc" title="DLC exclusive" icon={FaDollarSign} />}
    </span>
  );
};

type ResistanceInfo = { className: string; key: string; children?: JSX.Element | string };
export const Resistance: FC<{ value: string; element: string; full?: boolean }> = ({ value, element, full }) => {
  const inf = { key: element, className: `${full ? "" : "res-icon "}` } as ResistanceInfo;
  switch (value as Weaknesses) {
    case Weaknesses.resist:
      inf.className += `text-warning`;
      inf.children = full ? "Resist" : <GiShieldBounces title="Resist" />;
      break;
    case Weaknesses.repel:
      inf.className += `text-success`;
      inf.children = full ? "Repel" : <GiShieldReflect title="Repel" />;
      break;
    case Weaknesses.weak:
      inf.className += `text-danger`;
      inf.children = full ? "Weak" : <FaExclamationTriangle title="Weak" />;
      break;
    case Weaknesses.absorb:
      inf.className += `text-info`;
      inf.children = full ? "Absorb" : <GiArrowsShield title="Absorb" />;
      break;
    case Weaknesses.nullify:
      inf.className += `text-dark`;
      inf.children = full ? "Nullify" : <FiSlash title="Nullify" />;
      break;
    case Weaknesses.none:
      inf.className += "text-muted";
      inf.children = full ? "Neutral" : <>&nbsp;</>;
      break;
  }
  return <span {...inf}></span>;
};
