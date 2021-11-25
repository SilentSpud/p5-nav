import React from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { IconDefinition, faGem, faComments, faFile, faAsterisk } from "@fortawesome/free-solid-svg-icons";
import { Skill } from "../data";

const SkillTag = ({ className, title, icon }: { className: string; title: string; icon: IconDefinition }) => (
  <span className={`icon ${className}`} title={title}>
    <Icon icon={icon} />
  </span>
);

export const SkillTags = ({ skill: { name, talk, fuse, card, unique } }: { skill: Skill }) => (
  <>
    {name}
    {talk && <SkillTag className="talk" title="Card earned through negotiation" icon={faComments} />}
    {unique && <SkillTag className="unique" title="Unique skill" icon={faGem} />}
    {card && <SkillTag className="card" title="Card" icon={faFile} />}
    {fuse && <SkillTag className="fuse" title="Fusion Card" icon={faAsterisk} />}
  </>
);

export const CostTag = ({ cost }: { cost?: number }): JSX.Element => {
  if (!cost) return <></>;
  if (cost.toString().slice(-2) == "00") return <>{cost.toString().slice(0, -2)} SP</>;
  else return <>{cost} HP</>;
};
