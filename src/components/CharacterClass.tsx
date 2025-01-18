import { ReactNode } from "react";
import classes from "./CharacterClass.module.css";

import placeholder from "../assets/images/character-classes/placeholder.png";

type Props = {
  name: string;
  imgUrl: string;
  imgAlt: string;
  children?: ReactNode;
};

export default function CharacterClass({ name, imgUrl, imgAlt }: Props) {
  return (
    <div className={classes.characterContainer}>
      <h4 className={classes.characterName}>{name}</h4>
      <img
        src={imgUrl || placeholder}
        alt={imgAlt}
        className={classes.characterImage}
      />
    </div>
  );
}
