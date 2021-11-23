import ailmentData from "../../public/ailment.webp";
import almightyData from "../../public/almighty.webp";
import blessData from "../../public/bless.webp";
import curseData from "../../public/curse.webp";
import elecData from "../../public/elec.webp";
import fireData from "../../public/fire.webp";
import gunData from "../../public/gun.webp";
import healingData from "../../public/healing.webp";
import iceData from "../../public/ice.webp";
import nukeData from "../../public/nuke.webp";
import passiveData from "../../public/passive.webp";
import physData from "../../public/phys.webp";
import psyData from "../../public/psy.webp";
import supportData from "../../public/support.webp";
import traitData from "../../public/trait.webp";
import windData from "../../public/wind.webp";

export const ResElements = {
  phys: physData,
  gun: gunData,
  fire: fireData,
  ice: iceData,
  elec: elecData,
  wind: windData,
  psy: psyData,
  nuke: nukeData,
  bless: blessData,
  curse: curseData,
};
export const SkillElements = {
  almighty: almightyData,
  ailment: ailmentData,
  support: supportData,
  passive: passiveData,
  healing: healingData,
  trait: traitData,
};

export const Elements = Object.assign(ResElements, SkillElements);
export default Elements;
