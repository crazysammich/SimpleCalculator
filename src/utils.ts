function randkey() {
  return Math.random().toString(16).slice(2);
}

function computeOperation(buffer: string[]) {
  let operationResult = 0;
  if (buffer.length <= 1) return buffer.at(0);

  const leftOperand = parseFloat(buffer[0].replace(/,/g, ""));
  const rightOperand = parseFloat(buffer[2].replace(/,/g, ""));
  const operator = buffer[1];

  switch (operator) {
    case "+":
      operationResult = leftOperand + rightOperand;
      break;
    case "-":
      operationResult = leftOperand - rightOperand;
      break;
    case "x":
      operationResult = leftOperand * rightOperand;
      break;
    case "/":
      if (rightOperand === 0) return "Cannot divide by zero";
      operationResult = leftOperand / rightOperand;
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
