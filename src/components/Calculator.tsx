import {
  useState,
  useRef,
  MouseEvent,
  FormEvent,
  ChangeEvent,
  useEffect,
} from "react";
import styles from "./Calculator.module.css";
import CalculatorButtons from "./CalculatorButtons";
import NumberButtons from "./NumberButtons";
import OperationButtons from "./OperationButtons";
import FunctionButttons from "./FunctionButttons";
import EqualButton from "./EqualButton";
import CalculatorOutput from "./CalculatorOutput";

function Calculator() {
  const [currentOperation, setCurrentOperation] = useState("");
  const [currentOperand, setCurrentOperand] = useState("0");
  const [previousOperand, setPreviousOperand] = useState("");
  const calcOutput = "".concat(
    currentOperand,
    currentOperation,
    previousOperand
  );

  // const [calcOutput, setCalcOutput] = useState("0");
  // const currentOperator = useRef("");
  // const currentOperand = useRef("0");
  // const previousOperand = useRef("0");
  const errMessage = "Result is undefined";
  const isComputationSuccess = useRef(false);

  function handleOperationBtnClick(e: MouseEvent<HTMLButtonElement>) {
    const operator = e.currentTarget.value;
    if (currentOperation) {
      const result = computeOperation(
        previousOperand,
        currentOperand,
        currentOperation
      );

      setPreviousOperand(result);
      setCurrentOperand("");
      setCurrentOperation(operator);
      return;
    }
    isComputationSuccess.current = false;
    setCurrentOperand("");
    setPreviousOperand(currentOperand);
    setCurrentOperation(operator);
  }
  // function handleOperationBtnClick(e: MouseEvent<HTMLButtonElement>) {
  //   const operator = e.currentTarget.value;
  //   if (currentOperator.current) {
  //     const result = computeOperation(
  //       previousOperand.current,
  //       currentOperand.current,
  //       currentOperator.current
  //     );
  //     previousOperand.current = result;
  //     currentOperand.current = "";
  //     currentOperator.current = operator;
  //     setCalcOutput(result.concat(operator));
  //     return;
  //   }
  //   isComputationSuccess.current = false;
  //   currentOperator.current = operator;
  //   previousOperand.current = currentOperand.current;
  //   currentOperand.current = "0";
  //   setCalcOutput((prevOutput) => prevOutput.concat(operator));
  // }

  function handleNumberBtnClick(e: MouseEvent<HTMLButtonElement>) {
    const number = e.currentTarget.value;
    if (currentOperand.includes(".") && number === ".") {
      return;
    }

    if (number === "." && currentOperand === "0") {
      setCurrentOperand((prevOperand) => prevOperand.concat(number));
      return;
    }

    if (currentOperand === "0" || isComputationSuccess.current) {
      isComputationSuccess.current = false;
      setCurrentOperand(number);
      return;
    }

    setCurrentOperand((prevOperand) =>
      formatNumWithComma(prevOperand.concat(number))
    );
  }
  // function handleNumberBtnClick(e: MouseEvent<HTMLButtonElement>) {
  //   const number = e.currentTarget.value;
  //   if (currentOperand.current.includes(".") && number === ".") {
  //     return;
  //   }

  //   if (number === "." && calcOutput === "0") {
  //     currentOperand.current = currentOperand.current.concat(number);
  //     setCalcOutput((prevOutput) => prevOutput.concat(number));
  //     return;
  //   }

  //   if (calcOutput === "0" || isComputationSuccess.current) {
  //     isComputationSuccess.current = false;
  //     currentOperand.current = number;
  //     setCalcOutput(number);
  //     return;
  //   }

  //   currentOperand.current = currentOperand.current.concat(number);
  //   setCalcOutput(
  //     `${formatNumWithComma(currentOperand.current)}${currentOperator.current}${
  //       previousOperand.current
  //     }`
  //   );
  // }

  function handleOnFunctionBtnClick(e: MouseEvent<HTMLButtonElement>) {
    const value = e.currentTarget.value;
    if (currentOperand === "0") return;
    // if (calcOutput === errMessage) {
    //   setCalcOutput("0");
    //   return;
    // }
    if (value === "del") {
      // setCalcOutput((prevOutput) => {
      //   if (prevOutput.length === 1) {
      //     return "0";
      //   }
      //   return prevOutput.slice(0, -1);
      // });
      setCurrentOperand((prevOperand) => prevOperand.slice(0, -1));
      return;
    }
    if (value === "reset") {
      isComputationSuccess.current = false;
      setCurrentOperation("");
      setCurrentOperand("0");
      setPreviousOperand("");
      return;
    }
  }
  // function handleOnFunctionBtnClick(e: MouseEvent<HTMLButtonElement>) {
  //   const value = e.currentTarget.value;
  //   if (calcOutput === "0") return;
  //   if (calcOutput === errMessage) {
  //     setCalcOutput("0");
  //     return;
  //   }
  //   if (value === "del") {
  //     setCalcOutput((prevOutput) => {
  //       if (prevOutput.length === 1) {
  //         return "0";
  //       }
  //       return prevOutput.slice(0, -1);
  //     });
  //     currentOperator.current = "";
  //     currentOperand.current = currentOperand.current.slice(0, -1);
  //     return;
  //   }
  //   if (value === "reset") {
  //     isComputationSuccess.current = false;
  //     currentOperator.current = "";
  //     currentOperand.current = "0";
  //     previousOperand.current = "0";
  //     setCalcOutput("0");
  //     return;
  //   }
  // }

  function handleOnSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (previousOperand === "0" || currentOperand === "0") {
      return;
    }
    const result = computeOperation(
      previousOperand,
      currentOperand,
      currentOperation
    );
    isComputationSuccess.current = true;
    setCurrentOperation("");
    setPreviousOperand("");
    setCurrentOperand(result);
  }
  // function handleOnSubmit(e: FormEvent<HTMLFormElement>) {
  //   e.preventDefault();

  //   if (previousOperand.current === "0" || calcOutput === "0") {
  //     return;
  //   }
  //   const result = computeOperation(
  //     previousOperand.current,
  //     currentOperand.current,
  //     currentOperator.current
  //   );
  //   isComputationSuccess.current = true;
  //   currentOperator.current = "";
  //   previousOperand.current = "0";
  //   currentOperand.current = result;
  //   setCalcOutput(result);
  // }
  function handleOnDisplayChange(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
  }
  return (
    <form className={styles.calculator} onSubmit={handleOnSubmit}>
      <CalculatorOutput
        value={calcOutput}
        onOutputChange={handleOnDisplayChange}
      />
      <CalculatorButtons>
        <NumberButtons onNumberBtnClick={handleNumberBtnClick} />
        <OperationButtons onOperationBtnClick={handleOperationBtnClick} />
        <FunctionButttons onFunctionBtnClick={handleOnFunctionBtnClick} />
        <EqualButton />
      </CalculatorButtons>
    </form>
  );
}
export default Calculator;

