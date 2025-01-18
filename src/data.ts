import knightImg from "./assets/images/character-classes/knight.png";
import mercenaryImg from "./assets/images/character-classes/mercenary.png";
import warriorImg from "./assets/images/character-classes/warrior.png";
import heraldImg from "./assets/images/character-classes/herald.png";
import thiefImg from "./assets/images/character-classes/thief.png";
import assassinImg from "./assets/images/character-classes/assassin.png";
import sorcererImg from "./assets/images/character-classes/sorcerer.png";
import pyromancerImg from "./assets/images/character-classes/pyromancer.png";
import clericImg from "./assets/images/character-classes/cleric.png";
import deprivedImg from "./assets/images/character-classes/deprived.png";

import vigIcon from "./assets/images/stat-icons/vigor.png";
import atnIcon from "./assets/images/stat-icons/attunement.png";
import endIcon from "./assets/images/stat-icons/endurance.png";
import vitIcon from "./assets/images/stat-icons/vitality.png";
import strIcon from "./assets/images/stat-icons/strength.png";
import dexIcon from "./assets/images/stat-icons/dexterity.png";
import intIcon from "./assets/images/stat-icons/intelligence.png";
import fthIcon from "./assets/images/stat-icons/faith.png";
import lckIcon from "./assets/images/stat-icons/luck.png";

import daggersImg from "./assets/images/weapon-types/daggers.png";
import straightSwordsImg from "./assets/images/weapon-types/straight-swords.png";
import greatswordsImg from "./assets/images/weapon-types/greatswords.png";
import ultraGreatswordsImg from "./assets/images/weapon-types/ultra-greatswords.png";
import pairedUltraGreatswordsImg from "./assets/images/weapon-types/paired-ultra-greatswords.png";
import curvedSwordsImg from "./assets/images/weapon-types/curved-swords.png";
import curvedGreatswordsImg from "./assets/images/weapon-types/curved-greatswords.png";
import katanasImg from "./assets/images/weapon-types/katanas.png";
import thrustingSwordsImg from "./assets/images/weapon-types/thrusting-swords.png";
import axesImg from "./assets/images/weapon-types/axes.png";
import greataxesImg from "./assets/images/weapon-types/greataxes.png";
import hammersImg from "./assets/images/weapon-types/hammers.png";
import greatHammersImg from "./assets/images/weapon-types/greathammers.png";
import fistsAndClawsImg from "./assets/images/weapon-types/fists-claws.png";
import spearsAndPikesImg from "./assets/images/weapon-types/spears-pikes.png";
import halberdsImg from "./assets/images/weapon-types/halberds.png";
import reapersImg from "./assets/images/weapon-types/reapers.png";
import whipsImg from "./assets/images/weapon-types/whips.png";
import bowsImg from "./assets/images/weapon-types/bows.png";
import greatbowsImg from "./assets/images/weapon-types/greatbows.png";
import crossbowsImg from "./assets/images/weapon-types/crossbows.png";
import stavesImg from "./assets/images/weapon-types/staves.png";
import flamesImg from "./assets/images/weapon-types/flames.png";
import talismansImg from "./assets/images/weapon-types/talismans.png";
import chimesImg from "./assets/images/weapon-types/chimes.png";
import smallShieldsImg from "./assets/images/weapon-types/small-shields.png";
import standardShieldsImg from "./assets/images/weapon-types/standard-shields.png";
import greatshieldsImg from "./assets/images/weapon-types/greatshields.png";

import refinedInfusionImg from "./assets/images/infusions/Refined_Gem.png";
import sharpInfusionImg from "./assets/images/infusions/Sharp_Gem.png";
import heavyInfusionImg from "./assets/images/infusions/Heavy_Gem.png";
import rawInfusionImg from "./assets/images/infusions/Raw_Gem.png";
import poisonInfusionImg from "./assets/images/infusions/Poison_Gem.png";
import fireInfusionImg from "./assets/images/infusions/Fire_Gem.png";
import chaosInfusionImg from "./assets/images/infusions/Chaos_Gem.png";
import deepInfusionImg from "./assets/images/infusions/Deep_Gem.png";
import darkInfusionImg from "./assets/images/infusions/Dark_Gem.png";
import simpleInfusionImg from "./assets/images/infusions/Simple_Gem.png";
import crystalInfusionImg from "./assets/images/infusions/Crystal_Gem.png";
import blessedInfusionImg from "./assets/images/infusions/Blessed_Gem.png";
import lightningInfusionImg from "./assets/images/infusions/Lightning_Gem.png";
import bloodInfusionImg from "./assets/images/infusions/Blood_Gem.png";
import hollowInfusionImg from "./assets/images/infusions/Hollow_Gem.png";

import { CharacterClass, WeaponType, Infusion } from "./types/types";

