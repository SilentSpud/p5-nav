import React from "react";
import { IconType } from "react-icons/lib";
import { FaGem, FaComments } from "react-icons/fa";
import { GiCardJackHearts, GiGuillotine } from "react-icons/gi";
import { Skill } from "../data";
import { StatusPopup } from ".";

const SkillTag = ({ title, icon: Icon }: { title: string; icon: IconType }) => (
  <span className="icon" title={title}>
    <Icon />
  </span>
);

export const SkillTags = ({ skill: { name, talk, execute, card, unique } }: { skill: Skill }) => (
  <>
    {name}
    <span className="tags">
      {unique && <SkillTag title="Unique skill" icon={FaGem} />}
      {card && <SkillTag title="Available as a skill card" icon={GiCardJackHearts} />}
      {talk && <SkillTag title="Card earned through negotiation" icon={FaComments} />}
      {execute && <SkillTag title="Card earned through itemizing" icon={GiGuillotine} />}
    </span>
  </>
);
export const CostTag = ({ cost }: { cost?: number }): JSX.Element => {
  if (!cost) return <></>;
  if (cost.toString().slice(-2) == "00") return <>{cost.toString().slice(0, -2)} SP</>;
  else return <>{cost} HP</>;
};

const Dummy = ({ children }) => <>{children}</>;
export const StatusTag = ({ text }: { text: string }) => {
  const statusRegex = /(Down|Burn|Freeze|Shock|Dizzy|Forget|Sleep|Confuse|Fear|Despair|Rage|Brainwash|Hunger)/g;
  if (statusRegex.test(text)) {
    return (
      <>
        {text.split(statusRegex).map((substr, index) => {
          if (!statusRegex.test(substr)) return <Dummy key={index}>{substr}</Dummy>;
          return <StatusPopup key={index} name={substr} />;
        })}
      </>
    );
  } else {
    return <>{text}</>;
  }
};
