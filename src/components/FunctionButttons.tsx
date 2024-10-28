import { Fragment, MouseEvent } from "react";
import styles from "./FunctionButtons.module.css";
import Button from "./Button";
import { useCalculator } from "../context/CalculatorContext";

function FunctionButtons() {
  const { buffer, setBuffer, resetCalculator } = useCalculator();

  function handleOnFunctionBtnClick(e: MouseEvent<HTMLButtonElement>) {
    const fncName = e.currentTarget.value;
    if (fncName === "del") {
      // if (buffer.length > 0) {
      //   setBuffer((buffer) => {
      //     if (!buffer.at(-1)) return buffer.slice(0, -1);
      //     const newNum = buffer.at(-1)?.slice(0, -1);
      //     return buffer.toSpliced(-1, 1, newNum ?? "0");
      //   });
      //   return;
      // }

      if (buffer.length >= 0) {
        setBuffer((buffer) => {
          // if (buffer.at(-1)) return ["0"];
          const newNum = buffer.at(-1)?.slice(0, -1);
          return buffer.toSpliced(-1, 1, newNum ?? "0");
        });
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
