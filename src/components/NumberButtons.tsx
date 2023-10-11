import { Fragment } from "react";
import styles from "./NumberButtons.module.css";
import Button from "./Button";
import { randkey } from "../utils";
function NumberButtons() {
  const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const numBtns = nums.map((n) => {
    const classes = `${styles["btn-num"]} ${styles[`btn-num--${n}`]}`;
    return (
      <Button key={randkey()} value={`${n}`} className={classes}>
        {n}
      </Button>
    );
  });
  return <Fragment>{numBtns}</Fragment>;
}

export default NumberButtons;
