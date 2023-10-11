// import { useState } from "react";
import styles from "./Calculator.module.css";
import CalculatorButtons from "./CalculatorButtons";
import NumberButtons from "./NumberButtons";
function Calculator() {
  // const [calcDisplayValue, setCalcDisplayValue] = useState("");
  return (
    <div className={styles.calculator}>
      <CalculatorButtons>
        <NumberButtons />
      </CalculatorButtons>
    </div>
  );
}

export default Calculator;