function computeOperation(
  prevOperand: string,
  currOperand: string,
  operator: string
) {
  let operationResult = 0;
  const prevOperandNum = parseFloat(prevOperand.replace(/,/g, ""));
  const currOperandNum = parseFloat(currOperand.replace(/,/g, ""));

  if (isNaN(prevOperandNum) && isNaN(currOperandNum)) {
    return "";
  }
  switch (operator) {
    case "+":
      operationResult = prevOperandNum + currOperandNum;
      break;
    case "-":
      operationResult = prevOperandNum - currOperandNum;
      break;
    case "x":
      operationResult = prevOperandNum * currOperandNum;
      break;
    case "/":
      operationResult = prevOperandNum / currOperandNum;
      break;
    default:
      return "";
  }

  return isNaN(operationResult)
    ? "Result is undefined"
    : formatNumWithComma(operationResult);
}

function formatNumWithComma(num: string | number) {
  const stringNum = num.toString().replace(/,/g, "").split(".");
  const intDigits = parseFloat(stringNum[0]);
  const decDigits = stringNum[1];
  let intOutput = num;

  if (isNaN(intDigits)) {
    intOutput = "";
  } else {
    intOutput = intDigits.toLocaleString("en-US");
  }

  if (decDigits != null) {
    intOutput = intOutput.concat(".", decDigits);
  } else {
    return intOutput;
  }
  return intOutput;
}
