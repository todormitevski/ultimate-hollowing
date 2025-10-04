import classes from "./HollowButton.module.css";

type Props = {
  onClick: () => void;
};

export default function HollowButton(props: Props) {
  return (
    <button {...props} className={classes.button}>
      Hollow
    </button>
  );
}
