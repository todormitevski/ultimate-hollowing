import { ReactNode } from "react";
import { Infusion } from "../types/types";
import InfusionSlot from "./InfusionSlot";

import classes from "./Infusions.module.css";

type Props = {
  infusions: Infusion[];
  children?: ReactNode;
};

export default function Infusions({ infusions }: Props) {
  return (
    <div className={classes.infusionsContainer}>
      <InfusionSlot infusion={infusions[0]} />
      <InfusionSlot infusion={infusions[1]} />
    </div>
  );
}
