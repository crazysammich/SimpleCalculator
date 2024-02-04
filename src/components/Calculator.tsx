import styles from "./Calculator.module.css";
import CalculatorOutput from "./CalculatorOutput";
import CalculatorButtons from "./CalculatorButtons";
import NumberButtons from "./NumberButtons";
import OperationButtons from "./OperationButtons";
import FunctionButttons from "./FunctionButttons";
import EqualButton from "./EqualButton";
import CalculatorProvider from "../context/CalculatorContext";

function Calculator() {
  return (
    <CalculatorProvider>
      <div className={styles.calculator}>
        <CalculatorOutput />
        <CalculatorButtons>
          <NumberButtons />
          <OperationButtons />
          <FunctionButttons />
          <EqualButton />
        </CalculatorButtons>
      </div>
    </CalculatorProvider>
  );
}
export default Calculator;