export const CHARACTER_CLASSES: CharacterClass[] = [
  {
    id: "c1",
    name: "Knight",
    image: {
      src: knightImg,
      alt: "Knight class",
    },
    stats: [
      { name: "Level", value: 9, icon: undefined },
      { name: "Vigor", value: 12, icon: vigIcon },
      { name: "Attunement", value: 10, icon: atnIcon },
      { name: "Endurance", value: 11, icon: endIcon },
      { name: "Vitality", value: 15, icon: vitIcon },
      { name: "Strength", value: 13, icon: strIcon },
      { name: "Dexterity", value: 12, icon: dexIcon },
      { name: "Intelligence", value: 9, icon: intIcon },
      { name: "Faith", value: 9, icon: fthIcon },
      { name: "Luck", value: 7, icon: lckIcon },
    ],
  },
  {
    id: "c2",
    name: "Mercenary",
    image: {
      src: mercenaryImg,
      alt: "Mercenary class",
    },
    stats: [
      { name: "Level", value: 8, icon: undefined },
      { name: "Vigor", value: 11, icon: vigIcon },
      { name: "Attunement", value: 12, icon: atnIcon },
      { name: "Endurance", value: 11, icon: endIcon },
      { name: "Vitality", value: 10, icon: vitIcon },
      { name: "Strength", value: 10, icon: strIcon },
      { name: "Dexterity", value: 16, icon: dexIcon },
      { name: "Intelligence", value: 10, icon: intIcon },
      { name: "Faith", value: 8, icon: fthIcon },
      { name: "Luck", value: 9, icon: lckIcon },
    ],
  },
  {
    id: "c3",
    name: "Warrior",
    image: {
      src: warriorImg,
      alt: "Warrior class",
    },
    stats: [
      { name: "Level", value: 7, icon: undefined },
      { name: "Vigor", value: 14, icon: vigIcon },
      { name: "Attunement", value: 6, icon: atnIcon },
      { name: "Endurance", value: 12, icon: endIcon },
      { name: "Vitality", value: 11, icon: vitIcon },
      { name: "Strength", value: 16, icon: strIcon },
      { name: "Dexterity", value: 9, icon: dexIcon },
      { name: "Intelligence", value: 8, icon: intIcon },
      { name: "Faith", value: 9, icon: fthIcon },
      { name: "Luck", value: 11, icon: lckIcon },
    ],
  },
  {
    id: "c4",
    name: "Herald",
    image: {
      src: heraldImg,
      alt: "Herald class",
    },
    stats: [
      { name: "Level", value: 9, icon: undefined },
      { name: "Vigor", value: 12, icon: vigIcon },
      { name: "Attunement", value: 10, icon: atnIcon },
      { name: "Endurance", value: 9, icon: endIcon },
      { name: "Vitality", value: 12, icon: vitIcon },
      { name: "Strength", value: 12, icon: strIcon },
      { name: "Dexterity", value: 11, icon: dexIcon },
      { name: "Intelligence", value: 8, icon: intIcon },
      { name: "Faith", value: 13, icon: fthIcon },
      { name: "Luck", value: 11, icon: lckIcon },
    ],
  },
  {
    id: "c5",
    name: "Thief",
    image: {
      src: thiefImg,
      alt: "Thief class",
    },
    stats: [
      { name: "Level", value: 5, icon: undefined },
      { name: "Vigor", value: 10, icon: vigIcon },
      { name: "Attunement", value: 11, icon: atnIcon },
      { name: "Endurance", value: 10, icon: endIcon },
      { name: "Vitality", value: 9, icon: vitIcon },
      { name: "Strength", value: 9, icon: strIcon },
      { name: "Dexterity", value: 13, icon: dexIcon },
      { name: "Intelligence", value: 10, icon: intIcon },
      { name: "Faith", value: 8, icon: fthIcon },
      { name: "Luck", value: 14, icon: lckIcon },
    ],
  },
  {
    id: "c6",
    name: "Assassin",
    image: {
      src: assassinImg,
      alt: "Assassin class",
    },
    stats: [
      { name: "Level", value: 10, icon: undefined },
      { name: "Vigor", value: 10, icon: vigIcon },
      { name: "Attunement", value: 14, icon: atnIcon },
      { name: "Endurance", value: 11, icon: endIcon },
      { name: "Vitality", value: 10, icon: vitIcon },
      { name: "Strength", value: 10, icon: strIcon },
      { name: "Dexterity", value: 14, icon: dexIcon },
      { name: "Intelligence", value: 11, icon: intIcon },
      { name: "Faith", value: 9, icon: fthIcon },
      { name: "Luck", value: 10, icon: lckIcon },
    ],
  },
  {
    id: "c7",
    name: "Sorcerer",
    image: {
      src: sorcererImg,
      alt: "Sorcerer class",
    },
    stats: [
      { name: "Level", value: 6, icon: undefined },
      { name: "Vigor", value: 9, icon: vigIcon },
      { name: "Attunement", value: 16, icon: atnIcon },
      { name: "Endurance", value: 9, icon: endIcon },
      { name: "Vitality", value: 7, icon: vitIcon },
      { name: "Strength", value: 7, icon: strIcon },
      { name: "Dexterity", value: 12, icon: dexIcon },
      { name: "Intelligence", value: 16, icon: intIcon },
      { name: "Faith", value: 7, icon: fthIcon },
      { name: "Luck", value: 12, icon: lckIcon },
    ],
  },
  {
    id: "c8",
    name: "Pyromancer",
    image: {
      src: pyromancerImg,
      alt: "Pyromancer class",
    },
    stats: [
      { name: "Level", value: 8, icon: undefined },
      { name: "Vigor", value: 11, icon: vigIcon },
      { name: "Attunement", value: 12, icon: atnIcon },
      { name: "Endurance", value: 10, icon: endIcon },
      { name: "Vitality", value: 8, icon: vitIcon },
      { name: "Strength", value: 12, icon: strIcon },
      { name: "Dexterity", value: 9, icon: dexIcon },
      { name: "Intelligence", value: 14, icon: intIcon },
      { name: "Faith", value: 14, icon: fthIcon },
      { name: "Luck", value: 7, icon: lckIcon },
    ],
  },
  {
    id: "c9",
    name: "Cleric",
    image: {
      src: clericImg,
      alt: "Cleric class",
    },
    stats: [
      { name: "Level", value: 7, icon: undefined },
      { name: "Vigor", value: 10, icon: vigIcon },
      { name: "Attunement", value: 14, icon: atnIcon },
      { name: "Endurance", value: 9, icon: endIcon },
      { name: "Vitality", value: 7, icon: vitIcon },
      { name: "Strength", value: 12, icon: strIcon },
      { name: "Dexterity", value: 8, icon: dexIcon },
      { name: "Intelligence", value: 7, icon: intIcon },
      { name: "Faith", value: 16, icon: fthIcon },
      { name: "Luck", value: 13, icon: lckIcon },
    ],
  },
  {
    id: "c10",
    name: "Deprived",
    image: {
      src: deprivedImg,
      alt: "Deprived class",
    },
    stats: [
      { name: "Level", value: 1, icon: undefined },
      { name: "Vigor", value: 10, icon: vigIcon },
      { name: "Attunement", value: 10, icon: atnIcon },
      { name: "Endurance", value: 10, icon: endIcon },
      { name: "Vitality", value: 10, icon: vitIcon },
      { name: "Strength", value: 10, icon: strIcon },
      { name: "Dexterity", value: 10, icon: dexIcon },
      { name: "Intelligence", value: 10, icon: intIcon },
      { name: "Faith", value: 10, icon: fthIcon },
      { name: "Luck", value: 10, icon: lckIcon },
    ],
  },
];

