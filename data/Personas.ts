export enum Weaknesses {
  weak = "wk",
  none = "-",
  resist = "rs",
  nullify = "nu",
  repel = "rp",
  absorb = "ab"
}
export interface PersonaData {
  name: string;
  arcana: string;
  level: number;
  stats: {
    strength: number;
    magic: number;
    endurance: number;
    agility: number;
    luck: number;
  };
  elems: {
    physical: Weaknesses;
    gun: Weaknesses;
    fire: Weaknesses;
    ice: Weaknesses;
    electric: Weaknesses;
    wind: Weaknesses;
    psychic: Weaknesses;
    nuclear: Weaknesses;
    bless: Weaknesses;
    curse: Weaknesses;
  };
  skills: {
    [index: string]: number;
  };
  personality?: string;
  shadow?: string;
  special?: boolean;
  max?: boolean;
  dlc?: boolean;
  note?: string;
  rare?: boolean;
  inherits?: string;
  item?: string;
  alarm?: string;
  trait?: string;
}
const personaMap: PersonaData[] = [
  {
    name: "Arsene",
    inherits: "curse",
    item: "Arsene's Cane",
    alarm: "Great Thief Stick",
    level: 1,
    arcana: "Fool",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.none,
      ice: Weaknesses.weak,
      electric: Weaknesses.none,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.weak,
      curse: Weaknesses.resist
    },
    skills: {
      Eiha: 0,
      Cleave: 2,
      Sukunda: 4,
      "Dream Needle": 5,
      "Adverse Resolve": 7
    },
    stats: {
      strength: 2,
      magic: 2,
      endurance: 2,
      agility: 3,
      luck: 1
    },
    trait: "Pinch Anchor"
  },
  {
    name: "Pixie",
    inherits: "elec",
    item: "Static Ring",
    alarm: "Spiral Static Ring",
    level: 2,
    arcana: "Lovers",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.weak,
      fire: Weaknesses.none,
      ice: Weaknesses.weak,
      electric: Weaknesses.resist,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.resist,
      curse: Weaknesses.weak
    },
    skills: {
      Zio: 0,
      Dia: 0,
      Patra: 3,
      Tarukaja: 5,
      "Resist Confuse": 6
    },
    stats: {
      strength: 1,
      magic: 3,
      endurance: 3,
      agility: 4,
      luck: 2
    },
    trait: "Static Electricity",
    personality: "Timid",
    shadow: "Beguiling Girl"
  },
  {
    name: "Jack-o'-Lantern",
    inherits: "fire",
    item: "Pumpkin Bomb",
    alarm: "Pumpkin Buster",
    level: 2,
    arcana: "Magician",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.absorb,
      ice: Weaknesses.weak,
      electric: Weaknesses.none,
      wind: Weaknesses.weak,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.none,
      curse: Weaknesses.none
    },
    skills: {
      Agi: 0,
      Rakunda: 0,
      "Sharp Student": 4,
      Dazzler: 5,
      "Resist Sleep": 7
    },
    stats: {
      strength: 2,
      magic: 3,
      endurance: 3,
      agility: 3,
      luck: 2
    },
    trait: "Thermal Conduct",
    personality: "Gloomy",
    shadow: "Crypt-dwelling Pyromaniac"
  },
  {
    name: "Mandrake",
    inherits: "elec",
    item: "Sukunda",
    alarm: "Masukunda",
    level: 3,
    arcana: "Death",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.weak,
      ice: Weaknesses.none,
      electric: Weaknesses.resist,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.none,
      curse: Weaknesses.none
    },
    skills: {
      Pulinpa: 0,
      "Energy Drop": 0,
      Lunge: 4,
      Sukunda: 5
    },
    stats: {
      strength: 2,
      magic: 3,
      endurance: 3,
      agility: 4,
      luck: 4
    },
    trait: "Savior Bloodline",
    personality: "Upbeat",
    shadow: "Gallows Flower"
  },
  {
    name: "Agathion",
    inherits: "elec",
    item: "Zio",
    alarm: "Mazio",
    level: 3,
    arcana: "Chariot",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.resist,
      fire: Weaknesses.none,
      ice: Weaknesses.none,
      electric: Weaknesses.resist,
      wind: Weaknesses.weak,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.none,
      curse: Weaknesses.none
    },
    skills: {
      Dia: 0,
      Baisudi: 0,
      Lunge: 4,
      Rakukaja: 6,
      Zio: 7,
      "Dodge Elec": 8
    },
    stats: {
      strength: 3,
      magic: 4,
      endurance: 5,
      agility: 7,
      luck: 3
    },
    trait: "Rare Antibody",
    personality: "Timid",
    shadow: "Apprentice in a Jug"
  },
  {
    name: "Bicorn",
    inherits: "wind",
    item: "Lunge",
    alarm: "Assault Dive",
    level: 4,
    arcana: "Hermit",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.none,
      ice: Weaknesses.none,
      electric: Weaknesses.weak,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.none,
      curse: Weaknesses.resist
    },
    skills: {
      Lunge: 0,
      Tarunda: 0,
      Garu: 6,
      "Ice Wall": 7,
      "Apt Pupil": 8
    },
    stats: {
      strength: 5,
      magic: 3,
      endurance: 3,
      agility: 5,
      luck: 3
    },
    trait: "Striking Weight",
    personality: "Gloomy",
    shadow: "Dirty Two-horned Beast"
  },
  {
    name: "Incubus",
    inherits: "ailment",
    item: "Dream Needle",
    alarm: "Dormin Rush",
    level: 5,
    arcana: "Devil",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.weak,
      ice: Weaknesses.none,
      electric: Weaknesses.resist,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.weak,
      curse: Weaknesses.none
    },
    skills: {
      "Life Drain": 0,
      "Dream Needle": 0,
      Dormina: 7,
      Tarunda: 8,
      "Dodge Curse": 9
    },
    stats: {
      strength: 4,
      magic: 6,
      endurance: 4,
      agility: 5,
      luck: 3
    },
    trait: "Draining Mouth",
    personality: "Timid",
    shadow: "Bedside Brute"
  },
  {
    name: "Cait Sith",
    inherits: "ailment",
    item: "Agi",
    alarm: "Maragi",
    level: 5,
    arcana: "Magician",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.none,
      ice: Weaknesses.none,
      electric: Weaknesses.resist,
      wind: Weaknesses.weak,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.none,
      curse: Weaknesses.none
    },
    skills: {
      Agi: 0,
      Cleave: 0,
      Tarukaja: 0,
      "Resist Sleep": 6,
      Sukukaja: 7,
      Media: 9
    },
    stats: {
      strength: 6,
      magic: 4,
      endurance: 4,
      agility: 5,
      luck: 3
    },
    trait: "Thermal Conduct",
    personality: "Upbeat",
    shadow: "Hunting Puss in Boots"
  },
  {
    name: "Silky",
    inherits: "healing",
    item: "Silk Dress",
    alarm: "Fine Silk Dress",
    level: 6,
    arcana: "Priestess",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.weak,
      ice: Weaknesses.resist,
      electric: Weaknesses.weak,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.none,
      curse: Weaknesses.none
    },
    skills: {
      Dormina: 0,
      Bufu: 0,
      Dia: 7,
      Patra: 9,
      "Sharp Student": 10
    },
    stats: {
      strength: 4,
      magic: 7,
      endurance: 4,
      agility: 5,
      luck: 5
    },
    trait: "Intense Focus",
    personality: "Gloomy",
    shadow: "Troublesome Housemaid"
  },
  {
    name: "Saki Mitama",
    inherits: "healing",
    item: "Energy Charm",
    alarm: "Spiral Energy Charm",
    level: 6,
    arcana: "Lovers",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.none,
      ice: Weaknesses.resist,
      electric: Weaknesses.none,
      wind: Weaknesses.weak,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.none,
      curse: Weaknesses.none
    },
    skills: {
      Bufu: 0,
      "Energy Drop": 0,
      "Wind Wall": 0,
      "Growth 1": 7,
      Rakukaja: 8,
      "Resist Dizzy": 10
    },
    stats: {
      strength: 4,
      magic: 6,
      endurance: 5,
      agility: 6,
      luck: 4
    },
    trait: "Internal Hypnosis"
  },
  {
    name: "Kelpie",
    inherits: "wind",
    item: "Garu",
    alarm: "Magaru",
    level: 6,
    arcana: "Strength",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.none,
      ice: Weaknesses.resist,
      electric: Weaknesses.weak,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.none,
      curse: Weaknesses.none
    },
    skills: {
      Garu: 0,
      Lunge: 0,
      "Resist Brainwash": 8,
      Sukukaja: 9,
      "Terror Claw": 10
    },
    stats: {
      strength: 5,
      magic: 5,
      endurance: 5,
      agility: 6,
      luck: 4
    },
    trait: "Striking Weight",
    personality: "Upbeat",
    shadow: "Mad Marsh Horse"
  },
  {
    name: "Succubus",
    inherits: "curse",
    item: "Brain Shot",
    alarm: "Pink Buster",
    level: 7,
    arcana: "Moon",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.resist,
      ice: Weaknesses.none,
      electric: Weaknesses.none,
      wind: Weaknesses.weak,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.weak,
      curse: Weaknesses.nullify
    },
    skills: {
      Dormina: 0,
      Rebellion: 0,
      Agi: 8,
      Dekaja: 10,
      "Sleep Boost": 11,
      Mudo: 12
    },
    stats: {
      strength: 4,
      magic: 7,
      endurance: 5,
      agility: 8,
      luck: 4
    },
    trait: "Foul Odor",
    personality: "Irritable",
    shadow: "Twilight Prostitute"
  },
  {
    name: "Genbu",
    inherits: "ice",
    item: "Frost Ring",
    alarm: "Spiral Frost Ring",
    level: 7,
    arcana: "Temperance",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.none,
      ice: Weaknesses.nullify,
      electric: Weaknesses.weak,
      wind: Weaknesses.none,
      psychic: Weaknesses.resist,
      nuclear: Weaknesses.none,
      bless: Weaknesses.none,
      curse: Weaknesses.none
    },
    skills: {
      Bufu: 0,
      Rakunda: 0,
      Patra: 8,
      Mabufu: 10,
      "Resist Forget": 11,
      "Defense Master": 12
    },
    stats: {
      strength: 5,
      magic: 6,
      endurance: 7,
      agility: 6,
      luck: 4
    },
    trait: "Cold-Blooded"
  },
  {
    name: "Obariyon",
    inherits: "phys",
    item: "Lucky Punch",
    alarm: "Miracle Punch",
    level: 8,
    arcana: "Fool",
    elems: {
      physical: Weaknesses.resist,
      gun: Weaknesses.none,
      fire: Weaknesses.none,
      ice: Weaknesses.none,
      electric: Weaknesses.weak,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.none,
      curse: Weaknesses.none
    },
    skills: {
      Snap: 0,
      Sukunda: 0,
      "Lucky Punch": 9,
      "Resist Fear": 10,
      Dekaja: 12
    },
    stats: {
      strength: 7,
      magic: 3,
      endurance: 9,
      agility: 8,
      luck: 4
    },
    trait: "Striking Weight",
    personality: "Irritable",
    shadow: "Piggyback Demon"
  },
  {
    name: "Mokoi",
    inherits: "ailment",
    item: "Dekunda",
    alarm: "Dekaja",
    level: 9,
    arcana: "Death",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.none,
      ice: Weaknesses.none,
      electric: Weaknesses.resist,
      wind: Weaknesses.weak,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.none,
      curse: Weaknesses.none
    },
    skills: {
      Tarukaja: 0,
      Dazzler: 0,
      "Skull Cracker": 10,
      "Marin Karin": 12,
      "Dodge Elec": 13,
      Dekunda: 14
    },
    stats: {
      strength: 9,
      magic: 5,
      endurance: 6,
      agility: 10,
      luck: 4
    },
    trait: "Gloomy Child",
    personality: "Gloomy",
    shadow: "Night-Walking Warrior"
  },
  {
    name: "Koropokguru",
    inherits: "ice",
    item: "Bufu",
    alarm: "Mabufu",
    level: 9,
    arcana: "Hermit",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.weak,
      ice: Weaknesses.resist,
      electric: Weaknesses.none,
      wind: Weaknesses.resist,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.none,
      curse: Weaknesses.none
    },
    skills: {
      Makajam: 0,
      Bufu: 0,
      "Dodge Ice": 11,
      Sukunda: 12,
      "Fire Wall": 13,
      Mabufu: 14,
      "Climate Decorum": 15
    },
    stats: {
      strength: 5,
      magic: 8,
      endurance: 6,
      agility: 9,
      luck: 6
    },
    trait: "Foul Odor",
    personality: "Timid",
    shadow: "Leafy Old Man"
  },
  {
    name: "Hua Po",
    inherits: "fire",
    item: "Ember Ring",
    alarm: "Spiral Ember Ring",
    level: 9,
    arcana: "Hanged",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.weak,
      fire: Weaknesses.repel,
      ice: Weaknesses.weak,
      electric: Weaknesses.none,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.none,
      curse: Weaknesses.none
    },
    skills: {
      Agi: 0,
      Dormina: 0,
      Tarunda: 11,
      "Resist Forget": 12,
      Maragi: 13,
      "Burn Boost": 15
    },
    stats: {
      strength: 4,
      magic: 10,
      endurance: 4,
      agility: 8,
      luck: 8
    },
    trait: "Thermal Conduct",
    personality: "Upbeat",
    shadow: "Girl of the Hanging Tree"
  },
  {
    name: "Berith",
    inherits: "phys",
    item: "Cleave",
    alarm: "Power Slash",
    level: 9,
    arcana: "Hierophant",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.nullify,
      fire: Weaknesses.resist,
      ice: Weaknesses.weak,
      electric: Weaknesses.none,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.none,
      curse: Weaknesses.none
    },
    skills: {
      Cleave: 0,
      Rakukaja: 0,
      Tarukaja: 10,
      "Dodge Fire": 11,
      "Power Slash": 13
    },
    stats: {
      strength: 9,
      magic: 6,
      endurance: 8,
      agility: 8,
      luck: 3
    },
    trait: "Crisis Control",
    personality: "Irritable",
    shadow: "Brutal Cavalryman"
  },
  {
    name: "Angel",
    inherits: "bless",
    item: "Kouha",
    alarm: "Makouha",
    level: 9,
    arcana: "Justice",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.weak,
      fire: Weaknesses.none,
      ice: Weaknesses.none,
      electric: Weaknesses.resist,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.nullify,
      curse: Weaknesses.weak
    },
    skills: {
      Kouha: 0,
      Makajam: 0,
      Dia: 0,
      Baisudi: 10,
      "Dodge Curse": 11,
      Dekunda: 12
    },
    stats: {
      strength: 6,
      magic: 9,
      endurance: 5,
      agility: 9,
      luck: 5
    },
    trait: "Skillful Combo",
    personality: "Irritable",
    shadow: "Zealous Messenger"
  },
  {
    name: "Slime",
    inherits: "curse",
    item: "Tarunda",
    alarm: "Matarunda",
    level: 10,
    arcana: "Chariot",
    elems: {
      physical: Weaknesses.resist,
      gun: Weaknesses.resist,
      fire: Weaknesses.weak,
      ice: Weaknesses.none,
      electric: Weaknesses.none,
      wind: Weaknesses.weak,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.none,
      curse: Weaknesses.none
    },
    skills: {
      Lunge: 0,
      "Evil Touch": 0,
      Tarunda: 11,
      "Fire Wall": 13,
      Headbutt: 14
    },
    stats: {
      strength: 9,
      magic: 6,
      endurance: 11,
      agility: 6,
      luck: 5
    },
    trait: "Rare Antibody",
    personality: "Timid",
    shadow: "Viscid Rotting Meat"
  },
  {
    name: "Regent",
    rare: true,
    inherits: "almighty",
    item: "Regent",
    alarm: "Regent R",
    level: 10,
    arcana: "Emperor",
    elems: {
      physical: Weaknesses.resist,
      gun: Weaknesses.resist,
      fire: Weaknesses.none,
      ice: Weaknesses.none,
      electric: Weaknesses.none,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.weak,
      bless: Weaknesses.none,
      curse: Weaknesses.none
    },
    skills: {
      Maragi: 0,
      Mabufu: 0,
      Magaru: 0,
      Mazio: 0,
      Mapsi: 0,
      Mafrei: 0,
      Makouha: 0,
      Maeiha: 0,
      "Mighty Gaze": 0,
      "Skillful Technique": 0,
      "Skillful Combo": 0
    },
    stats: {
      strength: 10,
      magic: 10,
      endurance: 10,
      agility: 10,
      luck: 10
    },
    trait: "Ultimate Vessel",
    personality: "None",
    shadow: "(Treasure Demon)"
  },
  {
    name: "Orpheus F",
    inherits: "almighty",
    item: "Graceful Harp",
    alarm: "Graceful Harp R",
    level: 11,
    arcana: "Fool",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.none,
      ice: Weaknesses.none,
      electric: Weaknesses.weak,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.resist,
      curse: Weaknesses.weak
    },
    skills: {
      "Neo Cadenza": 0,
      Agi: 0,
      Tarunda: 0,
      Endure: 0,
      Maragion: 12,
      Marakukaja: 14,
      "Dodge Curse": 15
    },
    stats: {
      strength: 8,
      magic: 9,
      endurance: 8,
      agility: 9,
      luck: 6
    },
    trait: "Circle of Sadness",
    dlc: true
  },
  {
    name: "Koppa Tengu",
    inherits: "wind",
    item: "Breeze Ring",
    alarm: "Spiral Breeze Ring",
    level: 11,
    arcana: "Temperance",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.none,
      ice: Weaknesses.weak,
      electric: Weaknesses.none,
      wind: Weaknesses.resist,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.weak,
      curse: Weaknesses.none
    },
    skills: {
      Garu: 0,
      Sukukaja: 0,
      "Growth 1": 12,
      Taunt: 13,
      "Rage Boost": 14,
      "Wage War": 15
    },
    stats: {
      strength: 7,
      magic: 8,
      endurance: 8,
      agility: 11,
      luck: 6
    },
    trait: "Intense Focus",
    personality: "Upbeat",
    shadow: "Foolish Monk"
  },
  {
    name: "Kodama",
    inherits: "ailment",
    item: "Psy Ring",
    alarm: "Spiral Psy Ring",
    level: 11,
    arcana: "Star",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.weak,
      ice: Weaknesses.resist,
      electric: Weaknesses.none,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.none,
      curse: Weaknesses.none
    },
    skills: {
      Garu: 0,
      Rakunda: 0,
      Psi: 12,
      "Evil Touch": 13,
      Tarukaja: 14,
      "Fear Boost": 15,
      "Resist Fear": 17
    },
    stats: {
      strength: 7,
      magic: 11,
      endurance: 8,
      agility: 10,
      luck: 4
    },
    trait: "Skillful Combo",
    personality: "Upbeat",
    shadow: "Wavering Tree Spirit"
  },
  {
    name: "Jack Frost",
    inherits: "ice",
    item: "Frost Hood",
    alarm: "Frost Ace Hood",
    level: 11,
    arcana: "Magician",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.weak,
      ice: Weaknesses.nullify,
      electric: Weaknesses.none,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.none,
      curse: Weaknesses.none
    },
    skills: {
      Bufu: 0,
      "Ice Break": 0,
      Baisudi: 0,
      Mabufu: 12,
      Rakunda: 13,
      "Freeze Boost": 15
    },
    stats: {
      strength: 8,
      magic: 9,
      endurance: 7,
      agility: 9,
      luck: 7
    },
    trait: "Frigid Bloodline",
    personality: "Timid",
    shadow: "Mocking Snowman"
  },
  {
    name: "Apsaras",
    inherits: "ice",
    item: "Media",
    alarm: "Diarama",
    level: 11,
    arcana: "Priestess",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.weak,
      ice: Weaknesses.resist,
      electric: Weaknesses.weak,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.none,
      curse: Weaknesses.none
    },
    skills: {
      Rebellion: 0,
      "Ice Wall": 0,
      Bufu: 0,
      Media: 13,
      "Elec Wall": 14,
      "Wind Wall": 16
    },
    stats: {
      strength: 7,
      magic: 11,
      endurance: 6,
      agility: 10,
      luck: 6
    },
    trait: "Internal Hypnosis",
    personality: "Upbeat",
    shadow: "Waterside Nymph"
  },
  {
    name: "Onmoraki",
    inherits: "curse",
    item: "Grudge Ring",
    alarm: "Spiral Grudge Ring",
    level: 12,
    arcana: "Moon",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.resist,
      ice: Weaknesses.weak,
      electric: Weaknesses.none,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.weak,
      curse: Weaknesses.nullify
    },
    skills: {
      Eiha: 0,
      "Ice Wall": 0,
      Agi: 13,
      "Evil Touch": 14,
      Pulinpa: 15,
      "Confuse Boost": 17
    },
    stats: {
      strength: 9,
      magic: 12,
      endurance: 7,
      agility: 10,
      luck: 5
    },
    trait: "Intense Focus",
    personality: "Gloomy",
    shadow: "Corpse Bird"
  },
  {
    name: "Kushi Mitama",
    inherits: "healing",
    item: "Aid Charm",
    alarm: "Spiral Aid Charm",
    level: 12,
    arcana: "Councillor",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.weak,
      ice: Weaknesses.none,
      electric: Weaknesses.none,
      wind: Weaknesses.resist,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.none,
      curse: Weaknesses.none
    },
    skills: {
      Dia: 0,
      Media: 0,
      Makajam: 0,
      "Regenerate 1": 13,
      "Wind Wall": 14,
      "Forget Boost": 16
    },
    stats: {
      strength: 7,
      magic: 11,
      endurance: 9,
      agility: 8,
      luck: 8
    },
    trait: "Gluttonmouth"
  },
  {
    name: "Orpheus F Picaro",
    inherits: "almighty",
    item: "Endure",
    alarm: "Enduring Soul",
    level: 13,
    arcana: "Fool",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.none,
      ice: Weaknesses.none,
      electric: Weaknesses.weak,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.resist,
      curse: Weaknesses.weak
    },
    skills: {
      "Neo Cadenza": 0,
      Maragi: 0,
      Rakunda: 0,
      Endure: 0,
      Agilao: 14,
      Marakukaja: 16,
      "Dodge Curse": 17
    },
    stats: {
      strength: 9,
      magic: 11,
      endurance: 9,
      agility: 10,
      luck: 7
    },
    trait: "Circle of Sadness",
    dlc: true
  },
  {
    name: "Ippon-Datara",
    inherits: "phys",
    item: "Sledgehammer",
    alarm: "Flash Bomb",
    level: 13,
    arcana: "Hermit",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.resist,
      fire: Weaknesses.resist,
      ice: Weaknesses.weak,
      electric: Weaknesses.none,
      wind: Weaknesses.repel,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.resist,
      curse: Weaknesses.resist
    },
    skills: {
      Sledgehammer: 0,
      Tarukaja: 0,
      "Resist Dizzy": 0,
      Rampage: 15,
      "Sharp Student": 17,
      Counter: 18
    },
    stats: {
      strength: 11,
      magic: 7,
      endurance: 14,
      agility: 6,
      luck: 8
    },
    trait: "Striking Weight",
    personality: "Upbeat",
    shadow: "Embittered Blacksmith"
  },
  {
    name: "Ame-no-Uzume",
    inherits: "almighty",
    item: "Senryou Yakusha",
    alarm: "Senryou Yakusha R",
    level: 13,
    arcana: "Lovers",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.absorb,
      ice: Weaknesses.none,
      electric: Weaknesses.none,
      wind: Weaknesses.none,
      psychic: Weaknesses.weak,
      nuclear: Weaknesses.none,
      bless: Weaknesses.none,
      curse: Weaknesses.none
    },
    skills: {
      Mazio: 0,
      Magaru: 0,
      Media: 0,
      "Nocturnal Flash": 15,
      Baisudi: 16,
      "Divine Grace": 18
    },
    stats: {
      strength: 7,
      magic: 10,
      endurance: 9,
      agility: 11,
      luck: 9
    },
    trait: "Electric Bloodline",
    personality: "Upbeat",
    shadow: "Captivating Dancer"
  },
  {
    name: "Inugami",
    inherits: "fire",
    item: "Giant Slice",
    alarm: "Rising Slash",
    level: 14,
    arcana: "Hanged",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.nullify,
      fire: Weaknesses.nullify,
      ice: Weaknesses.none,
      electric: Weaknesses.none,
      wind: Weaknesses.weak,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.none,
      curse: Weaknesses.nullify
    },
    skills: {
      Pulinpa: 0,
      Tarukaja: 0,
      "Giant Slice": 0,
      "Dream Needle": 15,
      "Lucky Punch": 17,
      "Brain Shake": 18,
      "Confuse Boost": 19
    },
    stats: {
      strength: 11,
      magic: 9,
      endurance: 9,
      agility: 12,
      luck: 8
    },
    trait: "Foul Odor",
    personality: "Timid",
    shadow: "Possessing Dog Ghost"
  },
  {
    name: "Archangel",
    inherits: "bless",
    item: "Hama",
    alarm: "Mahama",
    level: 14,
    arcana: "Justice",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.none,
      ice: Weaknesses.none,
      electric: Weaknesses.weak,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.nullify,
      curse: Weaknesses.weak
    },
    skills: {
      "Giant Slice": 0,
      Dazzler: 0,
      Hama: 0,
      Rebellion: 16,
      "Power Slash": 17,
      "Vajra Blast": 19
    },
    stats: {
      strength: 11,
      magic: 9,
      endurance: 10,
      agility: 12,
      luck: 7
    },
    trait: "Skillful Combo",
    personality: "Irritable",
    shadow: "Heavenly Punisher"
  },
  {
    name: "Shiisaa",
    inherits: "elec",
    item: "Double Fangs",
    alarm: "Cornered Fang",
    level: 15,
    arcana: "Strength",
    elems: {
      physical: Weaknesses.resist,
      gun: Weaknesses.none,
      fire: Weaknesses.none,
      ice: Weaknesses.none,
      electric: Weaknesses.none,
      wind: Weaknesses.none,
      psychic: Weaknesses.weak,
      nuclear: Weaknesses.none,
      bless: Weaknesses.nullify,
      curse: Weaknesses.weak
    },
    skills: {
      "Double Fangs": 0,
      "Skull Cracker": 0,
      Frei: 0,
      "Dodge Curse": 16,
      Rampage: 17,
      "Dodge Elec": 19
    },
    stats: {
      strength: 10,
      magic: 11,
      endurance: 11,
      agility: 11,
      luck: 9
    },
    trait: "Atomic Bloodline",
    personality: "Upbeat",
    shadow: "Rooftop Lion"
  },
  {
    name: "Queen's Necklace",
    rare: true,
    inherits: "almighty",
    item: "Queen's Necklace",
    alarm: "Queen's Necklace R",
    level: 15,
    arcana: "Empress",
    elems: {
      physical: Weaknesses.resist,
      gun: Weaknesses.resist,
      fire: Weaknesses.none,
      ice: Weaknesses.none,
      electric: Weaknesses.none,
      wind: Weaknesses.none,
      psychic: Weaknesses.weak,
      nuclear: Weaknesses.none,
      bless: Weaknesses.none,
      curse: Weaknesses.none
    },
    skills: {
      Tarukaja: 0,
      Rakukaja: 0,
      Sukukaja: 0,
      Recarm: 0,
      Media: 0,
      Tarunda: 0,
      Rakunda: 0,
      Sukunda: 0,
      "Potent Hypnosis": 0,
      "Relief Bloodline": 0,
      "Savior Bloodline": 0
    },
    stats: {
      strength: 15,
      magic: 15,
      endurance: 15,
      agility: 15,
      luck: 15
    },
    trait: "Ultimate Vessel",
    personality: "None",
    shadow: "(Treasure Demon)"
  },
  {
    name: "Makami",
    inherits: "nuke",
    item: "Frei",
    alarm: "Mafrei",
    level: 15,
    arcana: "Temperance",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.nullify,
      fire: Weaknesses.none,
      ice: Weaknesses.none,
      electric: Weaknesses.weak,
      wind: Weaknesses.resist,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.resist,
      bless: Weaknesses.nullify,
      curse: Weaknesses.none
    },
    skills: {
      "Double Fangs": 0,
      Frei: 0,
      "Energy Drop": 0,
      Mafrei: 17,
      Makajam: 18,
      "Resist Despair": 19,
      "Dodge Elec": 20
    },
    stats: {
      strength: 13,
      magic: 12,
      endurance: 8,
      agility: 11,
      luck: 8
    },
    trait: "Skillful Technique",
    personality: "Upbeat",
    shadow: "Hunting Wolf Spirit"
  },
  {
    name: "Kaguya",
    inherits: "almighty",
    item: "Moonlight Robe",
    alarm: "Moonlight Robe R",
    level: 16,
    arcana: "Moon",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.weak,
      ice: Weaknesses.none,
      electric: Weaknesses.none,
      wind: Weaknesses.resist,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.nullify,
      curse: Weaknesses.nullify
    },
    skills: {
      "Shining Arrows": 0,
      Mediarama: 0,
      Counterstrike: 0,
      "Divine Grace": 17,
      "Amrita Shower": 18,
      Diarahan: 21,
      "Repel Phys": 22
    },
    stats: {
      strength: 11,
      magic: 15,
      endurance: 12,
      agility: 11,
      luck: 6
    },
    trait: "Inviolable Beauty",
    dlc: true
  },
  {
    name: "Suzaku",
    inherits: "nuke",
    item: "Atom Ring",
    alarm: "Spiral Atom Ring",
    level: 16,
    arcana: "Sun",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.absorb,
      ice: Weaknesses.weak,
      electric: Weaknesses.none,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.resist,
      bless: Weaknesses.none,
      curse: Weaknesses.none
    },
    skills: {
      Frei: 0,
      Tarunda: 0,
      "Marin Karin": 0,
      Dekunda: 18,
      Mafrei: 19,
      "Speed Master": 20,
      Matarunda: 21
    },
    stats: {
      strength: 9,
      magic: 12,
      endurance: 10,
      agility: 15,
      luck: 9
    },
    trait: "Gluttonmouth"
  },
  {
    name: "High Pixie",
    inherits: "healing",
    item: "Magaru",
    alarm: "Garula",
    level: 16,
    arcana: "Fool",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.weak,
      fire: Weaknesses.none,
      ice: Weaknesses.none,
      electric: Weaknesses.resist,
      wind: Weaknesses.resist,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.weak,
      bless: Weaknesses.none,
      curse: Weaknesses.none
    },
    skills: {
      Garu: 0,
      Media: 0,
      Dormina: 0,
      Diarama: 19,
      Pulinpa: 20,
      Magaru: 22
    },
    stats: {
      strength: 8,
      magic: 14,
      endurance: 10,
      agility: 13,
      luck: 10
    },
    trait: "Skillful Combo",
    personality: "Irritable",
    shadow: "Prankster Leader"
  },
  {
    name: "Eligor",
    inherits: "fire",
    item: "Tarukaja",
    alarm: "Matarukaja",
    level: 16,
    arcana: "Emperor",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.resist,
      ice: Weaknesses.none,
      electric: Weaknesses.weak,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.none,
      curse: Weaknesses.resist
    },
    skills: {
      Maragi: 0,
      "Sharp Student": 0,
      Tarukaja: 0,
      "Double Fangs": 18,
      Sukunda: 19,
      "Memory Blow": 20
    },
    stats: {
      strength: 12,
      magic: 10,
      endurance: 13,
      agility: 10,
      luck: 10
    },
    trait: "Thermal Conduct",
    personality: "Irritable",
    shadow: "War-hungry Horseman"
  },
  {
    name: "Sudama",
    inherits: "psy",
    item: "Mapsi",
    alarm: "Psio",
    level: 17,
    arcana: "Hermit",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.none,
      ice: Weaknesses.weak,
      electric: Weaknesses.none,
      wind: Weaknesses.repel,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.weak,
      bless: Weaknesses.none,
      curse: Weaknesses.none
    },
    skills: {
      Mapsi: 0,
      "Lucky Punch": 0,
      Tarukaja: 0,
      "Ambient Aid": 20,
      "Wind Wall": 21,
      "Apt Pupil": 22,
      Psio: 23
    },
    stats: {
      strength: 9,
      magic: 14,
      endurance: 12,
      agility: 13,
      luck: 10
    },
    trait: "Gloomy Child",
    personality: "Timid",
    shadow: "Noisy Mountain Spirit"
  },
  {
    name: "Orobas",
    inherits: "fire",
    item: "Rakunda",
    alarm: "Marakunda",
    level: 17,
    arcana: "Hierophant",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.none,
      ice: Weaknesses.weak,
      electric: Weaknesses.none,
      wind: Weaknesses.resist,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.none,
      curse: Weaknesses.resist
    },
    skills: {
      Maragi: 0,
      Sukukaja: 0,
      Dekaja: 0,
      Marakunda: 19,
      "Fire Break": 20,
      Makajamaon: 21
    },
    stats: {
      strength: 11,
      magic: 14,
      endurance: 15,
      agility: 12,
      luck: 6
    },
    trait: "Mighty Gaze",
    personality: "Timid",
    shadow: "Equine Sage"
  },
  {
    name: "Nekomata",
    inherits: "ailment",
    item: "Pawzooka",
    alarm: "Paw-omber",
    level: 17,
    arcana: "Magician",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.none,
      ice: Weaknesses.none,
      electric: Weaknesses.weak,
      wind: Weaknesses.none,
      psychic: Weaknesses.resist,
      nuclear: Weaknesses.none,
      bless: Weaknesses.none,
      curse: Weaknesses.none
    },
    skills: {
      Magaru: 0,
      "Terror Claw": 0,
      "Evil Touch": 0,
      "Hysterical Slap": 18,
      "Wind Break": 20,
      "Elec Wall": 21,
      "Dodge Elec": 22
    },
    stats: {
      strength: 13,
      magic: 10,
      endurance: 12,
      agility: 15,
      luck: 8
    },
    trait: "Foul Odor",
    personality: "Upbeat",
    shadow: "Ascended Feline"
  },
  {
    name: "Matador",
    inherits: "psy",
    item: "Blood Red Capote",
    alarm: "Bloodied Capote",
    level: 17,
    arcana: "Death",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.none,
      ice: Weaknesses.none,
      electric: Weaknesses.weak,
      wind: Weaknesses.nullify,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.none,
      curse: Weaknesses.none
    },
    skills: {
      Psi: 0,
      "Null Dizzy": 0,
      Sukukaja: 0,
      Mapsi: 18,
      "Double Shot": 20,
      "Swift Strike": 22
    },
    stats: {
      strength: 11,
      magic: 13,
      endurance: 10,
      agility: 16,
      luck: 8
    },
    trait: "Potent Hypnosis"
  },
  {
    name: "Shiki-Ouji",
    inherits: "psy",
    item: "Double Shot",
    alarm: "Triple Down",
    level: 18,
    arcana: "Chariot",
    elems: {
      physical: Weaknesses.nullify,
      gun: Weaknesses.nullify,
      fire: Weaknesses.none,
      ice: Weaknesses.none,
      electric: Weaknesses.none,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.weak,
      bless: Weaknesses.nullify,
      curse: Weaknesses.nullify
    },
    skills: {
      Tarukaja: 0,
      Taunt: 0,
      "Double Shot": 0,
      Mapsi: 19,
      Dekaja: 21,
      Psio: 23,
      "Oni Kagura": 24
    },
    stats: {
      strength: 16,
      magic: 14,
      endurance: 12,
      agility: 9,
      luck: 10
    },
    trait: "Psychic Bloodline",
    personality: "Irritable",
    shadow: "Bringer of Misfortune"
  },
  {
    name: "Black Ooze",
    inherits: "curse",
    item: "Headbutt",
    alarm: "Memory Blow",
    level: 18,
    arcana: "Moon",
    elems: {
      physical: Weaknesses.resist,
      gun: Weaknesses.resist,
      fire: Weaknesses.none,
      ice: Weaknesses.resist,
      electric: Weaknesses.weak,
      wind: Weaknesses.none,
      psychic: Weaknesses.weak,
      nuclear: Weaknesses.none,
      bless: Weaknesses.weak,
      curse: Weaknesses.nullify
    },
    skills: {
      Sledgehammer: 0,
      "Evil Touch": 0,
      "Foul Breath": 0,
      "Ambient Aid": 20,
      Headbutt: 21,
      "Brain Jack": 23,
      "Flash Bomb": 24
    },
    stats: {
      strength: 15,
      magic: 7,
      endurance: 16,
      agility: 8,
      luck: 15
    },
    trait: "Rare Antibody",
    personality: "Irritable",
    shadow: "Pulsing Mud"
  },
  {
    name: "Leanan Sidhe",
    inherits: "almighty",
    item: "Mudo",
    alarm: "Mamudo",
    level: 19,
    arcana: "Lovers",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.weak,
      ice: Weaknesses.none,
      electric: Weaknesses.none,
      wind: Weaknesses.resist,
      psychic: Weaknesses.resist,
      nuclear: Weaknesses.none,
      bless: Weaknesses.none,
      curse: Weaknesses.none
    },
    skills: {
      Rakunda: 0,
      Psio: 0,
      "Marin Karin": 20,
      Mamudo: 21,
      Mapsi: 22,
      Eiga: 23
    },
    stats: {
      strength: 9,
      magic: 17,
      endurance: 12,
      agility: 16,
      luck: 10
    },
    trait: "Skillful Technique",
    personality: "Irritable",
    shadow: "Jealous Lover"
  },
  {
    name: "Flauros",
    special: true,
    inherits: "ailment",
    item: "Giant Slice Belt",
    alarm: "Rising Slash Belt",
    level: 19,
    arcana: "Devil",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.nullify,
      ice: Weaknesses.weak,
      electric: Weaknesses.none,
      wind: Weaknesses.resist,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.resist,
      bless: Weaknesses.none,
      curse: Weaknesses.none
    },
    skills: {
      "Giant Slice": 0,
      "Dormin Rush": 0,
      Dekaja: 0,
      "Dodge Phys": 20,
      Rebellion: 22,
      "Cornered Fang": 23,
      "Heat Up": 24
    },
    stats: {
      strength: 15,
      magic: 11,
      endurance: 13,
      agility: 14,
      luck: 11
    },
    trait: "Gluttonmouth"
  },
  {
    name: "Izanagi",
    inherits: "almighty",
    item: "White Headband",
    alarm: "White Headband R",
    level: 20,
    arcana: "Fool",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.none,
      ice: Weaknesses.none,
      electric: Weaknesses.resist,
      wind: Weaknesses.weak,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.none,
      curse: Weaknesses.nullify
    },
    skills: {
      "Cross Slash": 0,
      Zionga: 0,
      Tarukaja: 0,
      "Rising Slash": 21,
      "Dodge Phys": 22,
      Mazionga: 24,
      "Growth 3": 25
    },
    stats: {
      strength: 14,
      magic: 13,
      endurance: 13,
      agility: 14,
      luck: 13
    },
    trait: "God Maker",
    dlc: true
  },
  {
    name: "Yaksini",
    inherits: "ice",
    item: "Hysterical Slap",
    alarm: "Oni Kagura",
    level: 20,
    arcana: "Empress",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.nullify,
      fire: Weaknesses.none,
      ice: Weaknesses.resist,
      electric: Weaknesses.none,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.weak,
      bless: Weaknesses.none,
      curse: Weaknesses.none
    },
    skills: {
      "Hysterical Slap": 0,
      "Wage War": 0,
      Counter: 0,
      "Oni Kagura": 22,
      "Attack Master": 23,
      "Vicious Strike": 24
    },
    stats: {
      strength: 14,
      magic: 11,
      endurance: 13,
      agility: 16,
      luck: 13
    },
    trait: "Foul Odor",
    personality: "Irritable",
    shadow: "Human-eating Lady"
  },
  {
    name: "Stone of Scone",
    rare: true,
    inherits: "almighty",
    item: "Stone of Scone",
    alarm: "Stone of Scone R",
    level: 20,
    arcana: "Fortune",
    elems: {
      physical: Weaknesses.resist,
      gun: Weaknesses.resist,
      fire: Weaknesses.weak,
      ice: Weaknesses.none,
      electric: Weaknesses.none,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.none,
      curse: Weaknesses.none
    },
    skills: {
      Agilao: 0,
      Bufula: 0,
      Garula: 0,
      Zionga: 0,
      Psio: 0,
      Freila: 0,
      Kouga: 0,
      Eiga: 0,
      Relentless: 0,
      Gluttonmouth: 0,
      "Intense Focus": 0
    },
    stats: {
      strength: 20,
      magic: 20,
      endurance: 20,
      agility: 20,
      luck: 20
    },
    trait: "Ultimate Vessel",
    personality: "None",
    shadow: "(Treasure Demon)"
  },
  {
    name: "Oni",
    inherits: "phys",
    item: "Rampage",
    alarm: "Kill Rush",
    level: 20,
    arcana: "Strength",
    elems: {
      physical: Weaknesses.resist,
      gun: Weaknesses.resist,
      fire: Weaknesses.none,
      ice: Weaknesses.none,
      electric: Weaknesses.none,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.none,
      curse: Weaknesses.none
    },
    skills: {
      Rampage: 0,
      Counter: 0,
      Snap: 0,
      "Giant Slice": 22,
      "Sharp Student": 23,
      "Memory Blow": 24
    },
    stats: {
      strength: 19,
      magic: 9,
      endurance: 17,
      agility: 12,
      luck: 10
    },
    trait: "Retaliating Body",
    personality: "Upbeat",
    shadow: "Chivalrous Guard/Chivalrous Fiend"
  },
  {
    name: "Nue",
    inherits: "curse",
    item: "Maeiha",
    alarm: "Eiga",
    level: 20,
    arcana: "Death",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.weak,
      ice: Weaknesses.resist,
      electric: Weaknesses.none,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.none,
      curse: Weaknesses.nullify
    },
    skills: {
      Maeiha: 0,
      "Skull Cracker": 0,
      Mudo: 21,
      Pulinpa: 22,
      Mamudo: 24,
      "Assault Dive": 25,
      "Curse Boost": 26
    },
    stats: {
      strength: 16,
      magic: 10,
      endurance: 17,
      agility: 14,
      luck: 10
    },
    trait: "Mighty Gaze",
    personality: "Irritable",
    shadow: "Night Chimera"
  },
  {
    name: "Phoenix",
    inherits: "nuke",
    item: "Heavensent Dress",
    alarm: "Godsent Dress",
    level: 21,
    arcana: "Faith",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.none,
      ice: Weaknesses.resist,
      electric: Weaknesses.weak,
      wind: Weaknesses.nullify,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.none,
      curse: Weaknesses.none
    },
    skills: {
      Freila: 0,
      "Dream Needle": 0,
      Diarama: 22,
      Recarm: 23,
      "Nuke Boost": 25,
      Mafreila: 26
    },
    stats: {
      strength: 12,
      magic: 15,
      endurance: 15,
      agility: 17,
      luck: 11
    },
    trait: "Atomic Bloodline"
  },
  {
    name: "Orthrus",
    inherits: "fire",
    item: "Agilao",
    alarm: "Maragion",
    level: 21,
    arcana: "Hanged",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.absorb,
      ice: Weaknesses.weak,
      electric: Weaknesses.none,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.resist,
      bless: Weaknesses.none,
      curse: Weaknesses.none
    },
    skills: {
      Agilao: 0,
      "Double Fangs": 0,
      Maragi: 0,
      "Burn Boost": 22,
      "Cornered Fang": 24,
      Matarukaja: 26
    },
    stats: {
      strength: 16,
      magic: 14,
      endurance: 14,
      agility: 19,
      luck: 7
    },
    trait: "Thermal Conduct",
    personality: "Irritable",
    shadow: "Twin-headed Guardian"
  },
  {
    name: "Nigi Mitama",
    inherits: "healing",
    item: "Prayer Ring",
    alarm: "Spiral Prayer Ring",
    level: 22,
    arcana: "Councillor",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.none,
      ice: Weaknesses.none,
      electric: Weaknesses.weak,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.resist,
      curse: Weaknesses.resist
    },
    skills: {
      Baisudi: 0,
      Diarama: 0,
      Makouha: 0,
      "Divine Grace": 24,
      "Me Patra": 25,
      "Climate Decorum": 26
    },
    stats: {
      strength: 13,
      magic: 15,
      endurance: 15,
      agility: 16,
      luck: 14
    },
    trait: "Relief Bloodline"
  },
  {
    name: "Jikokuten",
    inherits: "phys",
    item: "Assault Dive Belt",
    alarm: "Kill Rush Belt",
    level: 22,
    arcana: "Temperance",
    elems: {
      physical: Weaknesses.resist,
      gun: Weaknesses.none,
      fire: Weaknesses.none,
      ice: Weaknesses.none,
      electric: Weaknesses.none,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.resist,
      curse: Weaknesses.weak
    },
    skills: {
      "Assault Dive": 0,
      "Defense Master": 0,
      Rakunda: 0,
      "Kill Rush": 24,
      Counter: 25,
      Matarukaja: 27,
      "Adverse Resolve": 28
    },
    stats: {
      strength: 18,
      magic: 11,
      endurance: 16,
      agility: 15,
      luck: 13
    },
    trait: "Internal Hypnosis"
  },
  {
    name: "Izanagi Picaro",
    inherits: "almighty",
    item: "Growth 2",
    alarm: "Growth 3",
    level: 23,
    arcana: "Fool",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.none,
      ice: Weaknesses.none,
      electric: Weaknesses.nullify,
      wind: Weaknesses.weak,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.none,
      curse: Weaknesses.nullify
    },
    skills: {
      "Cross Slash": 0,
      Zionga: 0,
      Rakukaja: 0,
      "Rising Slash": 24,
      "Null Phys": 25,
      Mazionga: 27,
      "Growth 3": 28
    },
    stats: {
      strength: 16,
      magic: 15,
      endurance: 15,
      agility: 16,
      luck: 14
    },
    trait: "God Maker",
    dlc: true
  },
  {
    name: "Sandman",
    inherits: "wind",
    item: "Dormina",
    alarm: "Lullaby",
    level: 23,
    arcana: "Magician",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.weak,
      ice: Weaknesses.none,
      electric: Weaknesses.weak,
      wind: Weaknesses.resist,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.none,
      curse: Weaknesses.none
    },
    skills: {
      Dormina: 0,
      Garula: 0,
      "Dormin Rush": 0,
      Sukunda: 24,
      "Null Sleep": 26,
      Magarula: 27,
      "Sleep Boost": 28
    },
    stats: {
      strength: 11,
      magic: 13,
      endurance: 14,
      agility: 17,
      luck: 21
    },
    trait: "Foul Odor",
    personality: "Irritable",
    shadow: "Envoy of Slumber"
  },
  {
    name: "Fuu-Ki",
    inherits: "wind",
    item: "Wind Boost",
    alarm: "Wind Amp",
    level: 23,
    arcana: "Star",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.resist,
      fire: Weaknesses.none,
      ice: Weaknesses.none,
      electric: Weaknesses.weak,
      wind: Weaknesses.absorb,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.none,
      curse: Weaknesses.none
    },
    skills: {
      "Tetra Break": 0,
      Tarukaja: 0,
      Garula: 0,
      "Wind Boost": 25,
      Magarula: 26,
      "Resist Wind": 27
    },
    stats: {
      strength: 14,
      magic: 17,
      endurance: 16,
      agility: 15,
      luck: 14
    },
    trait: "Intense Focus",
    personality: "Gloomy",
    shadow: "Tornado Devil"
  },
  {
    name: "Sui-Ki",
    inherits: "ice",
    item: "Bufula",
    alarm: "Mabufula",
    level: 24,
    arcana: "Moon",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.resist,
      fire: Weaknesses.none,
      ice: Weaknesses.absorb,
      electric: Weaknesses.resist,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.weak,
      bless: Weaknesses.none,
      curse: Weaknesses.none
    },
    skills: {
      Mabufu: 0,
      Sledgehammer: 0,
      Bufula: 0,
      "Null Ice": 26,
      "Wage War": 27,
      Mabufula: 28,
      "Dodge Fire": 29
    },
    stats: {
      strength: 16,
      magic: 15,
      endurance: 15,
      agility: 18,
      luck: 15
    },
    trait: "Frigid Bloodline",
    personality: "Gloomy",
    shadow: "Floodbringer Demon"
  },
  {
    name: "Rakshasa",
    inherits: "phys",
    item: "Regenerate 1",
    alarm: "Regenerate 2",
    level: 24,
    arcana: "Strength",
    elems: {
      physical: Weaknesses.resist,
      gun: Weaknesses.nullify,
      fire: Weaknesses.resist,
      ice: Weaknesses.none,
      electric: Weaknesses.none,
      wind: Weaknesses.weak,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.weak,
      curse: Weaknesses.resist
    },
    skills: {
      "Giant Slice": 0,
      "Wind Wall": 0,
      Tarukaja: 0,
      "Regenerate 1": 26,
      "Mind Slice": 27,
      Counterstrike: 28,
      "Adverse Resolve": 30
    },
    stats: {
      strength: 20,
      magic: 15,
      endurance: 18,
      agility: 17,
      luck: 9
    },
    trait: "Skillful Combo",
    personality: "Irritable",
    shadow: "Battle Fiend"
  },
  {
    name: "Naga",
    inherits: "elec",
    item: "Counter",
    alarm: "Counterstrike",
    level: 24,
    arcana: "Hermit",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.resist,
      fire: Weaknesses.none,
      ice: Weaknesses.none,
      electric: Weaknesses.nullify,
      wind: Weaknesses.weak,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.none,
      curse: Weaknesses.none
    },
    skills: {
      "Power Slash": 0,
      "Memory Blow": 0,
      Zionga: 0,
      "Shock Boost": 26,
      Counter: 27,
      Mazionga: 28,
      Marakukaja: 29
    },
    stats: {
      strength: 15,
      magic: 17,
      endurance: 15,
      agility: 17,
      luck: 15
    },
    trait: "Striking Weight",
    personality: "Gloomy",
    shadow: "Cavern Snakeman"
  },
  {
    name: "Kaguya Picaro",
    inherits: "almighty",
    item: "Diarahan",
    alarm: "Mediarahan",
    level: 25,
    arcana: "Moon",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.weak,
      ice: Weaknesses.none,
      electric: Weaknesses.none,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.nullify,
      curse: Weaknesses.nullify
    },
    skills: {
      "Shining Arrows": 0,
      Mediarama: 0,
      "High Counter": 0,
      "Divine Grace": 26,
      "Amrita Shower": 27,
      Diarahan: 30,
      "Repel Phys": 31
    },
    stats: {
      strength: 17,
      magic: 20,
      endurance: 19,
      agility: 15,
      luck: 11
    },
    trait: "Inviolable Beauty",
    dlc: true
  },
  {
    name: "Setanta",
    inherits: "phys",
    item: "Rebellion Anklet",
    alarm: "Revolution Anklet",
    level: 25,
    arcana: "Emperor",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.resist,
      fire: Weaknesses.none,
      ice: Weaknesses.none,
      electric: Weaknesses.none,
      wind: Weaknesses.none,
      psychic: Weaknesses.weak,
      nuclear: Weaknesses.resist,
      bless: Weaknesses.none,
      curse: Weaknesses.none
    },
    skills: {
      "Giant Slice": 0,
      "Dormin Rush": 0,
      Counter: 0,
      Charge: 27,
      Rebellion: 29,
      "Rising Slash": 30
    },
    stats: {
      strength: 19,
      magic: 16,
      endurance: 18,
      agility: 13,
      luck: 16
    },
    trait: "Retaliating Body"
  },
  {
    name: "Koh-i-Noor",
    rare: true,
    inherits: "almighty",
    item: "Koh-i-Noor",
    alarm: "Koh-i-Noor R",
    level: 25,
    arcana: "Priestess",
    elems: {
      physical: Weaknesses.resist,
      gun: Weaknesses.weak,
      fire: Weaknesses.none,
      ice: Weaknesses.none,
      electric: Weaknesses.none,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.none,
      curse: Weaknesses.none
    },
    skills: {
      "Dodge Fire": 0,
      "Dodge Ice": 0,
      "Dodge Wind": 0,
      "Dodge Elec": 0,
      "Dodge Psy": 0,
      "Dodge Nuke": 0,
      "Dodge Bless": 0,
      "Dodge Curse": 0,
      "Crisis Control": 0,
      "Bloodstained Eyes": 0,
      "Rare Antibody": 0
    },
    stats: {
      strength: 25,
      magic: 25,
      endurance: 25,
      agility: 25,
      luck: 25
    },
    trait: "Ultimate Vessel",
    personality: "None",
    shadow: "(Treasure Demon)"
  },
  {
    name: "Kin-Ki",
    inherits: "phys",
    item: "Vajra Blast",
    alarm: "Vicious Strike",
    level: 25,
    arcana: "Chariot",
    elems: {
      physical: Weaknesses.resist,
      gun: Weaknesses.repel,
      fire: Weaknesses.none,
      ice: Weaknesses.none,
      electric: Weaknesses.none,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.none,
      curse: Weaknesses.none
    },
    skills: {
      "Vajra Blast": 0,
      Rakukaja: 0,
      "Regenerate 1": 0,
      "Dodge Psy": 27,
      Sledgehammer: 28,
      "Bad Beat": 30,
      Counterstrike: 31
    },
    stats: {
      strength: 21,
      magic: 13,
      endurance: 21,
      agility: 15,
      luck: 12
    },
    trait: "Retaliating Body",
    personality: "Gloomy",
    shadow: "Demonic Warlord"
  },
  {
    name: "Anzu",
    inherits: "wind",
    item: "Garula",
    alarm: "Magarula",
    level: 25,
    arcana: "Hierophant",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.weak,
      fire: Weaknesses.none,
      ice: Weaknesses.none,
      electric: Weaknesses.resist,
      wind: Weaknesses.repel,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.weak,
      bless: Weaknesses.none,
      curse: Weaknesses.none
    },
    skills: {
      Garula: 0,
      Masukukaja: 0,
      "Wind Break": 0,
      "Assault Dive": 27,
      Dekaja: 28,
      "Null Forget": 29
    },
    stats: {
      strength: 14,
      magic: 18,
      endurance: 15,
      agility: 21,
      luck: 14
    },
    trait: "Wind Bloodline",
    personality: "Irritable",
    shadow: "Thief of Tablets"
  },
  {
    name: "Orpheus",
    inherits: "almighty",
    item: "Hades Harp",
    alarm: "Hades Harp R",
    level: 26,
    arcana: "Fool",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.none,
      ice: Weaknesses.none,
      electric: Weaknesses.weak,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.resist,
      curse: Weaknesses.weak
    },
    skills: {
      Cadenza: 0,
      Agilao: 0,
      Tarunda: 0,
      Endure: 27,
      Maragion: 29,
      Marakukaja: 30,
      "Fire Boost": 32
    },
    stats: {
      strength: 17,
      magic: 17,
      endurance: 17,
      agility: 17,
      luck: 17
    },
    trait: "Circle of Sadness",
    dlc: true
  },
  {
    name: "Take-Minakata",
    inherits: "elec",
    item: "Zionga",
    alarm: "Mazionga",
    level: 26,
    arcana: "Hanged",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.none,
      ice: Weaknesses.none,
      electric: Weaknesses.resist,
      wind: Weaknesses.none,
      psychic: Weaknesses.weak,
      nuclear: Weaknesses.none,
      bless: Weaknesses.none,
      curse: Weaknesses.resist
    },
    skills: {
      Zionga: 0,
      "Assault Dive": 0,
      "Defense Master": 0,
      Mazionga: 27,
      "Elec Boost": 29,
      "Swift Strike": 31,
      "Shock Boost": 32
    },
    stats: {
      strength: 17,
      magic: 19,
      endurance: 18,
      agility: 16,
      luck: 15
    },
    trait: "Electric Bloodline",
    personality: "Gloomy",
    shadow: "Defeated Avenger"
  },
  {
    name: "Lamia",
    inherits: "fire",
    item: "Rakukaja",
    alarm: "Marakukaja",
    level: 26,
    arcana: "Empress",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.none,
      ice: Weaknesses.weak,
      electric: Weaknesses.resist,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.weak,
      bless: Weaknesses.none,
      curse: Weaknesses.nullify
    },
    skills: {
      Mudo: 0,
      Rakukaja: 0,
      "Rising Slash": 0,
      "Ominous Words": 27,
      "Foul Breath": 28,
      Mamudo: 30,
      "Despair Boost": 31
    },
    stats: {
      strength: 21,
      magic: 15,
      endurance: 18,
      agility: 19,
      luck: 12
    },
    trait: "Foul Odor",
    personality: "Gloomy",
    shadow: "Slithering Snakewoman"
  },
  {
    name: "Isis",
    inherits: "healing",
    item: "Kouga",
    alarm: "Makouga",
    level: 26,
    arcana: "Priestess",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.none,
      ice: Weaknesses.none,
      electric: Weaknesses.none,
      wind: Weaknesses.none,
      psychic: Weaknesses.weak,
      nuclear: Weaknesses.none,
      bless: Weaknesses.nullify,
      curse: Weaknesses.none
    },
    skills: {
      Makouga: 0,
      Mahama: 0,
      Diarama: 0,
      "Resist Despair": 27,
      Hamaon: 29,
      "Hama Boost": 30,
      Makarakarn: 32
    },
    stats: {
      strength: 14,
      magic: 20,
      endurance: 17,
      agility: 18,
      luck: 16
    },
    trait: "Savior Bloodline",
    personality: "Timid",
    shadow: "She of Life and Death"
  },
  {
    name: "Tam Lin",
    special: true,
    inherits: "almighty",
    item: "Fairy Knight Armor",
    alarm: "Fairy Hero Armor",
    level: 27,
    arcana: "Faith",
    elems: {
      physical: Weaknesses.resist,
      gun: Weaknesses.none,
      fire: Weaknesses.nullify,
      ice: Weaknesses.none,
      electric: Weaknesses.none,
      wind: Weaknesses.resist,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.absorb,
      curse: Weaknesses.weak
    },
    skills: {
      "Assault Dive": 0,
      "Brain Shake": 0,
      Rebellion: 0,
      "Sharp Student": 28,
      "Brain Buster": 30,
      "Brainwash Boost": 31,
      "Heat Up": 32
    },
    stats: {
      strength: 21,
      magic: 16,
      endurance: 18,
      agility: 16,
      luck: 17
    },
    trait: "Gluttonmouth"
  },
  {
    name: "Clotho",
    inherits: "healing",
    item: "Tetraja",
    alarm: "Makarakarn",
    level: 27,
    arcana: "Fortune",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.none,
      ice: Weaknesses.weak,
      electric: Weaknesses.none,
      wind: Weaknesses.nullify,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.weak,
      bless: Weaknesses.none,
      curse: Weaknesses.none
    },
    skills: {
      Mahama: 0,
      "Me Patra": 0,
      Makajam: 0,
      Tetraja: 28,
      Makajamaon: 30,
      "Energy Shower": 31,
      "Invigorate 1": 33
    },
    stats: {
      strength: 14,
      magic: 19,
      endurance: 18,
      agility: 20,
      luck: 17
    },
    trait: "Relief Bloodline"
  },
  {
    name: "Andras",
    inherits: "ice",
    item: "Evil Touch",
    alarm: "Evil Smile",
    level: 27,
    arcana: "Devil",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.weak,
      ice: Weaknesses.resist,
      electric: Weaknesses.none,
      wind: Weaknesses.none,
      psychic: Weaknesses.resist,
      nuclear: Weaknesses.none,
      bless: Weaknesses.weak,
      curse: Weaknesses.nullify
    },
    skills: {
      "Foul Breath": 0,
      "Terror Claw": 0,
      "Evil Touch": 28,
      "Fear Boost": 29,
      Rakunda: 31,
      "Ghastly Wail": 32
    },
    stats: {
      strength: 15,
      magic: 19,
      endurance: 19,
      agility: 21,
      luck: 14
    },
    trait: "Foul Odor",
    personality: "Timid",
    shadow: "Menacing Owlman"
  },
  {
    name: "Pisaca",
    inherits: "curse",
    item: "Headhunter Ladle",
    alarm: "Headhunter Ladle EX",
    level: 28,
    arcana: "Death",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.weak,
      ice: Weaknesses.none,
      electric: Weaknesses.resist,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.weak,
      curse: Weaknesses.nullify
    },
    skills: {
      "Dream Needle": 0,
      Rampage: 0,
      "Stagnant Air": 0,
      Mamudo: 29,
      "Abysmal Surge": 31,
      "Despair Boost": 32,
      Mudoon: 33
    },
    stats: {
      strength: 19,
      magic: 21,
      endurance: 21,
      agility: 16,
      luck: 14
    },
    trait: "Rare Antibody",
    personality: "Gloomy",
    shadow: "Corpse-eating Corpse"
  },
  {
    name: "Choronzon",
    inherits: "curse",
    item: "Curse Ring",
    alarm: "Spiral Curse Ring",
    level: 28,
    arcana: "Magician",
    elems: {
      physical: Weaknesses.resist,
      gun: Weaknesses.none,
      fire: Weaknesses.absorb,
      ice: Weaknesses.none,
      electric: Weaknesses.none,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.weak,
      curse: Weaknesses.none
    },
    skills: {
      Pulinpa: 0,
      "Life Drain": 0,
      Rampage: 0,
      Maeiha: 29,
      "Dodge Elec": 30,
      Eiga: 31,
      "Curse Boost": 32,
      "Climate Decorum": 33
    },
    stats: {
      strength: 16,
      magic: 19,
      endurance: 19,
      agility: 18,
      luck: 19
    },
    trait: "Draining Mouth",
    personality: "Timid",
    shadow: "Gathering Devil"
  },
  {
    name: "Orpheus Picaro",
    inherits: "almighty",
    item: "Agidyne",
    alarm: "Maragidyne",
    level: 29,
    arcana: "Fool",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.none,
      ice: Weaknesses.none,
      electric: Weaknesses.weak,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.resist,
      curse: Weaknesses.weak
    },
    skills: {
      Cadenza: 0,
      Maragion: 0,
      Matarunda: 0,
      Endure: 30,
      Agidyne: 32,
      Matarukaja: 33,
      "Fire Boost": 35
    },
    stats: {
      strength: 19,
      magic: 19,
      endurance: 19,
      agility: 19,
      luck: 18
    },
    trait: "Circle of Sadness",
    dlc: true
  },
  {
    name: "Principality",
    inherits: "bless",
    item: "Blessing Ring",
    alarm: "Spiral Blessing Ring",
    level: 29,
    arcana: "Justice",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.resist,
      ice: Weaknesses.none,
      electric: Weaknesses.none,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.nullify,
      curse: Weaknesses.weak
    },
    skills: {
      Makouga: 0,
      Makajamaon: 0,
      Tetraja: 0,
      Mediarama: 30,
      "Forget Boost": 32,
      "Bless Boost": 34,
      Mabaisudi: 35
    },
    stats: {
      strength: 17,
      magic: 19,
      endurance: 18,
      agility: 21,
      luck: 19
    },
    trait: "Blessed Bloodline"
  },
  {
    name: "Ariadne",
    inherits: "almighty",
    item: "Red String",
    alarm: "Red String R",
    level: 30,
    arcana: "Fortune",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.resist,
      fire: Weaknesses.none,
      ice: Weaknesses.none,
      electric: Weaknesses.none,
      wind: Weaknesses.none,
      psychic: Weaknesses.weak,
      nuclear: Weaknesses.nullify,
      bless: Weaknesses.resist,
      curse: Weaknesses.none
    },
    skills: {
      "Beast Weaver": 0,
      "Apt Pupil": 0,
      "Miracle Punch": 0,
      "Attack Master": 31,
      "Fortified Moxy": 32,
      "Evade Phys": 34,
      Charge: 36
    },
    stats: {
      strength: 23,
      magic: 19,
      endurance: 20,
      agility: 17,
      luck: 18
    },
    trait: "Tag Team",
    dlc: true
  },
  {
    name: "Orlov",
    rare: true,
    inherits: "almighty",
    item: "Orlov",
    alarm: "Orlov R",
    level: 30,
    arcana: "Strength",
    elems: {
      physical: Weaknesses.resist,
      gun: Weaknesses.resist,
      fire: Weaknesses.none,
      ice: Weaknesses.none,
      electric: Weaknesses.none,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.none,
      curse: Weaknesses.weak
    },
    skills: {
      Maragion: 0,
      Mabufula: 0,
      Magarula: 0,
      Mazionga: 0,
      Mapsio: 0,
      Mafreila: 0,
      Makouga: 0,
      Maeiga: 0,
      "Heated Bloodline": 0,
      "Electric Bloodline": 0,
      "Atomic Bloodline": 0
    },
    stats: {
      strength: 30,
      magic: 30,
      endurance: 30,
      agility: 30,
      luck: 30
    },
    trait: "Ultimate Vessel",
    personality: "None",
    shadow: "(Treasure Demon)"
  },
  {
    name: "Neko Shogun",
    special: true,
    inherits: "almighty",
    item: "Catnap",
    alarm: "Cat Buster",
    level: 30,
    arcana: "Star",
    elems: {
      physical: Weaknesses.resist,
      gun: Weaknesses.none,
      fire: Weaknesses.none,
      ice: Weaknesses.none,
      electric: Weaknesses.resist,
      wind: Weaknesses.weak,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.nullify,
      curse: Weaknesses.resist
    },
    skills: {
      Psio: 0,
      Diarama: 0,
      Masukukaja: 0,
      "Invigorate 1": 31,
      "Cornered Fang": 33,
      "Defense Master": 35,
      "Fortified Moxy": 36
    },
    stats: {
      strength: 19,
      magic: 20,
      endurance: 19,
      agility: 21,
      luck: 18
    },
    trait: "Pinch Anchor"
  },
  {
    name: "Ara Mitama",
    inherits: "nuke",
    item: "Nuclear Ring",
    alarm: "Spiral Nuclear Ring",
    level: 30,
    arcana: "Chariot",
    elems: {
      physical: Weaknesses.resist,
      gun: Weaknesses.none,
      fire: Weaknesses.none,
      ice: Weaknesses.weak,
      electric: Weaknesses.none,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.none,
      curse: Weaknesses.none
    },
    skills: {
      "Miracle Punch": 0,
      Freila: 0,
      Taunt: 0,
      Rebellion: 31,
      Marakunda: 32,
      "Rage Boost": 34,
      Matarukaja: 35
    },
    stats: {
      strength: 20,
      magic: 18,
      endurance: 20,
      agility: 20,
      luck: 19
    },
    trait: "Atomic Bloodline"
  },
  {
    name: "Zouchouten",
    inherits: "elec",
    item: "Spark Ring",
    alarm: "Spiral Spark Ring",
    level: 31,
    arcana: "Strength",
    elems: {
      physical: Weaknesses.resist,
      gun: Weaknesses.none,
      fire: Weaknesses.none,
      ice: Weaknesses.none,
      electric: Weaknesses.none,
      wind: Weaknesses.weak,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.none,
      curse: Weaknesses.none
    },
    skills: {
      "Kill Rush": 0,
      Zionga: 0,
      "Terror Claw": 32,
      "Sharp Student": 33,
      "Resist Fear": 34,
      "Swift Strike": 35,
      "Attack Master": 36
    },
    stats: {
      strength: 22,
      magic: 19,
      endurance: 24,
      agility: 18,
      luck: 17
    },
    trait: "Electric Bloodline"
  },
  {
    name: "Kurama Tengu",
    inherits: "wind",
    item: "Wind Ring",
    alarm: "Spiral Wind Ring",
    level: 31,
    arcana: "Hermit",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.none,
      ice: Weaknesses.nullify,
      electric: Weaknesses.none,
      wind: Weaknesses.repel,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.resist,
      curse: Weaknesses.resist
    },
    skills: {
      "Double Shot": 0,
      Masukunda: 0,
      Magarula: 0,
      "Wind Boost": 32,
      "Brain Jack": 34,
      "Growth 2": 36
    },
    stats: {
      strength: 20,
      magic: 19,
      endurance: 21,
      agility: 24,
      luck: 16
    },
    trait: "Skillful Combo",
    personality: "Irritable",
    shadow: "Monk of the Valley"
  },
  {
    name: "Lilim",
    inherits: "ice",
    item: "Ice Boost",
    alarm: "Ice Amp",
    level: 32,
    arcana: "Devil",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.none,
      ice: Weaknesses.resist,
      electric: Weaknesses.none,
      wind: Weaknesses.weak,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.weak,
      curse: Weaknesses.nullify
    },
    skills: {
      Bufula: 0,
      Lullaby: 0,
      "Freeze Boost": 0,
      Masukunda: 34,
      "Dodge Bless": 35,
      "Spirit Drain": 36,
      Mabufula: 37
    },
    stats: {
      strength: 17,
      magic: 23,
      endurance: 18,
      agility: 25,
      luck: 20
    },
    trait: "Cold-Blooded",
    personality: "Gloomy",
    shadow: "Woman Who Brings Ruin"
  },
  {
    name: "Decarabia",
    inherits: "fire",
    item: "Maragion",
    alarm: "Agidyne",
    level: 32,
    arcana: "Councillor",
    elems: {
      physical: Weaknesses.weak,
      gun: Weaknesses.none,
      fire: Weaknesses.repel,
      ice: Weaknesses.none,
      electric: Weaknesses.none,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.resist,
      bless: Weaknesses.none,
      curse: Weaknesses.resist
    },
    skills: {
      Agilao: 0,
      "Ominous Words": 0,
      Tetrakarn: 33,
      "Fire Boost": 35,
      Agidyne: 36,
      "Null Fire": 37,
      Megidola: 38
    },
    stats: {
      strength: 21,
      magic: 23,
      endurance: 19,
      agility: 22,
      luck: 18
    },
    trait: "Heated Bloodline",
    personality: "Gloomy",
    shadow: "Vicious Pentagram"
  },
  {
    name: "Mothman",
    inherits: "elec",
    item: "Skull Cracker",
    alarm: "Mind Slice",
    level: 33,
    arcana: "Moon",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.weak,
      fire: Weaknesses.none,
      ice: Weaknesses.none,
      electric: Weaknesses.nullify,
      wind: Weaknesses.none,
      psychic: Weaknesses.resist,
      nuclear: Weaknesses.none,
      bless: Weaknesses.none,
      curse: Weaknesses.none
    },
    skills: {
      "Skull Cracker": 0,
      Mazionga: 0,
      "Shock Boost": 0,
      Tentarafoo: 35,
      "Ambient Aid": 36,
      Makajamaon: 37,
      Ziodyne: 38
    },
    stats: {
      strength: 21,
      magic: 24,
      endurance: 16,
      agility: 24,
      luck: 21
    },
    trait: "Static Electricity",
    personality: "Timid",
    shadow: "Vampire Moth"
  },
  {
    name: "Mithra",
    inherits: "bless",
    item: "Death Contract",
    alarm: "Death Promise",
    level: 33,
    arcana: "Temperance",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.none,
      ice: Weaknesses.nullify,
      electric: Weaknesses.weak,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.nullify,
      curse: Weaknesses.none
    },
    skills: {
      Kouga: 0,
      Mahama: 0,
      Diarama: 0,
      Makouga: 34,
      Dekunda: 35,
      "Bless Boost": 36,
      Thermopylae: 38
    },
    stats: {
      strength: 19,
      magic: 26,
      endurance: 19,
      agility: 24,
      luck: 18
    },
    trait: "Blessed Bloodline"
  },
  {
    name: "Thunderbird",
    inherits: "elec",
    item: "Elec Boost",
    alarm: "Elec Amp",
    level: 34,
    arcana: "Sun",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.none,
      ice: Weaknesses.none,
      electric: Weaknesses.absorb,
      wind: Weaknesses.none,
      psychic: Weaknesses.weak,
      nuclear: Weaknesses.none,
      bless: Weaknesses.none,
      curse: Weaknesses.weak
    },
    skills: {
      Mazionga: 0,
      Tarukaja: 0,
      "Shock Boost": 0,
      Rebellion: 35,
      Ziodyne: 37,
      "Elec Boost": 38,
      Maziodyne: 39
    },
    stats: {
      strength: 17,
      magic: 24,
      endurance: 24,
      agility: 26,
      luck: 18
    },
    trait: "Electric Bloodline",
    personality: "Upbeat",
    shadow: "Storm-Invoking Ptarmigan"
  },
  {
    name: "Anubis",
    inherits: "almighty",
    item: "Makouga",
    alarm: "Kougaon",
    level: 34,
    arcana: "Judgement",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.resist,
      fire: Weaknesses.none,
      ice: Weaknesses.none,
      electric: Weaknesses.none,
      wind: Weaknesses.none,
      psychic: Weaknesses.resist,
      nuclear: Weaknesses.none,
      bless: Weaknesses.nullify,
      curse: Weaknesses.nullify
    },
    skills: {
      Hamaon: 0,
      Mudoon: 0,
      Makouga: 0,
      Maeiga: 36,
      Dekunda: 37,
      "Resist Bless": 38
    },
    stats: {
      strength: 19,
      magic: 24,
      endurance: 22,
      agility: 21,
      luck: 23
    },
    trait: "Deathly Illness",
    personality: "Gloomy",
    shadow: "Bearer of the Scales"
  },
  {
    name: "Lachesis",
    inherits: "ice",
    item: "Snow Ring",
    alarm: "Spiral Snow Ring",
    level: 35,
    arcana: "Fortune",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.none,
      ice: Weaknesses.nullify,
      electric: Weaknesses.weak,
      wind: Weaknesses.resist,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.none,
      curse: Weaknesses.none
    },
    skills: {
      Mabaisudi: 0,
      Bufula: 0,
      "Growth 2": 0,
      Marakukaja: 36,
      "Elec Wall": 37,
      Mabufula: 39,
      "Ice Boost": 41
    },
    stats: {
      strength: 18,
      magic: 26,
      endurance: 22,
      agility: 25,
      luck: 21
    },
    trait: "Internal Hypnosis"
  },
  {
    name: "Emperor's Amulet",
    rare: true,
    inherits: "almighty",
    item: "Emperor's Amulet",
    alarm: "Emperor's Amulet R",
    level: 35,
    arcana: "Hanged",
    elems: {
      physical: Weaknesses.resist,
      gun: Weaknesses.resist,
      fire: Weaknesses.none,
      ice: Weaknesses.none,
      electric: Weaknesses.weak,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.none,
      curse: Weaknesses.none
    },
    skills: {
      Agidyne: 0,
      Bufudyne: 0,
      Garudyne: 0,
      Ziodyne: 0,
      Psiodyne: 0,
      Freidyne: 0,
      Kougaon: 0,
      Eigaon: 0,
      "Frigid Bloodline": 0,
      "Wind Bloodline": 0,
      "Psychic Bloodline": 0
    },
    stats: {
      strength: 35,
      magic: 35,
      endurance: 35,
      agility: 35,
      luck: 35
    },
    trait: "Ultimate Vessel",
    personality: "None",
    shadow: "(Treasure Demon)"
  },
  {
    name: "Arahabaki",
    inherits: "ailment",
    item: "Tapsuan",
    alarm: "Fine Tapsuan",
    level: 35,
    arcana: "Hermit",
    elems: {
      physical: Weaknesses.repel,
      gun: Weaknesses.repel,
      fire: Weaknesses.none,
      ice: Weaknesses.none,
      electric: Weaknesses.none,
      wind: Weaknesses.none,
      psychic: Weaknesses.weak,
      nuclear: Weaknesses.weak,
      bless: Weaknesses.resist,
      curse: Weaknesses.resist
    },
    skills: {
      Makarakarn: 0,
      "Abysmal Surge": 0,
      "Null Brainwash": 0,
      "Spirit Drain": 37,
      "Flash Bomb": 38,
      "Defense Master": 39
    },
    stats: {
      strength: 21,
      magic: 23,
      endurance: 22,
      agility: 24,
      luck: 22
    },
    trait: "Immunity",
    personality: "Gloomy",
    shadow: "Awakened God"
  },
  {
    name: "Thoth",
    inherits: "nuke",
    item: "Mafreila",
    alarm: "Freidyne",
    level: 36,
    arcana: "Emperor",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.none,
      ice: Weaknesses.none,
      electric: Weaknesses.none,
      wind: Weaknesses.none,
      psychic: Weaknesses.weak,
      nuclear: Weaknesses.nullify,
      bless: Weaknesses.nullify,
      curse: Weaknesses.resist
    },
    skills: {
      Taunt: 0,
      Freila: 0,
      Masukunda: 0,
      Megido: 37,
      "Psy Wall": 39,
      Concentrate: 40,
      "Growth 2": 42
    },
    stats: {
      strength: 21,
      magic: 28,
      endurance: 21,
      agility: 24,
      luck: 21
    },
    trait: "Skillful Technique",
    personality: "Gloomy",
    shadow: "Chanting Baboon"
  },
  {
    name: "Kaiwan",
    inherits: "almighty",
    item: "Makajam",
    alarm: "Makajamaon",
    level: 36,
    arcana: "Star",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.nullify,
      fire: Weaknesses.none,
      ice: Weaknesses.none,
      electric: Weaknesses.none,
      wind: Weaknesses.none,
      psychic: Weaknesses.nullify,
      nuclear: Weaknesses.weak,
      bless: Weaknesses.none,
      curse: Weaknesses.none
    },
    skills: {
      Makajam: 0,
      Psio: 0,
      "Forget Boost": 37,
      "Speed Master": 38,
      Makajamaon: 39,
      Psiodyne: 40,
      Marakunda: 41
    },
    stats: {
      strength: 23,
      magic: 26,
      endurance: 24,
      agility: 22,
      luck: 20
    },
    trait: "Psychic Bloodline",
    personality: "Timid",
    shadow: "Wishless Star"
  },
  {
    name: "Hell Biker",
    special: true,
    inherits: "fire",
    item: "Black Jacket",
    alarm: "Dark Jacket",
    level: 37,
    arcana: "Death",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.repel,
      ice: Weaknesses.none,
      electric: Weaknesses.none,
      wind: Weaknesses.resist,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.weak,
      curse: Weaknesses.none
    },
    skills: {
      Mudoon: 0,
      Agilao: 0,
      "Speed Master": 0,
      Tentarafoo: 38,
      "Fire Boost": 39,
      Maragion: 40,
      Mamudoon: 41
    },
    stats: {
      strength: 23,
      magic: 24,
      endurance: 24,
      agility: 30,
      luck: 17
    },
    trait: "Internal Hypnosis"
  },
  {
    name: "Belphegor",
    inherits: "ice",
    item: "Mabufula",
    alarm: "Bufudyne",
    level: 37,
    arcana: "Tower",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.weak,
      ice: Weaknesses.resist,
      electric: Weaknesses.resist,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.resist,
      bless: Weaknesses.none,
      curse: Weaknesses.repel
    },
    skills: {
      Mabufula: 0,
      "Ice Break": 0,
      "Null Rage": 38,
      "Dodge Fire": 39,
      Bufudyne: 41,
      Concentrate: 42
    },
    stats: {
      strength: 25,
      magic: 27,
      endurance: 24,
      agility: 23,
      luck: 19
    },
    trait: "Intense Focus",
    personality: "Irritable",
    shadow: "Ambassador of Filth"
  },
  {
    name: "White Rider",
    inherits: "curse",
    item: "Gun Boost",
    alarm: "Gun Amp",
    level: 38,
    arcana: "Chariot",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.nullify,
      ice: Weaknesses.weak,
      electric: Weaknesses.none,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.nullify,
      curse: Weaknesses.repel
    },
    skills: {
      "Triple Down": 0,
      "Evil Touch": 0,
      "Oni Kagura": 0,
      "Gun Boost": 40,
      Maeiga: 41,
      Masukukaja: 42,
      "Foul Breath": 43,
      "Ailment Boost": 44
    },
    stats: {
      strength: 22,
      magic: 21,
      endurance: 26,
      agility: 27,
      luck: 25
    },
    trait: "Bloodstained Eyes"
  },
  {
    name: "Legion",
    inherits: "psy",
    item: "Foul Breath",
    alarm: "Stagnant Air",
    level: 38,
    arcana: "Fool",
    elems: {
      physical: Weaknesses.resist,
      gun: Weaknesses.none,
      fire: Weaknesses.resist,
      ice: Weaknesses.none,
      electric: Weaknesses.none,
      wind: Weaknesses.none,
      psychic: Weaknesses.resist,
      nuclear: Weaknesses.none,
      bless: Weaknesses.weak,
      curse: Weaknesses.nullify
    },
    skills: {
      Bloodbath: 0,
      "Life Drain": 0,
      "Evil Smile": 0,
      "Foul Breath": 39,
      "Tetra Break": 40,
      "Null Dizzy": 42,
      Eigaon: 45
    },
    stats: {
      strength: 24,
      magic: 24,
      endurance: 30,
      agility: 23,
      luck: 20
    },
    trait: "Draining Mouth",
    personality: "Upbeat",
    shadow: "Fused Ghost"
  },
  {
    name: "Unicorn",
    inherits: "bless",
    item: "Mahama",
    alarm: "Hamaon",
    level: 39,
    arcana: "Faith",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.none,
      ice: Weaknesses.nullify,
      electric: Weaknesses.none,
      wind: Weaknesses.none,
      psychic: Weaknesses.resist,
      nuclear: Weaknesses.none,
      bless: Weaknesses.nullify,
      curse: Weaknesses.weak
    },
    skills: {
      "Assault Dive": 0,
      Mahama: 0,
      Dekunda: 0,
      Samarecarm: 41,
      "Swift Strike": 42,
      Kougaon: 43,
      Hamaon: 44
    },
    stats: {
      strength: 20,
      magic: 27,
      endurance: 25,
      agility: 28,
      luck: 24
    },
    trait: "Blessed Bloodline",
    personality: "Timid",
    shadow: "Expressionless Beast"
  },
  {
    name: "Mithras",
    inherits: "nuke",
    item: "Nuke Boost",
    alarm: "Nuke Amp",
    level: 39,
    arcana: "Sun",
    elems: {
      physical: Weaknesses.resist,
      gun: Weaknesses.resist,
      fire: Weaknesses.absorb,
      ice: Weaknesses.none,
      electric: Weaknesses.none,
      wind: Weaknesses.none,
      psychic: Weaknesses.weak,
      nuclear: Weaknesses.nullify,
      bless: Weaknesses.none,
      curse: Weaknesses.none
    },
    skills: {
      Tentarafoo: 0,
      Mafreila: 0,
      "Heat Wave": 0,
      "Tetra Break": 41,
      "Nuke Break": 42,
      Mabaisudi: 43,
      Freidyne: 45
    },
    stats: {
      strength: 27,
      magic: 25,
      endurance: 27,
      agility: 25,
      luck: 20
    },
    trait: "Skillful Technique",
    personality: "Gloomy",
    shadow: "Dark Sun"
  },
  {
    name: "Atropos",
    inherits: "elec",
    item: "Mazionga",
    alarm: "Ziodyne",
    level: 39,
    arcana: "Fortune",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.weak,
      ice: Weaknesses.none,
      electric: Weaknesses.none,
      wind: Weaknesses.nullify,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.none,
      curse: Weaknesses.none
    },
    skills: {
      Mazionga: 0,
      "Fire Wall": 0,
      "Elec Break": 0,
      Mediarama: 41,
      "Elec Boost": 42,
      Ziodyne: 44,
      Concentrate: 45
    },
    stats: {
      strength: 23,
      magic: 30,
      endurance: 22,
      agility: 27,
      luck: 22
    },
    trait: "Mighty Gaze"
  },
  {
    name: "Kikuri-Hime",
    inherits: "healing",
    item: "Energy Drop",
    alarm: "Energy Shower",
    level: 40,
    arcana: "Priestess",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.weak,
      ice: Weaknesses.none,
      electric: Weaknesses.none,
      wind: Weaknesses.nullify,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.resist,
      curse: Weaknesses.none
    },
    skills: {
      Lullaby: 0,
      Marakukaja: 0,
      "Energy Drop": 0,
      Mediarama: 41,
      Tetraja: 43,
      "Divine Grace": 45
    },
    stats: {
      strength: 22,
      magic: 31,
      endurance: 24,
      agility: 28,
      luck: 22
    },
    trait: "Relief Bloodline",
    personality: "Gloomy",
    shadow: "Mountain Girl"
  },
  {
    name: "Hope Diamond",
    rare: true,
    inherits: "almighty",
    item: "Hope Diamond",
    alarm: "Hope Diamond R",
    level: 40,
    arcana: "Death",
    elems: {
      physical: Weaknesses.resist,
      gun: Weaknesses.resist,
      fire: Weaknesses.none,
      ice: Weaknesses.weak,
      electric: Weaknesses.none,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.none,
      curse: Weaknesses.none
    },
    skills: {
      "Auto-Mataru": 0,
      "Auto-Maraku": 0,
      "Auto-Masuku": 0,
      Endure: 0,
      "Regenerate 2": 0,
      "Invigorate 2": 0,
      "High Counter": 0,
      "Fast Heal": 0,
      "Internal Hypnosis": 0,
      "Striking Weight": 0,
      "Retaliating Body": 0
    },
    stats: {
      strength: 40,
      magic: 40,
      endurance: 40,
      agility: 40,
      luck: 40
    },
    trait: "Ultimate Vessel",
    personality: "None",
    shadow: "(Treasure Demon)"
  },
  {
    name: "Hariti",
    inherits: "elec",
    item: "Revival Charm",
    alarm: "Rejuvenate Charm",
    level: 40,
    arcana: "Empress",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.none,
      ice: Weaknesses.none,
      electric: Weaknesses.none,
      wind: Weaknesses.weak,
      psychic: Weaknesses.resist,
      nuclear: Weaknesses.none,
      bless: Weaknesses.resist,
      curse: Weaknesses.none
    },
    skills: {
      Zionga: 0,
      "Energy Shower": 0,
      Mabaisudi: 0,
      Samarecarm: 41,
      "Nocturnal Flash": 42,
      Mediarama: 44,
      "Dizzy Boost": 45,
      "Spirit Drain": 46
    },
    stats: {
      strength: 21,
      magic: 32,
      endurance: 24,
      agility: 23,
      luck: 27
    },
    trait: "Electric Bloodline"
  },
  {
    name: "Daisoujou",
    inherits: "bless",
    item: "Spiral Blessing Ring",
    alarm: "Divine Ring",
    level: 40,
    arcana: "Hierophant",
    elems: {
      physical: Weaknesses.resist,
      gun: Weaknesses.none,
      fire: Weaknesses.none,
      ice: Weaknesses.none,
      electric: Weaknesses.none,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.nullify,
      curse: Weaknesses.weak
    },
    skills: {
      "Spirit Drain": 0,
      Makouga: 0,
      Samsara: 41,
      "Bless Boost": 42,
      Diarahan: 43,
      "Me Patra": 44,
      "Null Rage": 45
    },
    stats: {
      strength: 21,
      magic: 33,
      endurance: 24,
      agility: 24,
      luck: 25
    },
    trait: "Draining Mouth"
  },
  {
    name: "Red Rider",
    inherits: "psy",
    item: "Karma Ring",
    alarm: "Spiral Karma Ring",
    level: 41,
    arcana: "Tower",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.none,
      ice: Weaknesses.none,
      electric: Weaknesses.none,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.weak,
      curse: Weaknesses.nullify
    },
    skills: {
      "Rising Slash": 0,
      "Psy Break": 0,
      Mapsio: 0,
      "Negative Pile": 42,
      "Despair Boost": 44,
      "Ominous Words": 45,
      "Last Stand": 46
    },
    stats: {
      strength: 26,
      magic: 27,
      endurance: 25,
      agility: 29,
      luck: 23
    },
    trait: "Ailment Hunter"
  },
  {
    name: "Power",
    inherits: "bless",
    item: "Bless Boost",
    alarm: "Bless Amp",
    level: 41,
    arcana: "Justice",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.weak,
      fire: Weaknesses.none,
      ice: Weaknesses.none,
      electric: Weaknesses.none,
      wind: Weaknesses.resist,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.nullify,
      curse: Weaknesses.weak
    },
    skills: {
      Hamaon: 0,
      "Brain Shake": 0,
      "Swift Strike": 42,
      Makouga: 43,
      "Bless Boost": 44,
      Masukukaja: 45,
      "Null Curse": 46
    },
    stats: {
      strength: 30,
      magic: 26,
      endurance: 28,
      agility: 25,
      luck: 21
    },
    trait: "Internal Hypnosis",
    personality: "Irritable",
    shadow: "Divine Warrior"
  },
  {
    name: "Ariadne Picaro",
    inherits: "almighty",
    item: "Auto-Mataru",
    alarm: "Auto-Maraku",
    level: 42,
    arcana: "Fortune",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.resist,
      fire: Weaknesses.none,
      ice: Weaknesses.none,
      electric: Weaknesses.none,
      wind: Weaknesses.none,
      psychic: Weaknesses.weak,
      nuclear: Weaknesses.nullify,
      bless: Weaknesses.resist,
      curse: Weaknesses.none
    },
    skills: {
      "Beast Weaver": 0,
      "Apt Pupil": 0,
      "Miracle Punch": 0,
      "Auto-Mataru": 43,
      "Heat Up": 44,
      "Evade Phys": 46,
      Charge: 48
    },
    stats: {
      strength: 36,
      magic: 23,
      endurance: 29,
      agility: 24,
      luck: 21
    },
    trait: "Tag Team",
    dlc: true
  },
  {
    name: "Ose",
    inherits: "ailment",
    item: "Counterstrike",
    alarm: "High Counter",
    level: 42,
    arcana: "Fool",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.nullify,
      fire: Weaknesses.resist,
      ice: Weaknesses.none,
      electric: Weaknesses.none,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.weak,
      curse: Weaknesses.nullify
    },
    skills: {
      "Oni Kagura": 0,
      Counterstrike: 0,
      Charge: 0,
      "Tempest Slash": 43,
      Matarukaja: 45,
      "Heat Wave": 47
    },
    stats: {
      strength: 32,
      magic: 24,
      endurance: 25,
      agility: 31,
      luck: 21
    },
    trait: "Retaliating Body",
    personality: "Upbeat",
    shadow: "Cruel Leopard"
  },
  {
    name: "Kushinada",
    inherits: "healing",
    item: "Cure Charm",
    alarm: "Spiral Cure Charm",
    level: 42,
    arcana: "Lovers",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.none,
      ice: Weaknesses.weak,
      electric: Weaknesses.none,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.weak,
      bless: Weaknesses.repel,
      curse: Weaknesses.none
    },
    skills: {
      "Hysterical Slap": 0,
      "Psy Wall": 0,
      Mediarama: 0,
      Matarukaja: 44,
      "Null Confuse": 45,
      "Wind Wall": 46,
      "Amrita Shower": 47,
      "Null Ice": 48
    },
    stats: {
      strength: 24,
      magic: 30,
      endurance: 26,
      agility: 28,
      luck: 25
    },
    trait: "Savior Bloodline",
    personality: "Upbeat",
    shadow: "Lamenting Sacrifice"
  },
  {
    name: "Kumbhanda",
    inherits: "ailment",
    item: "Terror Claw",
    alarm: "Bloodbath",
    level: 42,
    arcana: "Hermit",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.nullify,
      ice: Weaknesses.none,
      electric: Weaknesses.none,
      wind: Weaknesses.none,
      psychic: Weaknesses.weak,
      nuclear: Weaknesses.none,
      bless: Weaknesses.none,
      curse: Weaknesses.resist
    },
    skills: {
      Magarula: 0,
      "Stagnant Air": 0,
      Bloodbath: 0,
      "Tempest Slash": 43,
      Dekaja: 45,
      "Fear Boost": 46,
      Revolution: 47
    },
    stats: {
      strength: 25,
      magic: 30,
      endurance: 25,
      agility: 27,
      luck: 26
    },
    trait: "Rare Antibody",
    personality: "Irritable",
    shadow: "Life-Draining Spirit"
  },
  {
    name: "Hecatoncheires",
    inherits: "phys",
    item: "Swift Strike Belt",
    alarm: "Gattling Blows Belt",
    level: 42,
    arcana: "Hanged",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.resist,
      fire: Weaknesses.none,
      ice: Weaknesses.none,
      electric: Weaknesses.none,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.weak,
      curse: Weaknesses.nullify
    },
    skills: {
      "Swift Strike": 0,
      "Regenerate 2": 0,
      Tarukaja: 0,
      Endure: 43,
      Rebellion: 45,
      "Fortified Moxy": 46,
      "Gattling Blows": 49
    },
    stats: {
      strength: 35,
      magic: 22,
      endurance: 27,
      agility: 23,
      luck: 26
    },
    trait: "Gluttonmouth"
  },
  {
    name: "Yurlungur",
    inherits: "elec",
    item: "Mirrirmina",
    alarm: "Mirrirmina EX",
    level: 43,
    arcana: "Sun",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.none,
      ice: Weaknesses.none,
      electric: Weaknesses.nullify,
      wind: Weaknesses.none,
      psychic: Weaknesses.weak,
      nuclear: Weaknesses.none,
      bless: Weaknesses.resist,
      curse: Weaknesses.none
    },
    skills: {
      "Brain Jack": 0,
      Mazionga: 0,
      Megidola: 0,
      Revolution: 45,
      "Elec Break": 46,
      "Tetra Break": 48,
      "Elec Boost": 49
    },
    stats: {
      strength: 26,
      magic: 29,
      endurance: 30,
      agility: 27,
      luck: 24
    },
    trait: "Mouth of Savoring"
  },
  {
    name: "Queen Mab",
    inherits: "almighty",
    item: "Masquerade Ribbon",
    alarm: "Masquerade Ribbon R",
    level: 43,
    arcana: "Magician",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.nullify,
      ice: Weaknesses.none,
      electric: Weaknesses.resist,
      wind: Weaknesses.weak,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.none,
      curse: Weaknesses.none
    },
    skills: {
      Mazionga: 0,
      Makajamaon: 0,
      "Burn Boost": 0,
      Matarunda: 44,
      "Makara Break": 46,
      Agidyne: 47,
      Concentrate: 48
    },
    stats: {
      strength: 23,
      magic: 35,
      endurance: 26,
      agility: 30,
      luck: 22
    },
    trait: "Static Electricity",
    personality: "Gloomy",
    shadow: "Midnight Queen"
  },
  {
    name: "Girimehkala",
    inherits: "ailment",
    item: "Swift Strike",
    alarm: "Deathbound",
    level: 43,
    arcana: "Moon",
    elems: {
      physical: Weaknesses.repel,
      gun: Weaknesses.repel,
      fire: Weaknesses.resist,
      ice: Weaknesses.none,
      electric: Weaknesses.none,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.weak,
      curse: Weaknesses.nullify
    },
    skills: {
      Mudoon: 0,
      Marakunda: 0,
      Deathbound: 0,
      Agidyne: 45,
      "Wage War": 47,
      "Repel Phys": 50
    },
    stats: {
      strength: 32,
      magic: 24,
      endurance: 32,
      agility: 29,
      luck: 19
    },
    trait: "Cursed Bloodline",
    personality: "Gloomy",
    shadow: "Rebellious Elephant"
  },
  {
    name: "Magatsu-Izanagi",
    inherits: "almighty",
    item: "Black Headband",
    alarm: "Black Headband R",
    level: 44,
    arcana: "Tower",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.resist,
      fire: Weaknesses.none,
      ice: Weaknesses.none,
      electric: Weaknesses.none,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.weak,
      bless: Weaknesses.nullify,
      curse: Weaknesses.nullify
    },
    skills: {
      "Magatsu Mandala": 0,
      Megidola: 0,
      "Ghastly Wail": 0,
      Maziodyne: 45,
      Bloodbath: 46,
      "Attack Master": 48,
      "Heat Riser": 50
    },
    stats: {
      strength: 37,
      magic: 35,
      endurance: 32,
      agility: 25,
      luck: 10
    },
    trait: "Hollow Jester",
    dlc: true
  },
  {
    name: "Valkyrie",
    inherits: "phys",
    item: "Rising Slash",
    alarm: "Deadly Fury",
    level: 44,
    arcana: "Strength",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.resist,
      fire: Weaknesses.weak,
      ice: Weaknesses.repel,
      electric: Weaknesses.none,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.nullify,
      curse: Weaknesses.none
    },
    skills: {
      "Rising Slash": 0,
      Counterstrike: 0,
      "Attack Master": 45,
      Deathbound: 46,
      Matarukaja: 47,
      "Dodge Phys": 49
    },
    stats: {
      strength: 33,
      magic: 24,
      endurance: 28,
      agility: 29,
      luck: 25
    },
    trait: "Skillful Combo",
    personality: "Irritable",
    shadow: "Funerary Warrior"
  },
  {
    name: "Ananta",
    inherits: "nuke",
    item: "Spiral Nuclear Ring",
    alarm: "Reactor Ring",
    level: 44,
    arcana: "Councillor",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.none,
      ice: Weaknesses.absorb,
      electric: Weaknesses.weak,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.none,
      curse: Weaknesses.none
    },
    skills: {
      Mafreila: 0,
      "Defense Master": 0,
      "Elec Wall": 0,
      "Abysmal Surge": 46,
      "Growth 2": 47,
      Marakukaja: 48,
      Freidyne: 49,
      "Nuke Boost": 50
    },
    stats: {
      strength: 26,
      magic: 30,
      endurance: 31,
      agility: 27,
      luck: 25
    },
    trait: "Atomic Bloodline"
  },
  {
    name: "Pazuzu",
    inherits: "curse",
    item: "Spiral Curse Ring",
    alarm: "Hex Ring",
    level: 45,
    arcana: "Devil",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.none,
      ice: Weaknesses.none,
      electric: Weaknesses.none,
      wind: Weaknesses.resist,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.weak,
      curse: Weaknesses.nullify
    },
    skills: {
      Maeiga: 0,
      Tentarafoo: 0,
      Mudoon: 0,
      "Ambient Aid": 47,
      "Evil Smile": 48,
      "Stagnant Air": 49,
      Eigaon: 50
    },
    stats: {
      strength: 29,
      magic: 33,
      endurance: 27,
      agility: 26,
      luck: 27
    },
    trait: "Cursed Bloodline"
  },
  {
    name: "Byakko",
    inherits: "ice",
    item: "Spiral Snow Ring",
    alarm: "Blizzard Ring",
    level: 45,
    arcana: "Temperance",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.weak,
      ice: Weaknesses.absorb,
      electric: Weaknesses.none,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.weak,
      bless: Weaknesses.none,
      curse: Weaknesses.resist
    },
    skills: {
      "Swift Strike": 0,
      Mabufula: 0,
      Counterstrike: 0,
      "Ice Boost": 47,
      "Ice Break": 48,
      "Evade Fire": 49,
      "Null Rage": 50,
      Bufudyne: 51
    },
    stats: {
      strength: 35,
      magic: 28,
      endurance: 30,
      agility: 32,
      luck: 17
    },
    trait: "Retaliating Body"
  },
  {
    name: "Athena",
    inherits: "almighty",
    item: "Kugelbein",
    alarm: "Kugelbein R",
    level: 46,
    arcana: "Chariot",
    elems: {
      physical: Weaknesses.resist,
      gun: Weaknesses.nullify,
      fire: Weaknesses.none,
      ice: Weaknesses.none,
      electric: Weaknesses.weak,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.none,
      curse: Weaknesses.none
    },
    skills: {
      "Akasha Arts": 0,
      Marakukaja: 0,
      "Rising Slash": 0,
      Diarahan: 47,
      Matarukaja: 48,
      "Auto-Maraku": 50,
      Samarecarm: 51,
      "Megaton Raid": 52
    },
    stats: {
      strength: 33,
      magic: 27,
      endurance: 29,
      agility: 29,
      luck: 27
    },
    trait: "Grace of the Olive",
    dlc: true
  },
  {
    name: "Fortuna",
    inherits: "wind",
    item: "Lucky Robe",
    alarm: "Super Lucky Robe",
    level: 46,
    arcana: "Fortune",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.nullify,
      ice: Weaknesses.none,
      electric: Weaknesses.weak,
      wind: Weaknesses.nullify,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.none,
      curse: Weaknesses.none
    },
    skills: {
      Magarula: 0,
      Masukukaja: 0,
      Tetraja: 0,
      Garudyne: 47,
      "Touch n' Go": 49,
      "Amrita Drop": 50,
      "Evade Elec": 51
    },
    stats: {
      strength: 23,
      magic: 32,
      endurance: 29,
      agility: 34,
      luck: 27
    },
    trait: "Wind Bloodline"
  },
  {
    name: "Horus",
    inherits: "almighty",
    item: "Hallowed Ring",
    alarm: "Spiral Hallowed Ring",
    level: 47,
    arcana: "Sun",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.weak,
      ice: Weaknesses.none,
      electric: Weaknesses.nullify,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.repel,
      curse: Weaknesses.none
    },
    skills: {
      Megidola: 0,
      Diarama: 0,
      Kougaon: 0,
      "Flash Bomb": 49,
      Masukukaja: 50,
      Hamaon: 51,
      "Hama Boost": 52
    },
    stats: {
      strength: 30,
      magic: 32,
      endurance: 29,
      agility: 35,
      luck: 22
    },
    trait: "Potent Hypnosis"
  },
  {
    name: "Magatsu-Izanagi Picaro",
    inherits: "almighty",
    item: "Heat Riser",
    alarm: "Debilitate",
    level: 48,
    arcana: "Tower",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.resist,
      fire: Weaknesses.none,
      ice: Weaknesses.none,
      electric: Weaknesses.none,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.weak,
      bless: Weaknesses.nullify,
      curse: Weaknesses.nullify
    },
    skills: {
      "Magatsu Mandala": 0,
      Megidola: 0,
      "Ghastly Wail": 0,
      Magarudyne: 49,
      Bloodbath: 50,
      "Speed Master": 52,
      "Heat Riser": 54
    },
    stats: {
      strength: 40,
      magic: 38,
      endurance: 35,
      agility: 27,
      luck: 11
    },
    trait: "Hollow Jester",
    dlc: true
  },
  {
    name: "Rangda",
    inherits: "curse",
    item: "Maeiga",
    alarm: "Eigaon",
    level: 48,
    arcana: "Magician",
    elems: {
      physical: Weaknesses.repel,
      gun: Weaknesses.repel,
      fire: Weaknesses.nullify,
      ice: Weaknesses.none,
      electric: Weaknesses.weak,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.weak,
      curse: Weaknesses.nullify
    },
    skills: {
      "Swift Strike": 0,
      Bloodbath: 0,
      Counterstrike: 0,
      Eigaon: 49,
      Matarunda: 51,
      Mudoon: 53
    },
    stats: {
      strength: 28,
      magic: 34,
      endurance: 30,
      agility: 33,
      luck: 26
    },
    trait: "Cursed Bloodline",
    personality: "Gloomy",
    shadow: "Dancing Witch"
  },
  {
    name: "Narcissus",
    inherits: "ailment",
    item: "Dazzler",
    alarm: "Nocturnal Flash",
    level: 48,
    arcana: "Lovers",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.weak,
      ice: Weaknesses.none,
      electric: Weaknesses.nullify,
      wind: Weaknesses.resist,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.resist,
      curse: Weaknesses.none
    },
    skills: {
      Dazzler: 0,
      Magarula: 0,
      "Energy Drop": 0,
      "Growth 3": 50,
      "Dizzy Boost": 51,
      Mediarama: 52,
      "Ambient Aid": 53
    },
    stats: {
      strength: 27,
      magic: 31,
      endurance: 29,
      agility: 33,
      luck: 31
    },
    trait: "Gluttonmouth",
    personality: "Timid",
    shadow: "Self-Infatuated Star"
  },
  {
    name: "Koumokuten",
    inherits: "phys",
    item: "Regenerate 2",
    alarm: "Regenerate 3",
    level: 49,
    arcana: "Hermit",
    elems: {
      physical: Weaknesses.resist,
      gun: Weaknesses.none,
      fire: Weaknesses.none,
      ice: Weaknesses.weak,
      electric: Weaknesses.none,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.resist,
      curse: Weaknesses.none
    },
    skills: {
      "Assault Dive": 0,
      "Regenerate 2": 0,
      Revolution: 0,
      "Attack Master": 51,
      "Ice Wall": 52,
      "Enduring Soul": 54,
      "Deadly Fury": 55
    },
    stats: {
      strength: 37,
      magic: 29,
      endurance: 34,
      agility: 29,
      luck: 25
    },
    trait: "Gluttonmouth"
  },
  {
    name: "Bugs",
    special: true,
    inherits: "almighty",
    item: "Bear Gloves",
    alarm: "Big Bear Gloves",
    level: 49,
    arcana: "Fool",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.none,
      ice: Weaknesses.none,
      electric: Weaknesses.none,
      wind: Weaknesses.none,
      psychic: Weaknesses.resist,
      nuclear: Weaknesses.weak,
      bless: Weaknesses.none,
      curse: Weaknesses.nullify
    },
    skills: {
      "Miracle Punch": 0,
      Masukunda: 0,
      Psiodyne: 0,
      "Auto-Mataru": 51,
      "Triple Down": 52,
      "Evade Phys": 54,
      "Fast Heal": 55
    },
    stats: {
      strength: 35,
      magic: 33,
      endurance: 30,
      agility: 32,
      luck: 24
    },
    trait: "Potent Hypnosis",
    personality: "Irritable",
    shadow: "Killer Teddy Bear"
  },
  {
    name: "Tsukiyomi",
    inherits: "almighty",
    item: "Black Moon",
    alarm: "Black Moon R",
    level: 50,
    arcana: "Moon",
    elems: {
      physical: Weaknesses.resist,
      gun: Weaknesses.none,
      fire: Weaknesses.none,
      ice: Weaknesses.none,
      electric: Weaknesses.none,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.weak,
      bless: Weaknesses.resist,
      curse: Weaknesses.repel
    },
    skills: {
      "Abyssal Wings": 0,
      "Absorb Curse": 0,
      "Myriad Slashes": 0,
      "Life Drain": 0,
      "Curse Amp": 53,
      "Vorpal Blade": 55,
      "Arms Master": 56
    },
    stats: {
      strength: 38,
      magic: 32,
      endurance: 33,
      agility: 37,
      luck: 17
    },
    trait: "Bolstering Force",
    dlc: true
  },
  {
    name: "Athena Picaro",
    inherits: "almighty",
    item: "Charge",
    alarm: "Concentrate",
    level: 50,
    arcana: "Chariot",
    elems: {
      physical: Weaknesses.resist,
      gun: Weaknesses.nullify,
      fire: Weaknesses.none,
      ice: Weaknesses.none,
      electric: Weaknesses.weak,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.none,
      curse: Weaknesses.none
    },
    skills: {
      "Akasha Arts": 0,
      Matarukaja: 0,
      "Rising Slash": 0,
      Diarahan: 51,
      Marakukaja: 52,
      "Auto-Mataru": 54,
      Samarecarm: 55,
      "Megaton Raid": 56
    },
    stats: {
      strength: 35,
      magic: 30,
      endurance: 31,
      agility: 32,
      luck: 29
    },
    trait: "Grace of the Olive",
    dlc: true
  },
  {
    name: "Sarasvati",
    inherits: "healing",
    item: "Mediarama",
    alarm: "Diarahan",
    level: 50,
    arcana: "Priestess",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.none,
      ice: Weaknesses.nullify,
      electric: Weaknesses.resist,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.weak,
      bless: Weaknesses.none,
      curse: Weaknesses.none
    },
    skills: {
      Mediarama: 0,
      "Ice Wall": 0,
      Tentarafoo: 0,
      "Psy Wall": 51,
      Dekaja: 52,
      Matarunda: 53,
      Diarahan: 54
    },
    stats: {
      strength: 30,
      magic: 35,
      endurance: 32,
      agility: 33,
      luck: 27
    },
    trait: "Relief Bloodline",
    personality: "Timid",
    shadow: "Strumming Veena Player"
  },
  {
    name: "Dakini",
    inherits: "phys",
    item: "Tempest Slash",
    alarm: "Myriad Slashes",
    level: 50,
    arcana: "Empress",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.nullify,
      fire: Weaknesses.resist,
      ice: Weaknesses.none,
      electric: Weaknesses.none,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.none,
      curse: Weaknesses.none
    },
    skills: {
      "Bad Beat": 0,
      "Myriad Slashes": 0,
      "Rising Slash": 0,
      "High Counter": 52,
      Deathbound: 53,
      Rebellion: 54,
      Charge: 55
    },
    stats: {
      strength: 34,
      magic: 32,
      endurance: 34,
      agility: 28,
      luck: 29
    },
    trait: "Skillful Combo",
    personality: "Upbeat",
    shadow: "Blood-thirsty Demoness"
  },
  {
    name: "Crystal Skull",
    rare: true,
    inherits: "almighty",
    item: "Crystal Skull",
    alarm: "Crystal Skull R",
    level: 50,
    arcana: "Fool",
    elems: {
      physical: Weaknesses.resist,
      gun: Weaknesses.resist,
      fire: Weaknesses.none,
      ice: Weaknesses.none,
      electric: Weaknesses.none,
      wind: Weaknesses.weak,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.none,
      curse: Weaknesses.none
    },
    skills: {
      Maragidyne: 0,
      Mabufudyne: 0,
      Magarudyne: 0,
      Maziodyne: 0,
      Mapsiodyne: 0,
      Mafreidyne: 0,
      Makougaon: 0,
      Maeigaon: 0,
      "Foul Stench": 0,
      "Ailment Hunter": 0,
      "Cursed Bloodline": 0
    },
    stats: {
      strength: 50,
      magic: 50,
      endurance: 50,
      agility: 50,
      luck: 50
    },
    trait: "Ultimate Vessel",
    personality: "None",
    shadow: "(Treasure Demon)"
  },
  {
    name: "Seth",
    special: true,
    inherits: "fire",
    item: "Triple Shot Belt",
    alarm: "Special Shot Belt",
    level: 51,
    arcana: "Tower",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.repel,
      ice: Weaknesses.none,
      electric: Weaknesses.none,
      wind: Weaknesses.nullify,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.weak,
      curse: Weaknesses.resist
    },
    skills: {
      "One-shot Kill": 0,
      Agidyne: 0,
      Masukukaja: 0,
      "Gun Amp": 53,
      "Fire Break": 54,
      "Fortify Spirit": 56
    },
    stats: {
      strength: 32,
      magic: 35,
      endurance: 30,
      agility: 35,
      luck: 28
    },
    trait: "Potent Hypnosis"
  },
  {
    name: "Jatayu",
    inherits: "wind",
    item: "Speed Master",
    alarm: "Auto-Masuku",
    level: 51,
    arcana: "Hanged",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.none,
      ice: Weaknesses.resist,
      electric: Weaknesses.none,
      wind: Weaknesses.repel,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.weak,
      bless: Weaknesses.resist,
      curse: Weaknesses.none
    },
    skills: {
      Garudyne: 0,
      Masukukaja: 0,
      "Nocturnal Flash": 0,
      "Dizzy Boost": 52,
      "Wind Amp": 54,
      Magarudyne: 55,
      "Speed Master": 57
    },
    stats: {
      strength: 31,
      magic: 34,
      endurance: 29,
      agility: 36,
      luck: 30
    },
    trait: "Wind Bloodline",
    personality: "Upbeat",
    shadow: "Arrogant Vulture"
  },
  {
    name: "Norn",
    inherits: "almighty",
    item: "Recarm",
    alarm: "Samarecarm",
    level: 52,
    arcana: "Fortune",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.none,
      ice: Weaknesses.none,
      electric: Weaknesses.repel,
      wind: Weaknesses.absorb,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.resist,
      curse: Weaknesses.none
    },
    skills: {
      Ziodyne: 0,
      Garudyne: 0,
      "Nocturnal Flash": 0,
      Diarahan: 54,
      "Amrita Drop": 55,
      Tetraja: 56,
      Samarecarm: 57
    },
    stats: {
      strength: 30,
      magic: 38,
      endurance: 33,
      agility: 34,
      luck: 28
    },
    trait: "Intense Focus",
    personality: "Upbeat",
    shadow: "Final Measerer"
  },
  {
    name: "Mishaguji",
    inherits: "ailment",
    item: "Spiral Karma Ring",
    alarm: "Mystic Ring",
    level: 52,
    arcana: "Hierophant",
    elems: {
      physical: Weaknesses.resist,
      gun: Weaknesses.none,
      fire: Weaknesses.none,
      ice: Weaknesses.weak,
      electric: Weaknesses.nullify,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.none,
      curse: Weaknesses.absorb
    },
    skills: {
      "Regenerate 3": 0,
      "Brain Jack": 0,
      Psiodyne: 0,
      "One-shot Kill": 54,
      Endure: 55,
      Deathbound: 56,
      "Ailment Boost": 57
    },
    stats: {
      strength: 32,
      magic: 32,
      endurance: 32,
      agility: 32,
      luck: 35
    },
    trait: "Ailment Hunter"
  },
  {
    name: "Garuda",
    inherits: "wind",
    item: "Garudyne",
    alarm: "Magarudyne",
    level: 52,
    arcana: "Star",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.none,
      ice: Weaknesses.none,
      electric: Weaknesses.none,
      wind: Weaknesses.resist,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.repel,
      curse: Weaknesses.none
    },
    skills: {
      Garudyne: 0,
      "Mind Slice": 0,
      "Amrita Shower": 53,
      Masukukaja: 54,
      "Evade Elec": 55,
      Magarudyne: 57,
      "Wind Amp": 59
    },
    stats: {
      strength: 30,
      magic: 36,
      endurance: 29,
      agility: 39,
      luck: 29
    },
    trait: "Wind Bloodline",
    personality: "Upbeat",
    shadow: "Raging Bird God"
  },
  {
    name: "Barong",
    inherits: "elec",
    item: "Ziodyne",
    alarm: "Maziodyne",
    level: 52,
    arcana: "Emperor",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.resist,
      fire: Weaknesses.none,
      ice: Weaknesses.none,
      electric: Weaknesses.resist,
      wind: Weaknesses.weak,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.nullify,
      curse: Weaknesses.weak
    },
    skills: {
      Ziodyne: 0,
      "Wage War": 0,
      "Invigorate 2": 0,
      "Elec Break": 54,
      "Null Elec": 55,
      Maziodyne: 57
    },
    stats: {
      strength: 33,
      magic: 35,
      endurance: 33,
      agility: 37,
      luck: 25
    },
    trait: "Blessed Bloodline",
    personality: "Upbeat",
    shadow: "Dancing Lion"
  },
  {
    name: "Skadi",
    inherits: "ice",
    item: "Snow Queen's Whip",
    alarm: "Snow Queen's Whip II",
    level: 53,
    arcana: "Priestess",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.none,
      ice: Weaknesses.repel,
      electric: Weaknesses.none,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.none,
      curse: Weaknesses.nullify
    },
    skills: {
      "Deadly Fury": 0,
      "Evil Smile": 0,
      "Fear Boost": 0,
      "Ghastly Wail": 54,
      Mabufudyne: 56,
      Maeigaon: 57,
      "Spirit Drain": 58
    },
    stats: {
      strength: 33,
      magic: 39,
      endurance: 32,
      agility: 34,
      luck: 28
    },
    trait: "Bloodstained Eyes",
    personality: "Timid",
    shadow: "Quaking Lady of Shadow"
  },
  {
    name: "Ganesha",
    inherits: "ailment",
    item: "Rebellion",
    alarm: "Revolution",
    level: 53,
    arcana: "Sun",
    elems: {
      physical: Weaknesses.resist,
      gun: Weaknesses.resist,
      fire: Weaknesses.none,
      ice: Weaknesses.none,
      electric: Weaknesses.none,
      wind: Weaknesses.absorb,
      psychic: Weaknesses.weak,
      nuclear: Weaknesses.none,
      bless: Weaknesses.none,
      curse: Weaknesses.none
    },
    skills: {
      "Miracle Punch": 0,
      "Tempest Slash": 0,
      Rebellion: 0,
      Tetraja: 55,
      "Resist Psy": 56,
      Masukunda: 57,
      Charge: 60
    },
    stats: {
      strength: 39,
      magic: 31,
      endurance: 37,
      agility: 33,
      luck: 26
    },
    trait: "Gluttonmouth",
    personality: "Upbeat",
    shadow: "Auspicious Pachyderm"
  },
  {
    name: "Pale Rider",
    inherits: "curse",
    item: "Hex Ring",
    alarm: "Spiral Hex Ring",
    level: 54,
    arcana: "Death",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.none,
      ice: Weaknesses.none,
      electric: Weaknesses.none,
      wind: Weaknesses.resist,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.weak,
      curse: Weaknesses.repel
    },
    skills: {
      "Abysmal Surge": 0,
      Eigaon: 0,
      "Brain Shake": 0,
      "Curse Boost": 55,
      Megidola: 56,
      "Evade Bless": 58,
      Deathbound: 59
    },
    stats: {
      strength: 32,
      magic: 37,
      endurance: 33,
      agility: 40,
      luck: 27
    },
    trait: "Foul Stench"
  },
  {
    name: "Okuninushi",
    inherits: "psy",
    item: "Official's Robe",
    alarm: "Official's Robe R",
    level: 54,
    arcana: "Faith",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.none,
      ice: Weaknesses.none,
      electric: Weaknesses.repel,
      wind: Weaknesses.weak,
      psychic: Weaknesses.nullify,
      nuclear: Weaknesses.weak,
      bless: Weaknesses.none,
      curse: Weaknesses.none
    },
    skills: {
      Mapsio: 0,
      "Myriad Slashes": 0,
      Matarukaja: 0,
      "Psy Boost": 55,
      "Psy Break": 56,
      "Evade Nuke": 57,
      "Heat Wave": 59
    },
    stats: {
      strength: 39,
      magic: 35,
      endurance: 33,
      agility: 32,
      luck: 30
    },
    trait: "Psychic Bloodline"
  },
  {
    name: "Tsukiyomi Picaro",
    inherits: "almighty",
    item: "Spell Master",
    alarm: "Arms Master",
    level: 55,
    arcana: "Moon",
    elems: {
      physical: Weaknesses.resist,
      gun: Weaknesses.none,
      fire: Weaknesses.none,
      ice: Weaknesses.none,
      electric: Weaknesses.none,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.weak,
      bless: Weaknesses.resist,
      curse: Weaknesses.repel
    },
    skills: {
      "Abyssal Wings": 0,
      "Absorb Curse": 0,
      "Myriad Slashes": 0,
      "Spirit Drain": 0,
      "Curse Amp": 58,
      "Vorpal Blade": 60,
      "Spell Master": 61
    },
    stats: {
      strength: 41,
      magic: 35,
      endurance: 36,
      agility: 40,
      luck: 20
    },
    trait: "Bolstering Force",
    dlc: true
  },
  {
    name: "Raja Naga",
    inherits: "elec",
    item: "Thunder Ring",
    alarm: "Spiral Thunder Ring",
    level: 55,
    arcana: "Temperance",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.none,
      ice: Weaknesses.none,
      electric: Weaknesses.nullify,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.none,
      curse: Weaknesses.none
    },
    skills: {
      Ziodyne: 0,
      "Elec Break": 0,
      Tentarafoo: 0,
      "Shock Boost": 57,
      Makarakarn: 58,
      Maziodyne: 59,
      "Evade Wind": 60
    },
    stats: {
      strength: 33,
      magic: 37,
      endurance: 36,
      agility: 35,
      luck: 31
    },
    trait: "Electric Bloodline"
  },
  {
    name: "Cerberus",
    inherits: "fire",
    item: "Megaton Raid",
    alarm: "God's Hand",
    level: 55,
    arcana: "Chariot",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.absorb,
      ice: Weaknesses.weak,
      electric: Weaknesses.none,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.resist,
      bless: Weaknesses.none,
      curse: Weaknesses.none
    },
    skills: {
      Agidyne: 0,
      "Megaton Raid": 0,
      Rebellion: 56,
      "High Counter": 57,
      Maragidyne: 58,
      "Enduring Soul": 60
    },
    stats: {
      strength: 39,
      magic: 35,
      endurance: 32,
      agility: 39,
      luck: 27
    },
    trait: "Heated Bloodline",
    personality: "Irritable",
    shadow: "Guard Dog of Hades"
  },
  {
    name: "Asterius",
    inherits: "almighty",
    item: "Blazing Horns",
    alarm: "Inferno Horns",
    level: 56,
    arcana: "Fortune",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.resist,
      ice: Weaknesses.weak,
      electric: Weaknesses.none,
      wind: Weaknesses.none,
      psychic: Weaknesses.resist,
      nuclear: Weaknesses.none,
      bless: Weaknesses.none,
      curse: Weaknesses.nullify
    },
    skills: {
      Titanomachia: 0,
      Maragidyne: 0,
      "Burn Boost": 0,
      "Auto-Mataru": 57,
      "Fire Amp": 59,
      Tetrakarn: 60,
      Gigantomachia: 62
    },
    stats: {
      strength: 43,
      magic: 43,
      endurance: 32,
      agility: 32,
      luck: 25
    },
    trait: "Frenzied Bull",
    dlc: true
  },
  {
    name: "Titania",
    inherits: "nuke",
    item: "Freidyne",
    alarm: "Mafreidyne",
    level: 56,
    arcana: "Empress",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.none,
      ice: Weaknesses.none,
      electric: Weaknesses.none,
      wind: Weaknesses.none,
      psychic: Weaknesses.weak,
      nuclear: Weaknesses.resist,
      bless: Weaknesses.resist,
      curse: Weaknesses.resist
    },
    skills: {
      Freidyne: 0,
      Ziodyne: 0,
      Lullaby: 0,
      Concentrate: 59,
      "Nuke Amp": 60,
      Mediarahan: 61
    },
    stats: {
      strength: 32,
      magic: 40,
      endurance: 35,
      agility: 38,
      luck: 30
    },
    trait: "Foul Stench",
    personality: "Timid",
    shadow: "Scandalous Queen"
  },
  {
    name: "Parvati",
    inherits: "psy",
    item: "Null Ice",
    alarm: "Repel Ice",
    level: 56,
    arcana: "Lovers",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.none,
      ice: Weaknesses.repel,
      electric: Weaknesses.none,
      wind: Weaknesses.none,
      psychic: Weaknesses.resist,
      nuclear: Weaknesses.none,
      bless: Weaknesses.resist,
      curse: Weaknesses.weak
    },
    skills: {
      Diarama: 0,
      Psiodyne: 0,
      "Psy Break": 0,
      "Energy Shower": 57,
      Diarahan: 58,
      Mapsiodyne: 59,
      "Null Ice": 61
    },
    stats: {
      strength: 33,
      magic: 39,
      endurance: 33,
      agility: 39,
      luck: 31
    },
    trait: "Skillful Technique",
    personality: "Timid",
    shadow: "Destructive Beauty"
  },
  {
    name: "Yatagarasu",
    inherits: "fire",
    item: "Black Wing Robe",
    alarm: "Black Wing Robe R",
    level: 57,
    arcana: "Councillor",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.none,
      ice: Weaknesses.none,
      electric: Weaknesses.none,
      wind: Weaknesses.resist,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.nullify,
      curse: Weaknesses.weak
    },
    skills: {
      Agidyne: 0,
      "Makara Break": 0,
      Dekunda: 0,
      Mediarahan: 59,
      "Last Stand": 60,
      "Wind Break": 61,
      "Null Wind": 64
    },
    stats: {
      strength: 35,
      magic: 41,
      endurance: 30,
      agility: 40,
      luck: 32
    },
    trait: "Potent Hypnosis"
  },
  {
    name: "Melchizedek",
    inherits: "bless",
    item: "Hamaon",
    alarm: "Mahamaon",
    level: 58,
    arcana: "Justice",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.none,
      ice: Weaknesses.none,
      electric: Weaknesses.none,
      wind: Weaknesses.weak,
      psychic: Weaknesses.resist,
      nuclear: Weaknesses.none,
      bless: Weaknesses.absorb,
      curse: Weaknesses.nullify
    },
    skills: {
      "Megaton Raid": 0,
      Hamaon: 0,
      "Hama Boost": 59,
      Revolution: 60,
      Mahamaon: 62,
      Matarukaja: 63,
      "God's Hand": 65
    },
    stats: {
      strength: 37,
      magic: 32,
      endurance: 40,
      agility: 39,
      luck: 33
    },
    trait: "Deathly Illness",
    personality: "Irritable",
    shadow: "Pagan Savior"
  },
  {
    name: "Baphomet",
    inherits: "almighty",
    item: "Bufudyne",
    alarm: "Mabufudyne",
    level: 58,
    arcana: "Devil",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.resist,
      ice: Weaknesses.none,
      electric: Weaknesses.none,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.weak,
      curse: Weaknesses.nullify
    },
    skills: {
      Agidyne: 0,
      "Evade Fire": 0,
      "Burn Boost": 0,
      Bufudyne: 59,
      Ziodyne: 61,
      "Shock Boost": 62,
      "Freeze Boost": 63
    },
    stats: {
      strength: 34,
      magic: 42,
      endurance: 36,
      agility: 38,
      luck: 31
    },
    trait: "Thermal Conduct",
    personality: "Timid",
    shadow: "Heretic Goat"
  },
  {
    name: "Trumpeter",
    special: true,
    inherits: "almighty",
    item: "Reactor Ring",
    alarm: "Spiral Reactor Ring",
    level: 59,
    arcana: "Judgement",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.none,
      ice: Weaknesses.absorb,
      electric: Weaknesses.repel,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.repel,
      curse: Weaknesses.nullify
    },
    skills: {
      Mafreidyne: 0,
      "Abysmal Surge": 0,
      "Brain Buster": 0,
      "Fortify Spirit": 61,
      "Gun Amp": 62,
      "Life Aid": 63,
      Debilitate: 65
    },
    stats: {
      strength: 33,
      magic: 42,
      endurance: 40,
      agility: 38,
      luck: 31
    },
    trait: "Relentless"
  },
  {
    name: "Black Rider",
    inherits: "curse",
    item: "Megidola",
    alarm: "Megidolaon",
    level: 59,
    arcana: "Tower",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.weak,
      ice: Weaknesses.absorb,
      electric: Weaknesses.none,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.resist,
      curse: Weaknesses.resist
    },
    skills: {
      Mamudoon: 0,
      "Flash Bomb": 0,
      Maeigaon: 0,
      "Ambient Aid": 60,
      Bloodbath: 61,
      "Ghastly Wail": 63,
      Megidola: 64
    },
    stats: {
      strength: 36,
      magic: 42,
      endurance: 34,
      agility: 42,
      luck: 30
    },
    trait: "Gloomy Child"
  },
  {
    name: "Orichalcum",
    rare: true,
    inherits: "almighty",
    item: "Orichalcum",
    alarm: "Orichalcum R",
    level: 60,
    arcana: "Faith",
    elems: {
      physical: Weaknesses.resist,
      gun: Weaknesses.resist,
      fire: Weaknesses.none,
      ice: Weaknesses.none,
      electric: Weaknesses.none,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.weak,
      curse: Weaknesses.none
    },
    skills: {
      Inferno: 0,
      "Diamond Dust": 0,
      "Panta Rhei": 0,
      "Thunder Reign": 0,
      "Psycho Force": 0,
      "Atomic Flare": 0,
      "Divine Judgement": 0,
      "Demonic Decree": 0,
      Immunity: 0,
      "Mouth of Savoring": 0,
      "Blessed Bloodline": 0
    },
    stats: {
      strength: 60,
      magic: 60,
      endurance: 60,
      agility: 60,
      luck: 60
    },
    trait: "Ultimate Vessel",
    personality: "None",
    shadow: "(Treasure Demon)"
  },
  {
    name: "Moloch",
    inherits: "fire",
    item: "Inferno Ring",
    alarm: "Spiral Inferno Ring",
    level: 60,
    arcana: "Hanged",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.absorb,
      ice: Weaknesses.weak,
      electric: Weaknesses.resist,
      wind: Weaknesses.resist,
      psychic: Weaknesses.absorb,
      nuclear: Weaknesses.none,
      bless: Weaknesses.none,
      curse: Weaknesses.nullify
    },
    skills: {
      Agidyne: 0,
      "Stagnant Air": 0,
      "Evil Smile": 0,
      Maragidyne: 62,
      "Ghastly Wail": 63,
      "Absorb Fire": 64,
      "Fire Amp": 65
    },
    stats: {
      strength: 32,
      magic: 45,
      endurance: 42,
      agility: 31,
      luck: 37
    },
    trait: "Immunity",
    personality: "Upbeat",
    shadow: "Sacrificial Pyrekeeper"
  },
  {
    name: "Lilith",
    inherits: "almighty",
    item: "Null Nuke",
    alarm: "Repel Nuke",
    level: 60,
    arcana: "Moon",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.weak,
      ice: Weaknesses.repel,
      electric: Weaknesses.none,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.repel,
      bless: Weaknesses.none,
      curse: Weaknesses.nullify
    },
    skills: {
      Mabufudyne: 0,
      Makarakarn: 0,
      Freidyne: 0,
      Mafreidyne: 62,
      "Spirit Drain": 63,
      "Freeze Boost": 64,
      "Nuke Amp": 65
    },
    stats: {
      strength: 33,
      magic: 43,
      endurance: 37,
      agility: 39,
      luck: 35
    },
    trait: "Mighty Gaze",
    personality: "Timid",
    shadow: "Harlot of Desire"
  },
  {
    name: "King Frost",
    inherits: "ice",
    item: "King Frost Cape",
    alarm: "King Frost Cape EX",
    level: 61,
    arcana: "Emperor",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.none,
      ice: Weaknesses.absorb,
      electric: Weaknesses.none,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.nullify,
      curse: Weaknesses.none
    },
    skills: {
      Bufudyne: 0,
      "Ice Break": 0,
      "Megaton Raid": 0,
      "Freeze Boost": 62,
      Mabufudyne: 64,
      Concentrate: 65,
      "Ice Amp": 67
    },
    stats: {
      strength: 40,
      magic: 44,
      endurance: 43,
      agility: 29,
      luck: 34
    },
    trait: "Frigid Bloodline",
    personality: "Upbeat",
    shadow: "Monarch of Snow"
  },
  {
    name: "Asterius Picaro",
    inherits: "almighty",
    item: "Gigantomachia",
    alarm: "Agneyastra",
    level: 62,
    arcana: "Fortune",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.resist,
      ice: Weaknesses.weak,
      electric: Weaknesses.none,
      wind: Weaknesses.none,
      psychic: Weaknesses.resist,
      nuclear: Weaknesses.none,
      bless: Weaknesses.none,
      curse: Weaknesses.nullify
    },
    skills: {
      Titanomachia: 0,
      Maragidyne: 0,
      "Burn Boost": 0,
      "Auto-Masuku": 63,
      "Fire Amp": 65,
      Makarakarn: 66,
      Gigantomachia: 68
    },
    stats: {
      strength: 46,
      magic: 46,
      endurance: 36,
      agility: 36,
      luck: 29
    },
    trait: "Frenzied Bull",
    dlc: true
  },
  {
    name: "Seiryu",
    inherits: "ice",
    item: "Blizzard Ring",
    alarm: "Spiral Blizzard Ring",
    level: 62,
    arcana: "Councillor",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.none,
      ice: Weaknesses.resist,
      electric: Weaknesses.none,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.weak,
      bless: Weaknesses.none,
      curse: Weaknesses.none
    },
    skills: {
      Bufudyne: 0,
      Diarahan: 0,
      Marakukaja: 0,
      "Repel Nuke": 63,
      Mabufudyne: 65,
      "Amrita Drop": 66,
      Makarakarn: 67
    },
    stats: {
      strength: 38,
      magic: 41,
      endurance: 43,
      agility: 37,
      luck: 34
    },
    trait: "Relentless"
  },
  {
    name: "Chernobog",
    inherits: "ailment",
    item: "Mudoon",
    alarm: "Mamudoon",
    level: 62,
    arcana: "Death",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.resist,
      fire: Weaknesses.weak,
      ice: Weaknesses.absorb,
      electric: Weaknesses.nullify,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.weak,
      curse: Weaknesses.absorb
    },
    skills: {
      Mudoon: 0,
      Bloodbath: 0,
      "Myriad Slashes": 0,
      "Foul Breath": 63,
      Deathbound: 64,
      "Fear Boost": 66,
      "Brave Blade": 67
    },
    stats: {
      strength: 40,
      magic: 37,
      endurance: 39,
      agility: 38,
      luck: 39
    },
    trait: "Crisis Control",
    personality: "Gloomy",
    shadow: "The Black Avenger"
  },
  {
    name: "Kali",
    inherits: "fire",
    item: "Null Psy",
    alarm: "Repel Psy",
    level: 63,
    arcana: "Empress",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.repel,
      fire: Weaknesses.nullify,
      ice: Weaknesses.none,
      electric: Weaknesses.none,
      wind: Weaknesses.none,
      psychic: Weaknesses.repel,
      nuclear: Weaknesses.none,
      bless: Weaknesses.none,
      curse: Weaknesses.resist
    },
    skills: {
      "Heat Wave": 0,
      Bloodbath: 0,
      "Brave Blade": 0,
      Charge: 65,
      "High Counter": 66,
      "Repel Psy": 67,
      "Vorpal Blade": 68
    },
    stats: {
      strength: 43,
      magic: 41,
      endurance: 39,
      agility: 39,
      luck: 34
    },
    trait: "Relentless",
    personality: "Irritable",
    shadow: "The Blackened Fury"
  },
  {
    name: "Forneus",
    inherits: "psy",
    item: "Psiodyne",
    alarm: "Mapsiodyne",
    level: 63,
    arcana: "Magician",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.none,
      ice: Weaknesses.absorb,
      electric: Weaknesses.weak,
      wind: Weaknesses.none,
      psychic: Weaknesses.nullify,
      nuclear: Weaknesses.none,
      bless: Weaknesses.none,
      curse: Weaknesses.none
    },
    skills: {
      Psiodyne: 0,
      Masukunda: 0,
      "Brain Jack": 0,
      "Survival Trick": 65,
      "Stagnant Air": 66,
      Mapsiodyne: 67,
      "Evade Psy": 68
    },
    stats: {
      strength: 41,
      magic: 39,
      endurance: 40,
      agility: 42,
      luck: 34
    },
    trait: "Bloodstained Eyes",
    personality: "Timid",
    shadow: "Rhetorician of the Sea"
  },
  {
    name: "Yamata-no-Orochi",
    inherits: "ice",
    item: "Triple Down",
    alarm: "One-shot Kill",
    level: 64,
    arcana: "Judgement",
    elems: {
      physical: Weaknesses.resist,
      gun: Weaknesses.none,
      fire: Weaknesses.none,
      ice: Weaknesses.absorb,
      electric: Weaknesses.none,
      wind: Weaknesses.resist,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.none,
      curse: Weaknesses.resist
    },
    skills: {
      "One-shot Kill": 0,
      Mabufudyne: 0,
      "Freeze Boost": 0,
      "Absorb Ice": 66,
      "Ice Amp": 67,
      "Diamond Dust": 69
    },
    stats: {
      strength: 44,
      magic: 38,
      endurance: 48,
      agility: 36,
      luck: 33
    },
    trait: "Cold-Blooded",
    personality: "Gloomy",
    shadow: "Drunken Serpents"
  },
  {
    name: "Thor",
    inherits: "elec",
    item: "Mjolnir",
    alarm: "Imprisoned Mjolnir",
    level: 64,
    arcana: "Chariot",
    elems: {
      physical: Weaknesses.resist,
      gun: Weaknesses.none,
      fire: Weaknesses.none,
      ice: Weaknesses.none,
      electric: Weaknesses.nullify,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.resist,
      curse: Weaknesses.resist
    },
    skills: {
      Ziodyne: 0,
      "Megaton Raid": 0,
      "High Counter": 0,
      "Elec Amp": 66,
      Maziodyne: 67,
      "Heat Up": 68,
      "Wild Thunder": 71
    },
    stats: {
      strength: 44,
      magic: 39,
      endurance: 43,
      agility: 38,
      luck: 35
    },
    trait: "Intense Focus",
    personality: "Upbeat",
    shadow: "Thunder Emperor"
  },
  {
    name: "Hanuman",
    inherits: "phys",
    item: "Ruyi Jingu Bang",
    alarm: "Fine Ruyi Jingu Bang",
    level: 64,
    arcana: "Strength",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.resist,
      fire: Weaknesses.none,
      ice: Weaknesses.weak,
      electric: Weaknesses.none,
      wind: Weaknesses.none,
      psychic: Weaknesses.resist,
      nuclear: Weaknesses.none,
      bless: Weaknesses.resist,
      curse: Weaknesses.none
    },
    skills: {
      "Tempest Slash": 0,
      Matarunda: 0,
      Revolution: 0,
      Deathbound: 65,
      "Tetra Break": 67,
      "Regenerate 3": 69
    },
    stats: {
      strength: 43,
      magic: 38,
      endurance: 40,
      agility: 40,
      luck: 38
    },
    trait: "Potent Hypnosis",
    personality: "Upbeat",
    shadow: "Nimble Monkey King"
  },
  {
    name: "Thanatos",
    inherits: "almighty",
    item: "Darkness Ring",
    alarm: "Darkness Ring R",
    level: 65,
    arcana: "Death",
    elems: {
      physical: Weaknesses.resist,
      gun: Weaknesses.none,
      fire: Weaknesses.none,
      ice: Weaknesses.none,
      electric: Weaknesses.none,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.weak,
      curse: Weaknesses.repel
    },
    skills: {
      "Door of Hades": 0,
      Maeigaon: 0,
      Mamudoon: 0,
      "Curse Amp": 66,
      "One-shot Kill": 68,
      "Fortified Moxy": 69,
      "Enduring Soul": 70
    },
    stats: {
      strength: 43,
      magic: 49,
      endurance: 41,
      agility: 38,
      luck: 31
    },
    trait: "Iron Heart",
    dlc: true
  },
  {
    name: "Atavaka",
    inherits: "phys",
    item: "Brave Blade",
    alarm: "Sword Dance",
    level: 65,
    arcana: "Faith",
    elems: {
      physical: Weaknesses.resist,
      gun: Weaknesses.nullify,
      fire: Weaknesses.repel,
      ice: Weaknesses.none,
      electric: Weaknesses.none,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.none,
      curse: Weaknesses.resist
    },
    skills: {
      Maragidyne: 0,
      "Oni Kagura": 0,
      Mediarahan: 0,
      "High Counter": 67,
      Samarecarm: 68,
      "Brave Blade": 70,
      "Attack Master": 71
    },
    stats: {
      strength: 51,
      magic: 36,
      endurance: 43,
      agility: 38,
      luck: 34
    },
    trait: "Savior Bloodline",
    personality: "Irritable",
    shadow: "Infuriated Wisdom King"
  },
  {
    name: "Quetzalcoatl",
    inherits: "wind",
    item: "Magarudyne",
    alarm: "Panta Rhei",
    level: 66,
    arcana: "Sun",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.nullify,
      ice: Weaknesses.none,
      electric: Weaknesses.none,
      wind: Weaknesses.resist,
      psychic: Weaknesses.weak,
      nuclear: Weaknesses.none,
      bless: Weaknesses.none,
      curse: Weaknesses.none
    },
    skills: {
      Magarula: 0,
      Garudyne: 0,
      "Memory Blow": 0,
      "Growth 3": 68,
      "Regenerate 3": 69,
      Magarudyne: 70,
      "Wind Amp": 71
    },
    stats: {
      strength: 41,
      magic: 46,
      endurance: 41,
      agility: 43,
      luck: 34
    },
    trait: "Wind Bloodline"
  },
  {
    name: "Oberon",
    inherits: "elec",
    item: "Heat Wave",
    alarm: "Vorpal Blade",
    level: 66,
    arcana: "Emperor",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.none,
      ice: Weaknesses.none,
      electric: Weaknesses.resist,
      wind: Weaknesses.none,
      psychic: Weaknesses.nullify,
      nuclear: Weaknesses.weak,
      bless: Weaknesses.none,
      curse: Weaknesses.none
    },
    skills: {
      Ziodyne: 0,
      "Nocturnal Flash": 0,
      "Heat Wave": 0,
      Matarukaja: 68,
      "Myriad Slashes": 69,
      "Evade Nuke": 70,
      Samarecarm: 71,
      "Elec Amp": 72
    },
    stats: {
      strength: 40,
      magic: 45,
      endurance: 42,
      agility: 43,
      luck: 35
    },
    trait: "Static Electricity",
    personality: "Irritable",
    shadow: "Unfaithful Dream-King"
  },
  {
    name: "Black Frost",
    special: true,
    inherits: "almighty",
    item: "Naraka Whip",
    alarm: "Dainaraka Whip",
    level: 67,
    arcana: "Fool",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.repel,
      ice: Weaknesses.absorb,
      electric: Weaknesses.none,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.nullify,
      bless: Weaknesses.none,
      curse: Weaknesses.repel
    },
    skills: {
      Mabufudyne: 0,
      "One-shot Kill": 0,
      "Miracle Punch": 0,
      "Ice Amp": 68,
      "Freeze Boost": 70,
      "Repel Fire": 71,
      "Diamond Dust": 72
    },
    stats: {
      strength: 44,
      magic: 46,
      endurance: 41,
      agility: 42,
      luck: 35
    },
    trait: "Frigid Bloodline"
  },
  {
    name: "Bishamonten",
    inherits: "nuke",
    item: "Mafreidyne",
    alarm: "Atomic Flare",
    level: 67,
    arcana: "Hierophant",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.absorb,
      ice: Weaknesses.weak,
      electric: Weaknesses.none,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.resist,
      curse: Weaknesses.resist
    },
    skills: {
      Freidyne: 0,
      Diarahan: 0,
      "Deadly Fury": 0,
      Mafreidyne: 69,
      "Nuke Amp": 71,
      Tetrakarn: 72,
      "God's Hand": 73
    },
    stats: {
      strength: 51,
      magic: 37,
      endurance: 42,
      agility: 44,
      luck: 34
    },
    trait: "Savior Bloodline"
  },
  {
    name: "Vasuki",
    special: true,
    inherits: "ailment",
    item: "Kuzuryu Gouhou",
    alarm: "Kuzuryu Gouhou EX",
    level: 68,
    arcana: "Star",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.none,
      ice: Weaknesses.nullify,
      electric: Weaknesses.nullify,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.none,
      curse: Weaknesses.weak
    },
    skills: {
      Mahamaon: 0,
      "Brain Jack": 0,
      "Triple Down": 0,
      "Trigger Happy": 70,
      Makarakarn: 71,
      "Brainwash Boost": 72,
      "Null Curse": 73
    },
    stats: {
      strength: 42,
      magic: 45,
      endurance: 44,
      agility: 42,
      luck: 38
    },
    trait: "Foul Stench"
  },
  {
    name: "Dominion",
    inherits: "bless",
    item: "Makougaon",
    alarm: "Divine Judgement",
    level: 68,
    arcana: "Justice",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.none,
      ice: Weaknesses.none,
      electric: Weaknesses.weak,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.repel,
      bless: Weaknesses.nullify,
      curse: Weaknesses.resist
    },
    skills: {
      Makajamaon: 0,
      Hamaon: 0,
      Kougaon: 0,
      Makougaon: 70,
      "Hama Boost": 71,
      Mahamaon: 72,
      "Evade Curse": 74
    },
    stats: {
      strength: 42,
      magic: 45,
      endurance: 43,
      agility: 44,
      luck: 37
    },
    trait: "Blessed Bloodline",
    personality: "Timid",
    shadow: "Merciless Inquisitor"
  },
  {
    name: "Thanatos Picaro",
    inherits: "almighty",
    item: "Maeigaon",
    alarm: "Demonic Decree",
    level: 69,
    arcana: "Death",
    elems: {
      physical: Weaknesses.resist,
      gun: Weaknesses.none,
      fire: Weaknesses.none,
      ice: Weaknesses.none,
      electric: Weaknesses.none,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.weak,
      curse: Weaknesses.repel
    },
    skills: {
      "Door of Hades": 0,
      Maeigaon: 0,
      Mamudoon: 0,
      "Mudo Boost": 70,
      "One-shot Kill": 72,
      "Adverse Resolve": 73,
      "Enduring Soul": 74
    },
    stats: {
      strength: 45,
      magic: 51,
      endurance: 43,
      agility: 40,
      luck: 35
    },
    trait: "Iron Heart",
    dlc: true
  },
  {
    name: "Lakshmi",
    inherits: "healing",
    item: "Amrita Charm",
    alarm: "Spiral Amrita Charm",
    level: 69,
    arcana: "Fortune",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.weak,
      ice: Weaknesses.resist,
      electric: Weaknesses.none,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.resist,
      curse: Weaknesses.none
    },
    skills: {
      Lullaby: 0,
      Diarahan: 0,
      Bufudyne: 0,
      Mediarahan: 70,
      "Climate Decorum": 71,
      "Amrita Shower": 72,
      "Life Aid": 74
    },
    stats: {
      strength: 39,
      magic: 49,
      endurance: 41,
      agility: 47,
      luck: 38
    },
    trait: "Wealth of Lotus",
    max: true
  },
  {
    name: "Loa",
    inherits: "curse",
    item: "Ominous Words",
    alarm: "Abysmal Surge",
    level: 70,
    arcana: "Hermit",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.resist,
      ice: Weaknesses.none,
      electric: Weaknesses.nullify,
      wind: Weaknesses.none,
      psychic: Weaknesses.weak,
      nuclear: Weaknesses.resist,
      bless: Weaknesses.weak,
      curse: Weaknesses.none
    },
    skills: {
      Mamudoon: 0,
      "Abysmal Surge": 0,
      "Life Drain": 0,
      Maeigaon: 72,
      "Absorb Curse": 73,
      "Spirit Drain": 74,
      "Fortify Spirit": 75
    },
    stats: {
      strength: 42,
      magic: 47,
      endurance: 43,
      agility: 46,
      luck: 39
    },
    trait: "Draining Mouth",
    note: "Only available after 1/12",
    personality: "Upbeat",
    shadow: "Dream-Dwelling Skull"
  },
  {
    name: "Byakhee",
    inherits: "fire",
    item: "Null Wind",
    alarm: "Repel Wind",
    level: 70,
    arcana: "Moon",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.nullify,
      ice: Weaknesses.weak,
      electric: Weaknesses.none,
      wind: Weaknesses.nullify,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.weak,
      bless: Weaknesses.none,
      curse: Weaknesses.nullify
    },
    skills: {
      Agidyne: 0,
      "Foul Breath": 0,
      "Death Scythe": 0,
      Maragidyne: 72,
      "Ailment Boost": 73,
      "Fire Break": 74,
      "Heat Riser": 75
    },
    stats: {
      strength: 42,
      magic: 49,
      endurance: 43,
      agility: 51,
      luck: 32
    },
    trait: "Heated Bloodline",
    note: "Only available after 1/12",
    personality: "Gloomy",
    shadow: "Evil Synthetic Organism"
  },
  {
    name: "Dionysus",
    inherits: "ailment",
    item: "Maziodyne",
    alarm: "Thunder Reign",
    level: 71,
    arcana: "Councillor",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.none,
      ice: Weaknesses.none,
      electric: Weaknesses.repel,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.nullify,
      curse: Weaknesses.nullify
    },
    skills: {
      Maziodyne: 0,
      Ziodyne: 0,
      "Brain Jack": 0,
      Thermopylae: 72,
      "Ailment Boost": 73,
      "Amrita Shower": 75,
      Debilitate: 76
    },
    stats: {
      strength: 42,
      magic: 48,
      endurance: 44,
      agility: 42,
      luck: 44
    },
    trait: "Pinch Anchor",
    personality: "Upbeat",
    shadow: "Hedonistic Braggart"
  },
  {
    name: "Throne",
    inherits: "bless",
    item: "Spiral Divine Ring",
    alarm: "Judgement Cross",
    level: 72,
    arcana: "Justice",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.nullify,
      ice: Weaknesses.none,
      electric: Weaknesses.none,
      wind: Weaknesses.nullify,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.weak,
      bless: Weaknesses.repel,
      curse: Weaknesses.none
    },
    skills: {
      Agidyne: 0,
      Hamaon: 0,
      "Burn Boost": 0,
      "Fire Amp": 74,
      Makougaon: 75,
      "Invigorate 3": 76,
      Inferno: 78
    },
    stats: {
      strength: 42,
      magic: 49,
      endurance: 43,
      agility: 46,
      luck: 43
    },
    trait: "Crisis Control",
    personality: "Gloomy",
    shadow: "Fire Assassin"
  },
  {
    name: "Mot",
    inherits: "ailment",
    item: "Null Elec",
    alarm: "Repel Elec",
    level: 72,
    arcana: "Death",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.resist,
      fire: Weaknesses.none,
      ice: Weaknesses.none,
      electric: Weaknesses.absorb,
      wind: Weaknesses.weak,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.none,
      curse: Weaknesses.repel
    },
    skills: {
      Megidola: 0,
      Matarukaja: 0,
      Maeigaon: 0,
      Concentrate: 74,
      Megidolaon: 76,
      "Repel Elec": 77
    },
    stats: {
      strength: 43,
      magic: 51,
      endurance: 48,
      agility: 42,
      luck: 39
    },
    trait: "Mighty Gaze",
    personality: "Gloomy",
    shadow: "Coffin-borne God"
  },
  {
    name: "Mara",
    inherits: "psy",
    item: "Mapsiodyne",
    alarm: "Psycho Force",
    level: 73,
    arcana: "Tower",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.nullify,
      fire: Weaknesses.absorb,
      ice: Weaknesses.none,
      electric: Weaknesses.none,
      wind: Weaknesses.none,
      psychic: Weaknesses.repel,
      nuclear: Weaknesses.none,
      bless: Weaknesses.resist,
      curse: Weaknesses.nullify
    },
    skills: {
      Mapsiodyne: 0,
      "One-shot Kill": 0,
      "Tetra Break": 0,
      Charge: 74,
      "Brain Buster": 76,
      "Psy Amp": 77,
      "Psycho Force": 78
    },
    stats: {
      strength: 51,
      magic: 43,
      endurance: 43,
      agility: 45,
      luck: 44
    },
    trait: "Mighty Gaze",
    personality: "Timid",
    shadow: "Throbbing King of Desire"
  },
  {
    name: "Macabre",
    inherits: "curse",
    item: "Bloodbath",
    alarm: "Death Scythe",
    level: 73,
    arcana: "Hanged",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.none,
      ice: Weaknesses.none,
      electric: Weaknesses.resist,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.weak,
      curse: Weaknesses.nullify
    },
    skills: {
      "Death Scythe": 0,
      "Evil Smile": 0,
      Mamudoon: 0,
      "Auto-Masuku": 74,
      "Ghastly Wail": 75,
      "Myriad Slashes": 76,
      "Ali Dance": 78
    },
    stats: {
      strength: 48,
      magic: 49,
      endurance: 42,
      agility: 48,
      luck: 39
    },
    trait: "Ailment Hunter",
    note: "Only available after 1/12",
    personality: "Gloomy",
    shadow: "Dancer of Death"
  },
  {
    name: "Nebiros",
    inherits: "curse",
    item: "Marin Karin",
    alarm: "Brain Jack",
    level: 74,
    arcana: "Devil",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.none,
      ice: Weaknesses.none,
      electric: Weaknesses.none,
      wind: Weaknesses.none,
      psychic: Weaknesses.nullify,
      nuclear: Weaknesses.none,
      bless: Weaknesses.weak,
      curse: Weaknesses.resist
    },
    skills: {
      "Marin Karin": 0,
      Mapsiodyne: 0,
      Marakukaja: 0,
      "Brain Jack": 76,
      "Brainwash Boost": 77,
      Megidolaon: 78,
      "Null Bless": 80
    },
    stats: {
      strength: 45,
      magic: 52,
      endurance: 44,
      agility: 46,
      luck: 42
    },
    trait: "Psychic Bloodline",
    personality: "Timid",
    shadow: "Wandering Reviver"
  },
  {
    name: "Chimera",
    inherits: "phys",
    item: "Null Fire",
    alarm: "Absorb Fire",
    level: 74,
    arcana: "Strength",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.absorb,
      ice: Weaknesses.nullify,
      electric: Weaknesses.none,
      wind: Weaknesses.weak,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.none,
      curse: Weaknesses.weak
    },
    skills: {
      Maragidyne: 0,
      "Heat Wave": 0,
      Bufudyne: 0,
      Marakunda: 76,
      "Fire Amp": 77,
      Mabufudyne: 78,
      "Ice Amp": 79
    },
    stats: {
      strength: 51,
      magic: 40,
      endurance: 42,
      agility: 48,
      luck: 48
    },
    trait: "Foul Stench",
    note: "Only available after 1/12",
    personality: "Upbeat",
    shadow: "Deformed Lion God"
  },
  {
    name: "Sandalphon",
    inherits: "bless",
    item: "Sword of Sinai",
    alarm: "Sword of Sinai II",
    level: 75,
    arcana: "Moon",
    elems: {
      physical: Weaknesses.resist,
      gun: Weaknesses.resist,
      fire: Weaknesses.none,
      ice: Weaknesses.none,
      electric: Weaknesses.none,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.repel,
      curse: Weaknesses.nullify
    },
    skills: {
      Mahamaon: 0,
      Samarecarm: 0,
      "Amrita Shower": 0,
      "Angelic Grace": 77,
      "Repel Curse": 78,
      "Sword Dance": 79,
      Megidolaon: 81
    },
    stats: {
      strength: 46,
      magic: 51,
      endurance: 49,
      agility: 48,
      luck: 38
    },
    trait: "Omen",
    max: true
  },
  {
    name: "Abaddon",
    inherits: "curse",
    item: "Megaton Raid Belt",
    alarm: "God's Hand Belt",
    level: 75,
    arcana: "Judgement",
    elems: {
      physical: Weaknesses.absorb,
      gun: Weaknesses.absorb,
      fire: Weaknesses.none,
      ice: Weaknesses.none,
      electric: Weaknesses.none,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.resist,
      curse: Weaknesses.absorb
    },
    skills: {
      Mabufudyne: 0,
      "Megaton Raid": 0,
      "Enduring Soul": 0,
      "Flash Bomb": 78,
      "Ailment Boost": 79,
      "Absorb Phys": 80,
      Gigantomachia: 81
    },
    stats: {
      strength: 51,
      magic: 42,
      endurance: 58,
      agility: 38,
      luck: 43
    },
    trait: "Mouth of Savoring",
    personality: "Irritable",
    shadow: "Abyssal King of Avarice"
  },
  {
    name: "Raoul",
    inherits: "almighty",
    item: "Picaresque Hat",
    alarm: "Picaresque Crown",
    level: 76,
    arcana: "Fool",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.none,
      ice: Weaknesses.none,
      electric: Weaknesses.none,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.weak,
      curse: Weaknesses.nullify
    },
    skills: {
      "Phantom Show": 0,
      Eigaon: 0,
      "Ali Dance": 0,
      Maeigaon: 78,
      "Heat Riser": 79,
      "Curse Amp": 80,
      Concentrate: 81,
      "Life Aid": 82
    },
    stats: {
      strength: 47,
      magic: 49,
      endurance: 43,
      agility: 54,
      luck: 42
    },
    trait: "Hazy Presence",
    dlc: true
  },
  {
    name: "Kohryu",
    special: true,
    inherits: "psy",
    item: "Spiral Mystic Ring",
    alarm: "Dragon's Heart",
    level: 76,
    arcana: "Hierophant",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.none,
      ice: Weaknesses.none,
      electric: Weaknesses.repel,
      wind: Weaknesses.none,
      psychic: Weaknesses.nullify,
      nuclear: Weaknesses.weak,
      bless: Weaknesses.nullify,
      curse: Weaknesses.none
    },
    skills: {
      "Psycho Force": 0,
      Mediarahan: 0,
      Mapsiodyne: 0,
      "Life Aid": 78,
      Concentrate: 79,
      "Psy Amp": 80,
      "Spell Master": 82
    },
    stats: {
      strength: 43,
      magic: 51,
      endurance: 50,
      agility: 53,
      luck: 38
    },
    trait: "Universal Law",
    max: true
  },
  {
    name: "Cu Chulainn",
    inherits: "almighty",
    item: "One-shot Kill",
    alarm: "Riot Gun",
    level: 76,
    arcana: "Faith",
    elems: {
      physical: Weaknesses.resist,
      gun: Weaknesses.resist,
      fire: Weaknesses.none,
      ice: Weaknesses.none,
      electric: Weaknesses.weak,
      wind: Weaknesses.repel,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.nullify,
      curse: Weaknesses.none
    },
    skills: {
      "High Counter": 0,
      "One-shot Kill": 0,
      Rebellion: 0,
      Matarukaja: 78,
      "Brave Blade": 79,
      Charge: 80,
      "Apt Pupil": 81
    },
    stats: {
      strength: 55,
      magic: 44,
      endurance: 46,
      agility: 48,
      luck: 42
    },
    trait: "Potent Hypnosis",
    personality: "Irritable",
    shadow: "Brave Spear-Bearer"
  },
  {
    name: "Asura",
    special: true,
    inherits: "nuke",
    item: "Vajra",
    alarm: "Unparalleled Vajra",
    level: 76,
    arcana: "Sun",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.nullify,
      ice: Weaknesses.none,
      electric: Weaknesses.none,
      wind: Weaknesses.none,
      psychic: Weaknesses.weak,
      nuclear: Weaknesses.repel,
      bless: Weaknesses.none,
      curse: Weaknesses.none
    },
    skills: {
      "Atomic Flare": 0,
      Mahamaon: 0,
      Marakukaja: 0,
      "Auto-Mataru": 78,
      Mafreidyne: 79,
      "High Counter": 80,
      "Unshaken Will": 81
    },
    stats: {
      strength: 52,
      magic: 48,
      endurance: 51,
      agility: 49,
      luck: 35
    },
    trait: "Atomic Hellscape",
    max: true
  },
  {
    name: "Scathach",
    inherits: "wind",
    item: "Makarakarn",
    alarm: "Tetrakarn",
    level: 77,
    arcana: "Priestess",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.none,
      ice: Weaknesses.nullify,
      electric: Weaknesses.repel,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.none,
      curse: Weaknesses.nullify
    },
    skills: {
      Mabufudyne: 0,
      "Myriad Slashes": 0,
      Makarakarn: 0,
      "Freeze Boost": 78,
      Matarukaja: 79,
      "Vorpal Blade": 81,
      "Attack Master": 82
    },
    stats: {
      strength: 48,
      magic: 52,
      endurance: 46,
      agility: 48,
      luck: 44
    },
    trait: "Skillful Technique",
    personality: "Upbeat",
    shadow: "The Shadowed One"
  },
  {
    name: "Gabriel",
    inherits: "almighty",
    item: "Spiral Blizzard Ring",
    alarm: "Diamond Dust Lily",
    level: 77,
    arcana: "Temperance",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.none,
      ice: Weaknesses.none,
      electric: Weaknesses.none,
      wind: Weaknesses.none,
      psychic: Weaknesses.nullify,
      nuclear: Weaknesses.none,
      bless: Weaknesses.absorb,
      curse: Weaknesses.none
    },
    skills: {
      Maziodyne: 0,
      Mabufudyne: 0,
      "Divine Judgement": 78,
      "Ali Dance": 79,
      "Evade Curse": 80,
      "Touch n' Go": 81,
      "Ice Amp": 82,
      Salvation: 83
    },
    stats: {
      strength: 43,
      magic: 51,
      endurance: 48,
      agility: 54,
      luck: 42
    },
    trait: "Relentless"
  },
  {
    name: "Raphael",
    inherits: "almighty",
    item: "Null Bless",
    alarm: "Repel Bless",
    level: 78,
    arcana: "Lovers",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.none,
      ice: Weaknesses.absorb,
      electric: Weaknesses.none,
      wind: Weaknesses.none,
      psychic: Weaknesses.nullify,
      nuclear: Weaknesses.none,
      bless: Weaknesses.nullify,
      curse: Weaknesses.none
    },
    skills: {
      "Sword Dance": 0,
      Charge: 0,
      Dekaja: 0,
      "Heat Riser": 80,
      "Growth 3": 81,
      "Adverse Resolve": 82,
      "Arms Master": 83
    },
    stats: {
      strength: 57,
      magic: 45,
      endurance: 49,
      agility: 55,
      luck: 35
    },
    trait: "Pinch Anchor"
  },
  {
    name: "Izanagi-no-Okami",
    special: true,
    inherits: "almighty",
    item: "Shiny Belt",
    alarm: "Shiny Belt R",
    level: 80,
    arcana: "World",
    elems: {
      physical: Weaknesses.resist,
      gun: Weaknesses.resist,
      fire: Weaknesses.resist,
      ice: Weaknesses.resist,
      electric: Weaknesses.resist,
      wind: Weaknesses.resist,
      psychic: Weaknesses.resist,
      nuclear: Weaknesses.resist,
      bless: Weaknesses.none,
      curse: Weaknesses.none
    },
    skills: {
      "Myriad Truths": 0,
      "Victory Cry": 0,
      "Angelic Grace": 0,
      Concentrate: 81,
      "Heat Riser": 82,
      "Heat Up": 83,
      Salvation: 84,
      "Almighty Boost": 85
    },
    stats: {
      strength: 52,
      magic: 56,
      endurance: 46,
      agility: 48,
      luck: 45
    },
    trait: "Country Maker",
    dlc: true
  },
  {
    name: "Zaou-Gongen",
    inherits: "fire",
    item: "God's Hand Belt",
    alarm: "Gigantomachia Belt",
    level: 80,
    arcana: "Strength",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.repel,
      ice: Weaknesses.none,
      electric: Weaknesses.weak,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.nullify,
      curse: Weaknesses.nullify
    },
    skills: {
      Maragidyne: 0,
      "Abysmal Surge": 0,
      "God's Hand": 0,
      "Evade Phys": 82,
      "Enduring Soul": 83,
      "Gun Amp": 84,
      "Blazing Hell": 86
    },
    stats: {
      strength: 57,
      magic: 45,
      endurance: 50,
      agility: 56,
      luck: 39
    },
    trait: "Undying Fury",
    max: true
  },
  {
    name: "Vohu Manah",
    inherits: "almighty",
    item: "Doomsday",
    alarm: "Ancient Day",
    level: 80,
    arcana: "Councillor",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.none,
      ice: Weaknesses.none,
      electric: Weaknesses.resist,
      wind: Weaknesses.weak,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.absorb,
      curse: Weaknesses.nullify
    },
    skills: {
      "Divine Judgement": 0,
      "Bless Amp": 0,
      Makougaon: 0,
      "Absorb Bless": 82,
      "Fortify Spirit": 83,
      "Invigorate 3": 84,
      Salvation: 85
    },
    stats: {
      strength: 46,
      magic: 59,
      endurance: 45,
      agility: 56,
      luck: 41
    },
    trait: "Positive Thoughts",
    max: true
  },
  {
    name: "Sraosha",
    special: true,
    inherits: "bless",
    item: "Archangel Bra",
    alarm: "High Archangel Bra",
    level: 80,
    arcana: "Star",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.none,
      ice: Weaknesses.none,
      electric: Weaknesses.absorb,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.repel,
      curse: Weaknesses.weak
    },
    skills: {
      Kougaon: 0,
      Mahamaon: 0,
      "Hama Boost": 0,
      Makougaon: 81,
      "Angelic Grace": 83,
      "Amrita Shower": 84,
      Debilitate: 85
    },
    stats: {
      strength: 47,
      magic: 56,
      endurance: 45,
      agility: 56,
      luck: 43
    },
    trait: "Blessed Bloodline"
  },
  {
    name: "Messiah",
    inherits: "almighty",
    item: "Sirius Armor",
    alarm: "Sirius Armor EX",
    level: 81,
    arcana: "Judgement",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.resist,
      ice: Weaknesses.resist,
      electric: Weaknesses.resist,
      wind: Weaknesses.resist,
      psychic: Weaknesses.resist,
      nuclear: Weaknesses.resist,
      bless: Weaknesses.repel,
      curse: Weaknesses.weak
    },
    skills: {
      Oratorio: 0,
      Megidolaon: 0,
      "God's Hand": 0,
      "Regenerate 3": 82,
      "Enduring Soul": 83,
      "Invigorate 3": 84,
      "Absorb Phys": 85,
      "Almighty Boost": 87
    },
    stats: {
      strength: 50,
      magic: 50,
      endurance: 50,
      agility: 50,
      luck: 50
    },
    trait: "Hallowed Spirit",
    dlc: true
  },
  {
    name: "Uriel",
    inherits: "almighty",
    item: "Heaven's Gate",
    alarm: "Providence",
    level: 81,
    arcana: "Justice",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.nullify,
      ice: Weaknesses.none,
      electric: Weaknesses.none,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.absorb,
      bless: Weaknesses.repel,
      curse: Weaknesses.none
    },
    skills: {
      Deathbound: 0,
      "Myriad Slashes": 0,
      Bloodbath: 0,
      "Repel Nuke": 83,
      Megidolaon: 84,
      "Angelic Grace": 85,
      "Spell Master": 86
    },
    stats: {
      strength: 50,
      magic: 54,
      endurance: 49,
      agility: 55,
      luck: 42
    },
    trait: "Mouth of Savoring"
  },
  {
    name: "Alilat",
    inherits: "ice",
    item: "Mabufudyne",
    alarm: "Diamond Dust",
    level: 81,
    arcana: "Empress",
    elems: {
      physical: Weaknesses.repel,
      gun: Weaknesses.repel,
      fire: Weaknesses.weak,
      ice: Weaknesses.absorb,
      electric: Weaknesses.none,
      wind: Weaknesses.none,
      psychic: Weaknesses.nullify,
      nuclear: Weaknesses.none,
      bless: Weaknesses.none,
      curse: Weaknesses.weak
    },
    skills: {
      "Diamond Dust": 0,
      Marakukaja: 0,
      "Freeze Boost": 0,
      Mabufudyne: 82,
      Concentrate: 83,
      "Auto-Maraku": 85,
      "Ice Amp": 86,
      "Ice Age": 87
    },
    stats: {
      strength: 45,
      magic: 54,
      endurance: 57,
      agility: 49,
      luck: 45
    },
    trait: "Frigid Bloodline",
    note: "Only available after 1/12",
    personality: "Timid",
    shadow: "Decadent False God"
  },
  {
    name: "Shiva",
    special: true,
    inherits: "psy",
    item: "Megido Fire",
    alarm: "Megido Blaster",
    level: 82,
    arcana: "Judgement",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.none,
      ice: Weaknesses.nullify,
      electric: Weaknesses.repel,
      wind: Weaknesses.none,
      psychic: Weaknesses.absorb,
      nuclear: Weaknesses.weak,
      bless: Weaknesses.nullify,
      curse: Weaknesses.nullify
    },
    skills: {
      "Psycho Force": 0,
      Maziodyne: 0,
      "Enduring Soul": 0,
      "Riot Gun": 85,
      Megidolaon: 86,
      "Auto-Mataru": 87,
      "Psycho Blast": 88
    },
    stats: {
      strength: 55,
      magic: 54,
      endurance: 53,
      agility: 53,
      luck: 38
    },
    trait: "Psychic Bloodline"
  },
  {
    name: "Belial",
    inherits: "curse",
    item: "Mamudoon",
    alarm: "Demonic Decree",
    level: 82,
    arcana: "Devil",
    elems: {
      physical: Weaknesses.nullify,
      gun: Weaknesses.none,
      fire: Weaknesses.none,
      ice: Weaknesses.resist,
      electric: Weaknesses.none,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.none,
      curse: Weaknesses.nullify
    },
    skills: {
      Eigaon: 0,
      Bloodbath: 0,
      "Curse Amp": 0,
      Maeigaon: 84,
      "Fear Boost": 85,
      Mamudoon: 86,
      "Demonic Decree": 88
    },
    stats: {
      strength: 52,
      magic: 53,
      endurance: 51,
      agility: 48,
      luck: 49
    },
    trait: "Bloodstained Eyes"
  },
  {
    name: "Baal",
    inherits: "wind",
    item: "Yagrush",
    alarm: "Yagrush EX",
    level: 82,
    arcana: "Emperor",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.resist,
      ice: Weaknesses.none,
      electric: Weaknesses.none,
      wind: Weaknesses.absorb,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.resist,
      curse: Weaknesses.none
    },
    skills: {
      "Panta Rhei": 0,
      Revolution: 0,
      Matarukaja: 0,
      Ayamur: 84,
      Tetraja: 85,
      Charge: 86,
      "Vacuum Wave": 87
    },
    stats: {
      strength: 54,
      magic: 58,
      endurance: 53,
      agility: 47,
      luck: 41
    },
    trait: "Wind Bloodline",
    personality: "Upbeat",
    shadow: "Reviled Dictator"
  },
  {
    name: "Attis",
    inherits: "fire",
    item: "Null Curse",
    alarm: "Absorb Curse",
    level: 82,
    arcana: "Hanged",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.nullify,
      ice: Weaknesses.none,
      electric: Weaknesses.none,
      wind: Weaknesses.repel,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.none,
      curse: Weaknesses.weak
    },
    skills: {
      Maragidyne: 0,
      Salvation: 0,
      Thermopylae: 0,
      "Enduring Soul": 84,
      Samarecarm: 85,
      "Absorb Curse": 86,
      "Blazing Hell": 88
    },
    stats: {
      strength: 49,
      magic: 50,
      endurance: 48,
      agility: 54,
      luck: 52
    },
    trait: "Vitality of the Tree",
    max: true
  },
  {
    name: "Vishnu",
    inherits: "almighty",
    item: "Sudarshana",
    alarm: "Sudarshana EX",
    level: 83,
    arcana: "Fool",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.weak,
      ice: Weaknesses.absorb,
      electric: Weaknesses.none,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.nullify,
      curse: Weaknesses.nullify
    },
    skills: {
      Megidolaon: 0,
      Magarudyne: 0,
      "Ali Dance": 0,
      "Vacuum Wave": 85,
      Concentrate: 86,
      "Repel Fire": 87,
      "Wind Amp": 88,
      "Riot Gun": 90
    },
    stats: {
      strength: 56,
      magic: 51,
      endurance: 49,
      agility: 57,
      luck: 43
    },
    trait: "Vahana's Wings",
    max: true
  },
  {
    name: "Surt",
    inherits: "fire",
    item: "Maragidyne",
    alarm: "Inferno",
    level: 83,
    arcana: "Magician",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.resist,
      fire: Weaknesses.absorb,
      ice: Weaknesses.weak,
      electric: Weaknesses.nullify,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.resist,
      bless: Weaknesses.none,
      curse: Weaknesses.none
    },
    skills: {
      "Blazing Hell": 0,
      "Attack Master": 0,
      "Brave Blade": 0,
      "Fire Amp": 84,
      Marakunda: 85,
      "Evade Ice": 86,
      Gigantomachia: 88
    },
    stats: {
      strength: 55,
      magic: 54,
      endurance: 51,
      agility: 50,
      luck: 46
    },
    trait: "Heated Bloodline"
  },
  {
    name: "Cybele",
    inherits: "healing",
    item: "Sabazios",
    alarm: "Gordios",
    level: 83,
    arcana: "Priestess",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.resist,
      ice: Weaknesses.none,
      electric: Weaknesses.weak,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.nullify,
      curse: Weaknesses.none
    },
    skills: {
      Samarecarm: 0,
      Mediarahan: 0,
      Makougaon: 0,
      "Amrita Shower": 84,
      "Auto-Maraku": 86,
      "Absorb Bless": 87,
      Salvation: 89
    },
    stats: {
      strength: 44,
      magic: 57,
      endurance: 49,
      agility: 51,
      luck: 55
    },
    trait: "Linked Bloodline",
    max: true
  },
  {
    name: "Alice",
    special: true,
    inherits: "curse",
    item: "Spiral Hell Ring",
    alarm: "Cursed Ribbon",
    level: 83,
    arcana: "Death",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.none,
      ice: Weaknesses.none,
      electric: Weaknesses.none,
      wind: Weaknesses.none,
      psychic: Weaknesses.resist,
      nuclear: Weaknesses.resist,
      bless: Weaknesses.weak,
      curse: Weaknesses.repel
    },
    skills: {
      Mamudoon: 0,
      "Mudo Boost": 0,
      Maeigaon: 0,
      "Die For Me!": 85,
      Megidolaon: 86,
      Concentrate: 87,
      "Survival Trick": 88
    },
    stats: {
      strength: 45,
      magic: 61,
      endurance: 49,
      agility: 54,
      luck: 47
    },
    trait: "Just Die",
    max: true
  },
  {
    name: "Siegfried",
    inherits: "phys",
    item: "Vorpal Blade Belt",
    alarm: "Brave Blade Belt",
    level: 84,
    arcana: "Faith",
    elems: {
      physical: Weaknesses.nullify,
      gun: Weaknesses.resist,
      fire: Weaknesses.none,
      ice: Weaknesses.resist,
      electric: Weaknesses.nullify,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.weak,
      bless: Weaknesses.none,
      curse: Weaknesses.none
    },
    skills: {
      "Brave Blade": 0,
      Masukukaja: 0,
      "High Counter": 0,
      Charge: 85,
      "Apt Pupil": 87,
      "Vorpal Blade": 89,
      "Auto-Mataru": 90
    },
    stats: {
      strength: 61,
      magic: 43,
      endurance: 55,
      agility: 55,
      luck: 45
    },
    trait: "Retaliating Body"
  },
  {
    name: "Odin",
    inherits: "elec",
    item: "Wild Hunt",
    alarm: "Gungnir",
    level: 84,
    arcana: "Emperor",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.none,
      ice: Weaknesses.none,
      electric: Weaknesses.nullify,
      wind: Weaknesses.absorb,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.repel,
      curse: Weaknesses.repel
    },
    skills: {
      "Thunder Reign": 0,
      "Myriad Slashes": 0,
      Marakukaja: 0,
      "Wild Thunder": 86,
      Concentrate: 87,
      "Fast Heal": 88,
      "Elec Amp": 89
    },
    stats: {
      strength: 53,
      magic: 58,
      endurance: 54,
      agility: 52,
      luck: 42
    },
    trait: "Bargain Bolts",
    max: true
  },
  {
    name: "Hastur",
    inherits: "wind",
    item: "Spiral Gale Ring",
    alarm: "Storm Sculpture",
    level: 84,
    arcana: "Star",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.resist,
      ice: Weaknesses.none,
      electric: Weaknesses.none,
      wind: Weaknesses.absorb,
      psychic: Weaknesses.nullify,
      nuclear: Weaknesses.none,
      bless: Weaknesses.none,
      curse: Weaknesses.nullify
    },
    skills: {
      "Vacuum Wave": 0,
      "Nocturnal Flash": 0,
      Debilitate: 0,
      "Abyssal Eye": 86,
      "Wind Amp": 87,
      "Spirit Drain": 88,
      "Repel Wind": 89
    },
    stats: {
      strength: 51,
      magic: 59,
      endurance: 52,
      agility: 56,
      luck: 41
    },
    trait: "Mouth of Savoring",
    note: "Only available after 1/12",
    personality: "Irritable",
    shadow: "Warped Abyss"
  },
  {
    name: "Ardha",
    special: true,
    inherits: "almighty",
    item: "Sahasrara",
    alarm: "Sahasrara EX",
    level: 84,
    arcana: "Temperance",
    elems: {
      physical: Weaknesses.resist,
      gun: Weaknesses.none,
      fire: Weaknesses.none,
      ice: Weaknesses.nullify,
      electric: Weaknesses.nullify,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.none,
      curse: Weaknesses.none
    },
    skills: {
      "God's Hand": 0,
      "Cosmic Flare": 0,
      "Invigorate 3": 0,
      Agneyastra: 87,
      "Auto-Masuku": 88,
      "Fortified Moxy": 89,
      Salvation: 90
    },
    stats: {
      strength: 54,
      magic: 56,
      endurance: 55,
      agility: 54,
      luck: 40
    },
    trait: "Naranari",
    max: true
  },
  {
    name: "Mother Harlot",
    inherits: "ice",
    item: "Claiomh Solais",
    alarm: "Claiomh Solais R",
    level: 85,
    arcana: "Empress",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.none,
      ice: Weaknesses.none,
      electric: Weaknesses.repel,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.weak,
      curse: Weaknesses.nullify
    },
    skills: {
      Mabufudyne: 0,
      Mamudoon: 0,
      "Mudo Boost": 0,
      "Ice Age": 86,
      "Ice Amp": 87,
      "Repel Bless": 88,
      Debilitate: 90
    },
    stats: {
      strength: 55,
      magic: 54,
      endurance: 48,
      agility: 50,
      luck: 55
    },
    trait: "Ghost Nest",
    max: true
  },
  {
    name: "Ishtar",
    inherits: "healing",
    item: "Spiral Thunder Ring",
    alarm: "Goddess Horn",
    level: 85,
    arcana: "Lovers",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.none,
      ice: Weaknesses.none,
      electric: Weaknesses.nullify,
      wind: Weaknesses.weak,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.none,
      curse: Weaknesses.none
    },
    skills: {
      Mediarahan: 0,
      Samarecarm: 0,
      "Absorb Wind": 0,
      "Insta-Heal": 87,
      Maziodyne: 88,
      "Spell Master": 89,
      Salvation: 90
    },
    stats: {
      strength: 48,
      magic: 59,
      endurance: 49,
      agility: 58,
      luck: 48
    },
    trait: "Grace of Mother",
    max: true
  },
  {
    name: "Futsunushi",
    inherits: "phys",
    item: "Hinokagutsuchi",
    alarm: "Hinokagutsuchi II",
    level: 86,
    arcana: "Magician",
    elems: {
      physical: Weaknesses.resist,
      gun: Weaknesses.none,
      fire: Weaknesses.none,
      ice: Weaknesses.none,
      electric: Weaknesses.none,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.weak,
      bless: Weaknesses.none,
      curse: Weaknesses.none
    },
    skills: {
      "Myriad Slashes": 0,
      Matarukaja: 0,
      "Apt Pupil": 0,
      Charge: 88,
      "Brave Blade": 89,
      "Regenerate 3": 90,
      "Firm Stance": 91,
      "Auto-Maraku": 92
    },
    stats: {
      strength: 60,
      magic: 58,
      endurance: 55,
      agility: 52,
      luck: 40
    },
    trait: "Will of the Sword",
    max: true
  },
  {
    name: "Fafnir",
    inherits: "nuke",
    item: "Spiral Reactor Ring",
    alarm: "Fire Dragon Horn",
    level: 86,
    arcana: "Hermit",
    elems: {
      physical: Weaknesses.repel,
      gun: Weaknesses.repel,
      fire: Weaknesses.absorb,
      ice: Weaknesses.none,
      electric: Weaknesses.resist,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.absorb,
      bless: Weaknesses.none,
      curse: Weaknesses.none
    },
    skills: {
      Gigantomachia: 0,
      "Evil Smile": 0,
      "Cosmic Flare": 0,
      "Atomic Flare": 88,
      "Nuke Amp": 90,
      Debilitate: 91,
      "Absorb Nuke": 92
    },
    stats: {
      strength: 61,
      magic: 55,
      endurance: 58,
      agility: 48,
      luck: 43
    },
    trait: "Ailment Hunter",
    note: "Only available after 1/12",
    personality: "Irritable",
    shadow: "Evil Voracious Dragon"
  },
  {
    name: "Yoshitsune",
    special: true,
    inherits: "phys",
    item: "Usumidori",
    alarm: "Usumidori R",
    level: 87,
    arcana: "Tower",
    elems: {
      physical: Weaknesses.nullify,
      gun: Weaknesses.none,
      fire: Weaknesses.resist,
      ice: Weaknesses.none,
      electric: Weaknesses.repel,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.repel,
      curse: Weaknesses.none
    },
    skills: {
      "Brave Blade": 0,
      Charge: 0,
      Ziodyne: 0,
      "Last Stand": 89,
      "Fast Heal": 90,
      "Elec Amp": 92,
      "Hassou Tobi": 94
    },
    stats: {
      strength: 63,
      magic: 52,
      endurance: 50,
      agility: 54,
      luck: 49
    },
    trait: "Retaliating Body"
  },
  {
    name: "Michael",
    special: true,
    inherits: "almighty",
    item: "Judge of Hell",
    alarm: "Judge End",
    level: 87,
    arcana: "Judgement",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.resist,
      fire: Weaknesses.none,
      ice: Weaknesses.none,
      electric: Weaknesses.none,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.repel,
      curse: Weaknesses.nullify
    },
    skills: {
      "Divine Judgement": 0,
      Mabufudyne: 0,
      Debilitate: 0,
      "Sword Dance": 89,
      Mahamaon: 90,
      Megidolaon: 91,
      "Cosmic Flare": 92
    },
    stats: {
      strength: 57,
      magic: 54,
      endurance: 55,
      agility: 56,
      luck: 46
    },
    trait: "Potent Hypnosis"
  },
  {
    name: "Beelzebub",
    inherits: "curse",
    item: "Fleurs du Mal",
    alarm: "Fleurs du Mal R",
    level: 87,
    arcana: "Devil",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.absorb,
      ice: Weaknesses.none,
      electric: Weaknesses.none,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.weak,
      curse: Weaknesses.repel
    },
    skills: {
      Maeigaon: 0,
      Mamudoon: 0,
      "Evil Smile": 0,
      "Curse Amp": 88,
      Concentrate: 89,
      "Demonic Decree": 90,
      "Repel Ice": 91,
      Megidolaon: 92
    },
    stats: {
      strength: 55,
      magic: 61,
      endurance: 54,
      agility: 56,
      luck: 42
    },
    trait: "Mother's Lament",
    max: true
  },
  {
    name: "Chi You",
    special: true,
    inherits: "psy",
    item: "Repel Phys",
    alarm: "Absorb Phys",
    level: 88,
    arcana: "Chariot",
    elems: {
      physical: Weaknesses.resist,
      gun: Weaknesses.resist,
      fire: Weaknesses.none,
      ice: Weaknesses.none,
      electric: Weaknesses.none,
      wind: Weaknesses.none,
      psychic: Weaknesses.nullify,
      nuclear: Weaknesses.weak,
      bless: Weaknesses.none,
      curse: Weaknesses.none
    },
    skills: {
      "Psycho Force": 0,
      "Repel Phys": 0,
      Gigantomachia: 0,
      "Fortify Spirit": 90,
      "Psycho Blast": 91,
      "Absorb Psy": 92,
      Concentrate: 94
    },
    stats: {
      strength: 56,
      magic: 57,
      endurance: 54,
      agility: 53,
      luck: 51
    },
    trait: "Chi You's Blessing"
  },
  {
    name: "Izanagi-no-Okami Picaro",
    special: true,
    inherits: "almighty",
    item: "Mediarahan",
    alarm: "Salvation",
    level: 89,
    arcana: "World",
    elems: {
      physical: Weaknesses.resist,
      gun: Weaknesses.resist,
      fire: Weaknesses.resist,
      ice: Weaknesses.resist,
      electric: Weaknesses.resist,
      wind: Weaknesses.resist,
      psychic: Weaknesses.resist,
      nuclear: Weaknesses.resist,
      bless: Weaknesses.none,
      curse: Weaknesses.none
    },
    skills: {
      "Myriad Truths": 0,
      "Victory Cry": 0,
      "Angelic Grace": 0,
      Concentrate: 90,
      Debilitate: 91,
      "Enduring Soul": 92,
      Salvation: 93,
      "Almighty Boost": 94
    },
    stats: {
      strength: 54,
      magic: 61,
      endurance: 56,
      agility: 58,
      luck: 45
    },
    trait: "Country Maker",
    dlc: true
  },
  {
    name: "Ongyo-Ki",
    special: true,
    inherits: "phys",
    item: "Myriad Slashes Belt",
    alarm: "Sword Dance Belt",
    level: 89,
    arcana: "Hermit",
    elems: {
      physical: Weaknesses.resist,
      gun: Weaknesses.none,
      fire: Weaknesses.none,
      ice: Weaknesses.none,
      electric: Weaknesses.none,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.repel,
      curse: Weaknesses.repel
    },
    skills: {
      "Myriad Slashes": 0,
      Makajamaon: 0,
      "Last Stand": 0,
      "Arms Master": 91,
      "Regenerate 3": 92,
      "Firm Stance": 93,
      Agneyastra: 95
    },
    stats: {
      strength: 56,
      magic: 53,
      endurance: 57,
      agility: 59,
      luck: 49
    },
    trait: "Demon's Bite",
    max: true
  },
  {
    name: "Metatron",
    special: true,
    inherits: "bless",
    item: "Nataraja",
    alarm: "Nataraja EX",
    level: 89,
    arcana: "Justice",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.none,
      ice: Weaknesses.none,
      electric: Weaknesses.weak,
      wind: Weaknesses.repel,
      psychic: Weaknesses.absorb,
      nuclear: Weaknesses.absorb,
      bless: Weaknesses.none,
      curse: Weaknesses.weak
    },
    skills: {
      Mahamaon: 0,
      "Sword Dance": 0,
      Makougaon: 0,
      Megidolaon: 91,
      "Hama Boost": 92,
      Concentrate: 93,
      "Bless Amp": 94,
      "Divine Judgement": 95
    },
    stats: {
      strength: 54,
      magic: 61,
      endurance: 60,
      agility: 57,
      luck: 42
    },
    trait: "Martyr's Gift"
  },
  {
    name: "Messiah Picaro",
    inherits: "almighty",
    item: "Insta-Heal",
    alarm: "Firm Stance",
    level: 90,
    arcana: "Judgement",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.resist,
      ice: Weaknesses.resist,
      electric: Weaknesses.resist,
      wind: Weaknesses.resist,
      psychic: Weaknesses.resist,
      nuclear: Weaknesses.resist,
      bless: Weaknesses.repel,
      curse: Weaknesses.weak
    },
    skills: {
      Oratorio: 0,
      Megidolaon: 0,
      Agneyastra: 0,
      "Insta-Heal": 91,
      "Enduring Soul": 92,
      "Life Aid": 93,
      "Firm Stance": 94,
      "Almighty Boost": 96
    },
    stats: {
      strength: 56,
      magic: 56,
      endurance: 55,
      agility: 55,
      luck: 55
    },
    trait: "Hallowed Spirit",
    dlc: true
  },
  {
    name: "Mada",
    inherits: "fire",
    item: "Spiral Inferno Ring",
    alarm: "Dark Flame Band",
    level: 90,
    arcana: "Tower",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.absorb,
      ice: Weaknesses.weak,
      electric: Weaknesses.none,
      wind: Weaknesses.none,
      psychic: Weaknesses.resist,
      nuclear: Weaknesses.nullify,
      bless: Weaknesses.none,
      curse: Weaknesses.none
    },
    skills: {
      Inferno: 0,
      "Fire Amp": 0,
      "Burn Boost": 0,
      "Fortify Spirit": 91,
      "Blazing Hell": 92,
      "Amrita Shower": 93,
      "Enduring Soul": 95,
      "Spell Master": 96
    },
    stats: {
      strength: 55,
      magic: 54,
      endurance: 61,
      agility: 59,
      luck: 48
    },
    trait: "Drunken Passion",
    max: true
  },
  {
    name: "Satan",
    inherits: "ice",
    item: "Tantric Oath",
    alarm: "Tantric Oath R",
    level: 92,
    arcana: "Judgement",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.resist,
      fire: Weaknesses.none,
      ice: Weaknesses.repel,
      electric: Weaknesses.none,
      wind: Weaknesses.none,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.none,
      curse: Weaknesses.repel
    },
    skills: {
      "Diamond Dust": 0,
      "Ice Age": 0,
      "Regenerate 3": 0,
      "Black Viper": 94,
      "Invigorate 3": 95,
      "Fortify Spirit": 96,
      Concentrate: 97,
      "Absorb Ice": 98
    },
    stats: {
      strength: 62,
      magic: 59,
      endurance: 55,
      agility: 52,
      luck: 55
    },
    trait: "Cocytus",
    max: true
  },
  {
    name: "Maria",
    inherits: "healing",
    item: "Spiral Heal Charm",
    alarm: "Rosary of Purity",
    level: 93,
    arcana: "Faith",
    elems: {
      physical: Weaknesses.none,
      gun: Weaknesses.none,
      fire: Weaknesses.weak,
      ice: Weaknesses.none,
      electric: Weaknesses.resist,
      wind: Weaknesses.nullify,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.absorb,
      curse: Weaknesses.none
    },
    skills: {
      "Invigorate 3": 0,
      Salvation: 0,
      "Holy Benevolence": 0,
      "Heat Riser": 94,
      "Holy Embrace": 96,
      "Angelic Grace": 97,
      "Holy Whisper": 98
    },
    stats: {
      strength: 52,
      magic: 66,
      endurance: 53,
      agility: 54,
      luck: 61
    },
    trait: "Ave Maria",
    max: true
  },
  {
    name: "Lucifer",
    special: true,
    inherits: "almighty",
    item: "Tyrant Pistol",
    alarm: "Tyrant Pistol EX",
    level: 93,
    arcana: "Star",
    elems: {
      physical: Weaknesses.nullify,
      gun: Weaknesses.nullify,
      fire: Weaknesses.resist,
      ice: Weaknesses.resist,
      electric: Weaknesses.resist,
      wind: Weaknesses.resist,
      psychic: Weaknesses.none,
      nuclear: Weaknesses.none,
      bless: Weaknesses.weak,
      curse: Weaknesses.absorb
    },
    skills: {
      Gigantomachia: 0,
      "Absorb Curse": 0,
      "Morning Star": 94,
      "Spell Master": 95,
      "Heat Riser": 96,
      "Repel Bless": 97,
      "Insta-Heal": 98,
      "Absorb Phys": 99
    },
    stats: {
      strength: 61,
      magic: 59,
      endurance: 59,
      agility: 56,
      luck: 51
    },
    trait: "Allure of Wisdom",
    max: true
  },
  {
    name: "Satanael",
    special: true,
    inherits: "almighty",
    item: "Paradise Lost",
    alarm: "Paradise Lost R",
    level: 95,
    arcana: "Fool",
    elems: {
      physical: Weaknesses.resist,
      gun: Weaknesses.resist,
      fire: Weaknesses.resist,
      ice: Weaknesses.resist,
      electric: Weaknesses.resist,
      wind: Weaknesses.resist,
      psychic: Weaknesses.resist,
      nuclear: Weaknesses.resist,
      bless: Weaknesses.nullify,
      curse: Weaknesses.absorb
    },
    skills: {
      Maeigaon: 0,
      Megidolaon: 0,
      "Survival Trick": 0,
      "Riot Gun": 0,
      "Black Viper": 96,
      "Heat Riser": 97,
      "Tyrant's Mind": 98,
      "Victory Cry": 99
    },
    stats: {
      strength: 63,
      magic: 60,
      endurance: 57,
      agility: 56,
      luck: 56
    },
    trait: "Pagan Allure",
    note: "Only available on NG+"
  }
];
export default personaMap;
