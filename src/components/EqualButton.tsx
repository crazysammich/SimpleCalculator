import { MouseEvent } from "react";
import Button from "./Button";
import styles from "./EqualButton.module.css";
import { useCalculator } from "../context/CalculatorContext";
import { computeOperation } from "../utils";

function EqualButton() {
  const { buffer, setBuffer, setResult } = useCalculator();

  function handleOnEqualBtnClick(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const result = computeOperation(buffer) ?? "0";
    setResult(result);
    setBuffer((buffer) => [result, ...buffer.slice(1)]);
  }

  return (
    <Button className={styles["btn-equal"]} onClick={handleOnEqualBtnClick}>
      =
    </Button>
  );
}

export default EqualButton;
