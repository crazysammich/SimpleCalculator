import { MouseEvent } from "react";
import Button from "./Button";
import styles from "./OperationButtons.module.css";
import { computeOperation, randkey } from "../utils";
import { useCalculator } from "../context/CalculatorContext";

function OperationButtons() {
  const operators = [".", "+", "-", "x", "/"];
  const { buffer, setBuffer, result, setResult } = useCalculator();

  function handleOperationBtnClick(e: MouseEvent<HTMLButtonElement>) {
    const operator = e.currentTarget.value;
    const isBufferFull = buffer.length == 3;
    const doesPrevNumHasDecimal = /\./.test(buffer.at(-1)!) && operator === ".";
    const isNum = /\d/.test(buffer.at(-1)!);

    setResult("");

    if (doesPrevNumHasDecimal) {
      return;
    }

    if (!isNum && operator !== ".") {
      setBuffer((buffer) => buffer.toSpliced(-1, 1, operator));
      return;
    }

    if (operator === ".") {
      setBuffer((buffer) => {
        if (!isNum) return [...buffer, "0."];
        return buffer.toSpliced(-1, 1, buffer.at(-1)?.concat(".") ?? "0.");
      });
      return;
    }

    if (result) {
      setBuffer([result, operator]);
      return;
    }

    if (isBufferFull) {
      const result = computeOperation(buffer) ?? "0";
      setBuffer([result, operator]);
      return;
    }

    setBuffer((buffer) => [...buffer, operator]);
  }

  return operators.map((op) => {
    let classes = `${styles["btn-op"]}`;
    switch (op) {
      case "+":
        classes = classes.concat(` ${styles["btn-op--plus"]}`);
        break;
      case "-":
        classes = classes.concat(` ${styles["btn-op--minus"]}`);
        break;
      case "x":
        classes = classes.concat(` ${styles["btn-op--mult"]}`);
        break;
      case "/":
        classes = classes.concat(` ${styles["btn-op--div"]}`);
        break;
      case ".":
        classes = classes.concat(` ${styles["btn-op--dec"]}`);
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
