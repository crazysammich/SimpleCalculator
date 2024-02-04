import { MouseEvent } from "react";
import styles from "./NumberButtons.module.css";
import Button from "./Button";
import { randkey, formatNumWithComma } from "../utils";
import { useCalculator } from "../context/CalculatorContext";

function NumberButtons() {
  const nums = [".", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const {
    currentOperand,
    setCurrentOperand,
    isComputationSuccess,
    setIsComputationSuccess,
  } = useCalculator();

  function handleNumBtnClick(e: MouseEvent<HTMLButtonElement>) {
    const number = e.currentTarget.value;
    if (currentOperand.includes(".") && number === ".") {
      return;
    }
    if (number === "." && currentOperand === "0") {
      setCurrentOperand((prevOperand) => prevOperand.concat(number));
      return;
    }
    if (currentOperand === "0" || isComputationSuccess) {
      setIsComputationSuccess(false);
      setCurrentOperand(number);
      return;
    }
    setCurrentOperand((prevOperand) =>
      formatNumWithComma(prevOperand.concat(number))
    );
  }

  return nums.map((n) => {
    let classes;
    if (n === ".") {
      classes = `${styles["btn-num"]} ${styles[`btn-num--dec`]}`;
    } else {
      classes = `${styles["btn-num"]} ${styles[`btn-num--${n}`]}`;
    }
    return (
      <Button
        key={randkey()}
        value={`${n}`}
        className={classes}
        onClick={handleNumBtnClick}
      >
        {n}
      </Button>
    );
  });
}

export default NumberButtons;
