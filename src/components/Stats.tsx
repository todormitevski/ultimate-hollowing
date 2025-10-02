import { ReactNode } from "react";

import classes from "./Stats.module.css";
import hollowingIcon from "../assets/images/stat-icons/hollowing.png";
import { Stat } from "../types/types";

type Props = {
  baseStats: Stat[];
  randStats: Stat[];
  sl1: boolean;
  children?: ReactNode;
};

export default function Stats({ baseStats, randStats, sl1 }: Props) {
  return (
    <section className={classes.statSection}>
      <h4 className={classes.soulLevel}>Soul Level {sl1 ? 1 : 120}</h4>
      <table>
        <thead>
          <tr>
            <th>Attribute</th>
            <th>Base</th>
            <th>Final</th>
          </tr>
        </thead>
        <tbody>
          {baseStats.slice(1).map((stat, index) => (
            <tr key={stat.name}>
              <td>
                <div className={classes.statNameContainer}>
                  <img
                    src={stat.icon}
                    alt={stat.name}
                    className={classes.statIcon}
                  />
                  {stat.name}
                </div>
              </td>
              <td>{stat.value}</td>
              <td className={classes.finalStatValue}>
                {sl1 ? stat.value : randStats[index + 1].value}
              </td>
            </tr>
          ))}
          <tr>
            <td>
              <div className={classes.statNameContainer}>
                <img src={hollowingIcon} alt="Hollowing" />
                Hollowing
              </div>
            </td>
            <td></td>
            <td>99</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
