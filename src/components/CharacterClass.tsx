import { ReactNode } from "react";
import classes from "./CharacterClass.module.css";

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
      <div className={classes.imageContainer}>
        <img
          src={imgUrl}
          alt={imgAlt}
          className={classes.characterImage}
        />
      </div>
    </div>
  );
}
