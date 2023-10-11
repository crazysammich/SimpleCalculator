import { ReactNode } from "react";
import styles from "./CalculatorButtons.module.css";

interface CalculatorButtonsProps {
  children?: ReactNode;
}
function CalculatorButtons(props: CalculatorButtonsProps) {
  return <div className={styles["calc-btns"]}>{props.children}</div>;
}

export default CalculatorButtons;
