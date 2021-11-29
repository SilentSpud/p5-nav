export const getStatus = (name: string) => {
  for (let stat of Status) {
    if (stat.name == name) return stat;
  }
};

export type StatusInfo = {
  name: string;
  effect?: string[];
  effects?: Effects;
  technical?: Technical[];
};
export type Technical = {
  name: string;
  heart?: boolean; // Requires having read "Knowing the Heart"
};

export type Effects = {
  blockAction?: true;
  blockNegotiate?: true;
  blockSkill?: true;
  cureOnHit?: true;
  cureOnNegotiate?: true;
};

export const Status: StatusInfo[] = [
  {
    name: "Down",
    effect: ["Unable to evade", "Affected characters take 125% damage", "Downed characters recover on their turn"],
  },
  { name: "Burn", effect: ["-10% max HP damage after every turn"], technical: [{ name: "Wind" }, { name: "Nuclear" }] },
  {
    name: "Freeze",
    effects: {
      blockAction: true,
      blockNegotiate: true,
      cureOnHit: true,
    },
    effect: ["Weak to Physical & Gun"],
    technical: [{ name: "Physical" }, { name: "Gun" }, { name: "Nuclear" }],
  },
  {
    name: "Shock",
    effects: {
      blockAction: true,
      blockNegotiate: true,
    },
    effect: ["If the target is hit with melee, there's a slight chance the attacker will become shocked"],
    technical: [{ name: "Physical" }, { name: "Gun" }, { name: "Nuclear" }],
  },
  {
    name: "Dizzy",
    effects: {
      cureOnHit: true,
      cureOnNegotiate: true,
    },
    effect: ["Accuracy greatly reduced"],
    technical: [{ name: "any" }],
  },
  {
    name: "Forget",
    effects: {
      blockSkill: true,
      cureOnHit: true,
      cureOnNegotiate: true,
    },
    technical: [{ name: "Psychic" }, { name: "Electric", heart: true }],
  },
  {
    name: "Sleep",
    effects: {
      blockAction: true,
      blockNegotiate: true,
      cureOnHit: true,
    },
    effect: ["+10% max HP/SP per turn"],
    technical: [{ name: "any" }],
  },
  {
    name: "Confuse",
    effects: {
      cureOnHit: true,
      cureOnNegotiate: true,
    },
    effect: ["Random chance to throw away money or items", "Allies can also waste healing items", "Enemies can skip their turn"],
    technical: [{ name: "Psychic" }, { name: "Wind", heart: true }, { name: "Gun", heart: true }],
  },
  {
    name: "Fear",
    effect: ["High chance of ignoring commands", "Chance of fleeing from battle", "Will flee if negotiated with"],
    technical: [{ name: "Psychic" }, { name: "Ice", heart: true }],
  },
  {
    name: "Despair",
    effects: {
      blockAction: true,
      cureOnNegotiate: true,
    },
    effect: ["-5% SP", "Character is incapacitated after 3 turns"],
    technical: [{ name: "Psychic" }, { name: "Curse", heart: true }],
  },
  {
    name: "Rage",
    effects: {
      blockAction: true,
      cureOnNegotiate: true,
    },
    effect: ["+100% Attack", "-50% Defense, Evasion, & Accuracy", "Ignores commands, automatically uses basic melee"],
    technical: [{ name: "Psychic" }, { name: "Fire", heart: true }],
  },
  {
    name: "Brainwash",
    effect: ["Random chance to heal/buff an enemy or attack an ally", "Special dialogue options while negotiating"],
    technical: [{ name: "Psychic" }, { name: "Bless", heart: true }],
  },
  {
    name: "Hunger",
    effect: ["Greatly lowers attack power", "Doubles the HP/SP cost of skills"],
  },
];
export default Status;
