import { MouseEvent } from "react";
import Button from "./Button";
import styles from "./OperationButtons.module.css";
import { computeOperation, randkey } from "../utils";
import { useCalculator } from "../context/CalculatorContext";

function OperationButtons() {
  const operators = ["+", "-", "x", "/"];
  const {
    currentOperand,
    currentOperation,
    previousOperand,
    setPreviousOperand,
    setCurrentOperand,
    setCurrentOperation,
    setIsComputationSuccess,
  } = useCalculator();

  function handleOperationBtnClick(e: MouseEvent<HTMLButtonElement>) {
    const operator = e.currentTarget.value;
    if (currentOperation) {
      const result = computeOperation(
        previousOperand,
        currentOperand,
        currentOperation
      );

      setPreviousOperand(result);
      setCurrentOperand("");
      setCurrentOperation(operator);
      return;
    }
    setIsComputationSuccess(false);
    setCurrentOperand("");
    setPreviousOperand(currentOperand);
    setCurrentOperation(operator);
  }

  return operators.map((op) => {
    let classes = `${styles["btn-op"]}`;
    switch (op) {
      case "+":
        classes = classes.concat(" ", `${styles["btn-op--plus"]}`);
        break;
      case "-":
        classes = classes.concat(" ", `${styles["btn-op--minus"]}`);
        break;
      case "x":
        classes = classes.concat(" ", `${styles["btn-op--mult"]}`);
        break;
      case "/":
        classes = classes.concat(" ", `${styles["btn-op--div"]}`);
        break;
    }

    return (
      <Button
        key={randkey()}
        className={classes}
        value={op}
        onClick={handleOperationBtnClick}
      >
        {op}
      </Button>
    );
  });
}

export default OperationButtons;
