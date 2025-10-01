import {
  refinedInfusionImg,
  sharpInfusionImg,
  heavyInfusionImg,
  rawInfusionImg,
  poisonInfusionImg,
  fireInfusionImg,
  chaosInfusionImg,
  deepInfusionImg,
  darkInfusionImg,
  simpleInfusionImg,
  crystalInfusionImg,
  blessedInfusionImg,
  lightningInfusionImg,
  bloodInfusionImg,
  hollowInfusionImg,
} from "./images";

import { Infusion } from "../types/types";

export const INFUSIONS: Infusion[] = [
  { id: "i1", name: "Refined", image: refinedInfusionImg },
  { id: "i2", name: "Sharp", image: sharpInfusionImg },
  { id: "i3", name: "Heavy", image: heavyInfusionImg },
  { id: "i4", name: "Raw", image: rawInfusionImg },
  { id: "i5", name: "Poison", image: poisonInfusionImg },
  { id: "i6", name: "Fire", image: fireInfusionImg },
  { id: "i7", name: "Chaos", image: chaosInfusionImg },
  { id: "i8", name: "Deep", image: deepInfusionImg },
  { id: "i9", name: "Dark", image: darkInfusionImg },
  { id: "i10", name: "Simple", image: simpleInfusionImg },
  { id: "i11", name: "Crystal", image: crystalInfusionImg },
  { id: "i12", name: "Blessed", image: blessedInfusionImg },
  { id: "i13", name: "Lightning", image: lightningInfusionImg },
  { id: "i14", name: "Blood", image: bloodInfusionImg },
  { id: "i15", name: "Hollow", image: hollowInfusionImg },
  // for noninfusibles
  { id: "i16", name: "No", image: undefined },
];
