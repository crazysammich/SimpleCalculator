import { useEffect, useRef } from "react";
import { useCalculator } from "../context/CalculatorContext";
import { formatNumWithComma } from "../utils";
import styles from "./CalculatorOutput.module.css";
interface CalculatorOutput {
  value: string;
}

function CalculatorOutput() {
  const { buffer, result } = useCalculator();
  const outputRef = useRef<HTMLOutputElement>(null);
  const outputTextRef = useRef<HTMLSpanElement>(null);
  const calcOutput = result
    ? formatNumWithComma(result)
    : buffer.reduce((a, c) => {
        if (/[+\-/*]/.test(c)) return a.concat(`${c} `);
        return a.concat(`${formatNumWithComma(c)} `);
      }, "");

  useEffect(() => {
    const output = outputRef.current;
    const outputText = outputTextRef.current;
    if (!output || !outputText) return;

    const maxFontSize = +getComputedStyle(output).fontSize.replace("px", "");
    const outputWidth = output.offsetWidth;
    const outputTextWidth = outputText.offsetWidth;

    if (outputTextWidth >= outerWidth) {
      const newOutputFontSize = (outputWidth * maxFontSize) / outputTextWidth;
      outputText.style.setProperty("font-size", `${newOutputFontSize}px`);
    }
  }, [buffer]);

  return (
    <output className={styles["calc-output"]} ref={outputRef}>
      <span ref={outputTextRef}>{calcOutput}</span>
    </output>
  );
}

export default CalculatorOutput;
