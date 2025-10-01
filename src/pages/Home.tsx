import { ReactNode, useEffect, useState } from "react";
import CharacterClass from "../components/CharacterClass";
import Stats from "../components/Stats.js";
import Weapons from "../components/Weapons.tsx";
import Infusions from "../components/Infusions.tsx";

import { CHARACTER_CLASSES, WEAPON_TYPES, INFUSIONS } from "../data/index.ts";

import randomizeData from "../util/randomize.ts";

import classes from "./Home.module.css";

import { RandomData } from "../types/types.ts";

type Props = {
  sl1: boolean;
  children?: ReactNode;
};

export default function Home({ sl1 }: Props) {
  const [rands, setRands] = useState<RandomData>({
    characterClass: CHARACTER_CLASSES[0],
    stats: CHARACTER_CLASSES[0].stats,
    leftHandWeaponType: WEAPON_TYPES[0],
    rightHandWeaponType: WEAPON_TYPES[0],
    leftWeaponInfusion: INFUSIONS[0],
    rightWeaponInfusion: INFUSIONS[0],
  });

  useEffect(() => {
    const {
      characterClass,
      stats,
      leftHandWeaponType,
      rightHandWeaponType,
      leftWeaponInfusion,
      rightWeaponInfusion,
    } = randomizeData(sl1);
    setRands({
      characterClass,
      stats,
      leftHandWeaponType,
      rightHandWeaponType,
      leftWeaponInfusion,
      rightWeaponInfusion,
    });
  }, [sl1]);

  return (
    <div className={classes.homeContainer}>
      <div className={classes.leftSide}>
        <CharacterClass
          name={rands.characterClass.name}
          imgUrl={rands.characterClass.image.src}
          imgAlt={rands.characterClass.image.alt}
        />
        <Stats
          baseStats={rands.characterClass.stats}
          randStats={rands.stats}
          sl1={sl1}
        />
      </div>
      <div className={classes.rightSide}>
        <Weapons
          weaponTypes={[rands.leftHandWeaponType, rands.rightHandWeaponType]}
        />
        <Infusions
          infusions={[rands.leftWeaponInfusion, rands.rightWeaponInfusion]}
        />
      </div>
    </div>
  );
}
