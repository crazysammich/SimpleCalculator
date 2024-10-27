import { useCalculator } from "../context/CalculatorContext";
import styles from "./CalculatorOutput.module.css";
interface CalculatorOutput {
  value: string;
}

function CalculatorOutput() {
  const { buffer, result } = useCalculator();
  const calcOutput = result ? result : buffer.join(" ");

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
