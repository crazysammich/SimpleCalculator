function randkey() {
  return Math.random().toString(16).slice(2);
}

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
    : formatDecimal(operationResult);
}

function formatDecimal(num: number) {
  return new Intl.NumberFormat("en", { style: "decimal" }).format(num);
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

export { randkey, formatNumWithComma, computeOperation };
