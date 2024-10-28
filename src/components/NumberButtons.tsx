import { MouseEvent } from "react";
import styles from "./NumberButtons.module.css";
import Button from "./Button";
import { randkey } from "../utils";
import { useCalculator } from "../context/CalculatorContext";

function NumberButtons() {
  const { buffer, setBuffer, result, setResult } = useCalculator();

  function handleNumBtnClick(e: MouseEvent<HTMLButtonElement>) {
    const number = e.currentTarget.value;

    const isNumRightOperand = /[^0-9.]/.test(buffer.at(-1)!);
    const isInitialState = buffer.at(0) === "0" || result;

    if (isInitialState) {
      setBuffer([number]);
      setResult("");
      return;
    }

    if (isNumRightOperand) {
      setBuffer((buffer) => [...buffer, number]);
      return;
    }

    setBuffer((buffer) => {
      const tmpBuffer = buffer.slice();
      const newNum = tmpBuffer.pop()?.concat(number) ?? "";
      return [...tmpBuffer, newNum];
    });
  }

  const buttons = [];

  for (let i = 0; i <= 9; i++) {
    const classes = `${styles["btn-num"]} ${styles[`btn-num--${i}`]}`;
    buttons.push(
      <Button
        key={randkey()}
        value={`${i}`}
        className={classes}
        onClick={handleNumBtnClick}
      >
        {i}
      </Button>
    );
  }

  return buttons;
}

export default NumberButtons;
