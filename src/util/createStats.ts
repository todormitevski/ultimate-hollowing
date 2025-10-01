import {
  vigIcon,
  atnIcon,
  endIcon,
  vitIcon,
  strIcon,
  dexIcon,
  intIcon,
  fthIcon,
  lckIcon,
} from "../data/images";

export default function createStats(stats: number[]) {
  const [level, vig, atn, end, vit, str, dex, int, fth, lck] = stats;

  return [
    { name: "Level", value: level, icon: undefined },
    { name: "Vigor", value: vig, icon: vigIcon },
    { name: "Attunement", value: atn, icon: atnIcon },
    { name: "Endurance", value: end, icon: endIcon },
    { name: "Vitality", value: vit, icon: vitIcon },
    { name: "Strength", value: str, icon: strIcon },
    { name: "Dexterity", value: dex, icon: dexIcon },
    { name: "Intelligence", value: int, icon: intIcon },
    { name: "Faith", value: fth, icon: fthIcon },
    { name: "Luck", value: lck, icon: lckIcon },
  ];
}
