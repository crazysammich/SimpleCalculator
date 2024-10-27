import { Fragment, MouseEvent } from "react";
import styles from "./FunctionButtons.module.css";
import Button from "./Button";
import { useCalculator } from "../context/CalculatorContext";

function FunctionButtons() {
  const { buffer, setBuffer, resetCalculator } = useCalculator();

  function handleOnFunctionBtnClick(e: MouseEvent<HTMLButtonElement>) {
    const fncName = e.currentTarget.value;
    if (fncName === "del") {
      if (buffer.length > 0) {
        setBuffer((buffer) => buffer.toSpliced(-1, 1));
      }

      if (buffer.length <= 1) {
        setBuffer(["0"]);
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
