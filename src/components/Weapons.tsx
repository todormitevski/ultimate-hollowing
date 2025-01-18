import { ReactNode } from "react";

import classes from "./Weapons.module.css";
import WeaponSlot from "./WeaponSlot";
import { WeaponType } from "../types/types";

type Props = {
  weaponTypes: WeaponType[];
  children?: ReactNode;
};

export default function Weapons({ weaponTypes }: Props) {
  return (
    <>
      <h4 className={classes.weaponsTitle}>Weapons</h4>
      <main className={classes.weaponsMain}>
        <WeaponSlot weaponType={weaponTypes[0]} hand="Left" />
        <WeaponSlot weaponType={weaponTypes[1]} hand="Right" />
      </main>
    </>
  );
}
