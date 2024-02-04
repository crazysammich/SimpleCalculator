import {
  useContext,
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

interface CalculatorContextType {
  currentOperand: string;
  previousOperand: string;
  currentOperation: string;
  isComputationSuccess: boolean;
  setCurrentOperand: Dispatch<SetStateAction<string>>;
  setCurrentOperation: Dispatch<SetStateAction<string>>;
  setPreviousOperand: Dispatch<SetStateAction<string>>;
  setIsComputationSuccess: Dispatch<SetStateAction<boolean>>;
  resetCalculator: () => void;
}

const CalculatorContext = createContext<CalculatorContextType | null>(null);

interface CalculatorProviderProps {
  children?: ReactNode;
}
function CalculatorProvider({ children }: CalculatorProviderProps) {
  const [currentOperation, setCurrentOperation] = useState("");
  const [currentOperand, setCurrentOperand] = useState("0");
  const [previousOperand, setPreviousOperand] = useState("");
  const [isComputationSuccess, setIsComputationSuccess] = useState(false);

  function resetCalculator() {
    setIsComputationSuccess(false);
    setPreviousOperand("");
    setCurrentOperand("0");
    setCurrentOperation("");
  }

  const ctxValue: CalculatorContextType = {
    currentOperand,
    previousOperand,
    currentOperation,
    isComputationSuccess,
    setIsComputationSuccess,
    setCurrentOperand,
    setCurrentOperation,
    setPreviousOperand,
    resetCalculator,
  };

  return (
    <CalculatorContext.Provider value={ctxValue}>
      {children}
    </CalculatorContext.Provider>
  );
}

function useCalculator() {
  const ctx = useContext(CalculatorContext);

  if (!ctx) {
    throw new Error("useCalculator must be used within <CalculatorProvider>");
  }

  return ctx;
}

export { useCalculator };
export default CalculatorProvider;
