import React from "react";
import { IconType } from "react-icons/lib";
import { FaGem, FaComments } from "react-icons/fa";
import { GiCardJackHearts, GiGuillotine } from "react-icons/gi";
import { Skill } from "../data";

const SkillTag = ({ className, title, icon: Icon }: { className: string; title: string; icon: IconType }) => (
  <span className={`icon ${className}`} title={title}>
    <Icon />
  </span>
);

export const SkillTags = ({ skill: { name, talk, execute, card, unique } }: { skill: Skill }) => (
  <>
    {name}
    {talk && <SkillTag className="talk" title="Card earned through negotiation" icon={FaComments} />}
    {unique && <SkillTag className="unique" title="Unique skill" icon={FaGem} />}
    {card && <SkillTag className="card" title="Available as a skill card" icon={GiCardJackHearts} />}
    {execute && <SkillTag className="execute" title="Card earned through execution" icon={GiGuillotine} />}
  </>
);

export const CostTag = ({ cost }: { cost?: number }): JSX.Element => {
  if (!cost) return <></>;
  if (cost.toString().slice(-2) == "00") return <>{cost.toString().slice(0, -2)} SP</>;
  else return <>{cost} HP</>;
};
