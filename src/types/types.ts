export type Stat = {
  name: string;
  value: number;
  icon: string | undefined;
};

export type CharacterClass = {
  id: string;
  name: string;
  image: {
    src: string;
    alt: string;
  };
  stats: Stat[];
};

export type WeaponType = {
  name: string;
  image: string;
};

export type Infusion = {
  name: string;
  image: string | undefined;
};

export type RandomData = {
  characterClass: CharacterClass;
  stats: Stat[];
  leftHandWeaponType: WeaponType;
  rightHandWeaponType: WeaponType;
  leftWeaponInfusion: Infusion;
  rightWeaponInfusion: Infusion;
};
