import { Fragment, MouseEvent } from "react";
import styles from "./FunctionButtons.module.css";
import Button from "./Button";
import { useCalculator } from "../context/CalculatorContext";

function FunctionButtons() {
  const {
    currentOperand,
    currentOperation,
    setPreviousOperand,
    setCurrentOperand,
    setCurrentOperation,
    resetCalculator,
  } = useCalculator();

  function handleOnFunctionBtnClick(e: MouseEvent<HTMLButtonElement>) {
    const fncName = e.currentTarget.value;
    if (fncName === "del") {
      if (currentOperand.length > 0) {
        setCurrentOperand((prevOperand) => prevOperand.slice(0, -1));
      }

      if (currentOperand.length === 0) {
        setCurrentOperation((prevOperation) => prevOperation.slice(0, -1));
      }

      if (currentOperation.length === 0) {
        setPreviousOperand((prevOperand) => prevOperand.slice(0, -1));
      }
    }

    if (fncName === "reset") {
      resetCalculator();
      return;
    }
  }
  return (
    <Fragment>
      <Button
        className={`${styles["btn-fnc"]} ${styles["btn-fnc--del"]}`}
        value="del"
        onClick={handleOnFunctionBtnClick}
      >
        del
      </Button>
      <Button
        className={`${styles["btn-fnc"]} ${styles["btn-fnc--reset"]}`}
        value="reset"
        onClick={handleOnFunctionBtnClick}
      >
        reset
      </Button>
    </Fragment>
  );
}

export default FunctionButtons;
