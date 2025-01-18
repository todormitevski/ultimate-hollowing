import { CHARACTER_CLASSES, WEAPON_TYPES, INFUSIONS } from "../data";
import { CharacterClass, WeaponType } from "../types/types";

function randomizeClass(sl1: boolean) {
  if (sl1) return CHARACTER_CLASSES[9];
  const index = Math.floor(Math.random() * CHARACTER_CLASSES.length);
  return CHARACTER_CLASSES[index];
}

function randomizeStats(characterClass: CharacterClass) {
  // shallow copy
  let randStats = characterClass.stats.map((stat) => ({ ...stat }));
  const level = characterClass.stats[0].value;
  let levelsLeft = 120 - level;

  while (levelsLeft > 0) {
    const randIndex = Math.floor(Math.random() * randStats.length);
    const increment = Math.min(levelsLeft, Math.floor(Math.random() * 40));
    randStats[randIndex].value += increment;
    levelsLeft -= increment;
  }

  return randStats;
}

function randomizeWeapon() {
  const index = Math.floor(Math.random() * WEAPON_TYPES.length);
  return WEAPON_TYPES[index];
}

function isInfusible(weapon: WeaponType): boolean {
  const noninfusibleTypes = [
    "Bows",
    "Greatbows",
    "Crossbows",
    "Sacred Chimes",
    "Talismans",
    "Staves",
    "Flames",
    "Paired Ultra Greatswords",
  ];

  return !noninfusibleTypes.includes(weapon.name);
}

function randomizeInfusion(weapon: WeaponType) {
  if (!isInfusible(weapon)) return INFUSIONS[15];
  const index = Math.floor(Math.random() * INFUSIONS.length);
  return INFUSIONS[index];
}

export default function randomizeData(sl1: boolean) {
  const characterClass = randomizeClass(sl1);
  const stats = randomizeStats(characterClass);
  const leftHandWeaponType = randomizeWeapon();
  const rightHandWeaponType = randomizeWeapon();
  const leftWeaponInfusion = randomizeInfusion(leftHandWeaponType);
  const rightWeaponInfusion = randomizeInfusion(rightHandWeaponType);

  return {
    characterClass,
    stats,
    leftHandWeaponType,
    rightHandWeaponType,
    leftWeaponInfusion,
    rightWeaponInfusion,
  };
}
