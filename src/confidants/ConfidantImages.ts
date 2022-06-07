import { StaticImageData } from "next/image";
import chariot from "../../public/confidants/chariot.webp";
import councillor from "../../public/confidants/councillor.webp";
import death from "../../public/confidants/death.webp";
import devil from "../../public/confidants/devil.webp";
import emperor from "../../public/confidants/emperor.webp";
import empress from "../../public/confidants/empress.webp";
import faith from "../../public/confidants/faith.webp";
import fortune from "../../public/confidants/fortune.webp";
import hanged from "../../public/confidants/hanged.webp";
import hermit from "../../public/confidants/hermit.webp";
import hierophant from "../../public/confidants/hierophant.webp";
import justice from "../../public/confidants/justice.webp";
import lovers from "../../public/confidants/lovers.webp";
import moon from "../../public/confidants/moon.webp";
import priestess from "../../public/confidants/priestess.webp";
import star from "../../public/confidants/star.webp";
import sun from "../../public/confidants/sun.webp";
import temperance from "../../public/confidants/temperance.webp";
import tower from "../../public/confidants/tower.webp";
type ConfidantImageList = {
  [name: string]: StaticImageData;
};
export const ConfidantImages: ConfidantImageList = {
  chariot,
  councillor,
  death,
  devil,
  emperor,
  empress,
  faith,
  fortune,
  hanged,
  hermit,
  hierophant,
  justice,
  lovers,
  moon,
  priestess,
  star,
  sun,
  temperance,
  tower,
};
