import {
  knightImg,
  mercenaryImg,
  warriorImg,
  heraldImg,
  thiefImg,
  assassinImg,
  sorcererImg,
  pyromancerImg,
  clericImg,
  deprivedImg,
} from "./images";

import { CharacterClass } from "../types/types";
import createStats from "../util/createStats";

export const CHARACTER_CLASSES: CharacterClass[] = [
  {
    id: "c1",
    name: "Knight",
    image: {
      src: knightImg,
      alt: "Knight class",
    },
    stats: createStats([9, 12, 10, 11, 15, 13, 12, 9, 9, 7]),
  },
  {
    id: "c2",
    name: "Mercenary",
    image: {
      src: mercenaryImg,
      alt: "Mercenary class",
    },
    stats: createStats([8, 11, 12, 11, 10, 10, 16, 10, 8, 9]),
  },
  {
    id: "c3",
    name: "Warrior",
    image: {
      src: warriorImg,
      alt: "Warrior class",
    },
    stats: createStats([7, 14, 6, 12, 11, 16, 9, 8, 9, 11]),
  },
  {
    id: "c4",
    name: "Herald",
    image: {
      src: heraldImg,
      alt: "Herald class",
    },
    stats: createStats([9, 12, 10, 9, 12, 12, 11, 8, 13, 11]),
  },
  {
    id: "c5",
    name: "Thief",
    image: {
      src: thiefImg,
      alt: "Thief class",
    },
    stats: createStats([5, 10, 11, 10, 9, 9, 13, 10, 8, 14]),
  },
  {
    id: "c6",
    name: "Assassin",
    image: {
      src: assassinImg,
      alt: "Assassin class",
    },
    stats: createStats([10, 10, 14, 11, 10, 10, 14, 11, 9, 10]),
  },
  {
    id: "c7",
    name: "Sorcerer",
    image: {
      src: sorcererImg,
      alt: "Sorcerer class",
    },
    stats: createStats([6, 9, 16, 9, 7, 7, 12, 16, 7, 12]),
  },
  {
    id: "c8",
    name: "Pyromancer",
    image: {
      src: pyromancerImg,
      alt: "Pyromancer class",
    },
    stats: createStats([8, 11, 12, 10, 8, 12, 9, 14, 14, 7]),
  },
  {
    id: "c9",
    name: "Cleric",
    image: {
      src: clericImg,
      alt: "Cleric class",
    },
    stats: createStats([7, 10, 14, 9, 7, 12, 8, 7, 16, 13]),
  },
  {
    id: "c10",
    name: "Deprived",
    image: {
      src: deprivedImg,
      alt: "Deprived class",
    },
    stats: createStats([1, 10, 10, 10, 10, 10, 10, 10, 10, 10]),
  },
];