export const WEAPON_TYPES: WeaponType[] = [
  { name: "Daggers", image: daggersImg },
  { name: "Straight Swords", image: straightSwordsImg },
  { name: "Greatswords", image: greatswordsImg },
  { name: "Ultra Greatswords", image: ultraGreatswordsImg },
  { name: "Paired Ultra Greatswords", image: pairedUltraGreatswordsImg },
  { name: "Curved Swords", image: curvedSwordsImg },
  { name: "Curved Greatswords", image: curvedGreatswordsImg },
  { name: "Katanas", image: katanasImg },
  { name: "Thrusting Swords", image: thrustingSwordsImg },
  { name: "Axes", image: axesImg },
  { name: "Greataxes", image: greataxesImg },
  { name: "Hammers", image: hammersImg },
  { name: "Great Hammers", image: greatHammersImg },
  { name: "Fist & Claws", image: fistsAndClawsImg },
  { name: "Spears & Pikes", image: spearsAndPikesImg },
  { name: "Halberds", image: halberdsImg },
  { name: "Reapers", image: reapersImg },
  { name: "Whips", image: whipsImg },
  { name: "Bows", image: bowsImg },
  { name: "Greatbows", image: greatbowsImg },
  { name: "Crossbows", image: crossbowsImg },
  { name: "Staves", image: stavesImg },
  { name: "Flames", image: flamesImg },
  { name: "Talismans", image: talismansImg },
  { name: "Sacred Chimes", image: chimesImg },
  { name: "Small Shields", image: smallShieldsImg },
  { name: "Standard Shields", image: standardShieldsImg },
  { name: "Greatshields", image: greatshieldsImg },
];

export const INFUSIONS: Infusion[] = [
  { name: "Refined", image: refinedInfusionImg },
  { name: "Sharp", image: sharpInfusionImg },
  { name: "Heavy", image: heavyInfusionImg },
  { name: "Raw", image: rawInfusionImg },
  { name: "Poison", image: poisonInfusionImg },
  { name: "Fire", image: fireInfusionImg },
  { name: "Chaos", image: chaosInfusionImg },
  { name: "Deep", image: deepInfusionImg },
  { name: "Dark", image: darkInfusionImg },
  { name: "Simple", image: simpleInfusionImg },
  { name: "Crystal", image: crystalInfusionImg },
  { name: "Blessed", image: blessedInfusionImg },
  { name: "Lightning", image: lightningInfusionImg },
  { name: "Blood", image: bloodInfusionImg },
  { name: "Hollow", image: hollowInfusionImg },
  // for noninfusibles
  { name: "No", image: undefined },
];
