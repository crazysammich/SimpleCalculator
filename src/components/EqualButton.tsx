import { MouseEvent } from "react";
import Button from "./Button";
import styles from "./EqualButton.module.css";
import { useCalculator } from "../context/CalculatorContext";
import { computeOperation } from "../utils";

function EqualButton() {
  const {
    previousOperand,
    currentOperand,
    currentOperation,
    setIsComputationSuccess,
    setCurrentOperand,
    setPreviousOperand,
    setCurrentOperation,
  } = useCalculator();

  function handleOnEqualBtnClick(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (previousOperand === "0" && currentOperand === "0") {
      return;
    }
    const result = computeOperation(
      previousOperand,
      currentOperand,
      currentOperation
    );
    setIsComputationSuccess(true);
    setCurrentOperation("");
    setPreviousOperand("");
    setCurrentOperand(result);
  }

  return (
    <Button className={styles["btn-equal"]} onClick={handleOnEqualBtnClick}>
      =
    </Button>
  );
}

export default EqualButton;
