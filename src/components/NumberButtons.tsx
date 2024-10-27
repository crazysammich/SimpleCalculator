import { MouseEvent } from "react";
import styles from "./NumberButtons.module.css";
import Button from "./Button";
import { randkey, formatNumWithComma } from "../utils";
import { useCalculator } from "../context/CalculatorContext";

function NumberButtons() {
  const nums = [".", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const { buffer, setBuffer, result, setResult } = useCalculator();

  function handleNumBtnClick(e: MouseEvent<HTMLButtonElement>) {
    const number = e.currentTarget.value;

    const doesPrevNumHasDecimal = /\./.test(buffer.at(-1)!) && number === ".";
    const isNumRightOperand = /[^0-9.]/.test(buffer.at(-1)!);
    const isInitialState = buffer.at(0) === "0" || result;

    if (doesPrevNumHasDecimal) {
      return;
    }

    if (isInitialState) {
      if (number === ".") {
        setBuffer([result.concat(".")]);
      } else {
        setBuffer([number]);
      }
      setResult("");
      return;
    }

    if (number === ".") {
      setBuffer((buffer) => [...buffer, "0."]);
      return;
    }

    if (isNumRightOperand) {
      setBuffer((buffer) => [...buffer, number]);
      return;
    }

    setBuffer((buffer) => {
      const tmpBuffer = buffer.slice();
      const newNum = formatNumWithComma(tmpBuffer.pop()?.concat(number) ?? "");
      return [...tmpBuffer, newNum];
    });
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
