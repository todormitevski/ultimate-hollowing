import { ReactNode } from "react";
import { Infusion } from "../types/types";

import classes from "./InfusionSlot.module.css";

type Props = {
  infusion: Infusion;
  children?: ReactNode;
};

export default function InfusionSlot({ infusion }: Props) {
  return (
    <div className={classes.infusionSlot}>
      {infusion.image && (
        <img
          src={infusion.image}
          alt={infusion.name}
          className={classes.infusionImage}
        />
      )}
      <h2 className={classes.infusionName}>{infusion.name} Infusion</h2>
    </div>
  );
}
