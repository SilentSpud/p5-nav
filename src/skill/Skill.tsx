import React from "react";
import { useRouter } from "next/router";
import { getSkill } from "../data";

export const SkillInfo = () => {
  const router = useRouter();
  let { skill } = router.query;
  switch (typeof skill) {
    case "string":
      break;
    case "object":
      skill = skill[0];
    case "undefined":
      return null;
  }
  const info = getSkill(decodeURIComponent(skill));
  if (!skill || !info) return null;
  console.log(skill);
  return <>{info.name}</>;
};
