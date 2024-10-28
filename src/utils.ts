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
    : operationResult.toString();
}

// function formatDecimal(num: number) {
//   return new Intl.NumberFormat("en", { style: "decimal" }).format(num);
// }

function formatNumWithComma(num: string) {
  const stringNum = num.replace(",", "").split(".");
  const intDigits = parseFloat(stringNum[0]);
  const decDigits = stringNum[1];
  let output = num;

  if (isNaN(intDigits)) {
    output = "";
  } else {
    output = new Intl.NumberFormat("en", { style: "decimal" }).format(
      intDigits
    );
  }

  if (decDigits != null) {
    output = output.concat(".", decDigits);
  }

  return output;
}

export { randkey, formatNumWithComma, computeOperation };
