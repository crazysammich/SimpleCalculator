import { useCalculator } from "../context/CalculatorContext";
import styles from "./CalculatorOutput.module.css";
interface CalculatorOutput {
  value: string;
}

function CalculatorOutput() {
  const { previousOperand, currentOperand, currentOperation } = useCalculator();

  const calcOutput = "".concat(
    previousOperand,
    " ",
    currentOperation,
    " ",
    currentOperand
  );
  return (
    <input
      className={styles["calc-output"]}
      type="text"
      value={calcOutput}
      readOnly={true}
    />
  );
}

export default CalculatorOutput;
