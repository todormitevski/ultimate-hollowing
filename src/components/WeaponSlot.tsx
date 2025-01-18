import { ReactNode } from "react";
import classes from "./WeaponSlot.module.css";
import { WeaponType } from "../types/types";

type Props = {
  weaponType: WeaponType;
  hand: string;
  children?: ReactNode;
};

export default function WeaponSlot({ weaponType, hand }: Props) {
  return (
    <div className={classes.handSection}>
      <h4 className={classes.handTitle}>{hand} Hand</h4>
      <div className={classes.weaponSlot}>
        <img
          src={weaponType.image}
          alt={weaponType.name}
          className={classes.weaponImage}
        />
        <h5 className={classes.weaponName}>{weaponType.name}</h5>
      </div>
    </div>
  );
}
