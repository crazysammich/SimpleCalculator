import {
  useContext,
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

interface CalculatorContextType {
  buffer: string[];
  setBuffer: Dispatch<SetStateAction<string[]>>;
  result: string;
  setResult: Dispatch<SetStateAction<string>>;
  resetCalculator: () => void;
}

const CalculatorContext = createContext<CalculatorContextType | null>(null);

interface CalculatorProviderProps {
  children?: ReactNode;
}
function CalculatorProvider({ children }: CalculatorProviderProps) {
  const [buffer, setBuffer] = useState<string[]>(["0"]);
  const [result, setResult] = useState("");

  console.log(buffer);

  function resetCalculator() {
    setResult("");
    setBuffer(["0"]);
  }

  const ctxValue: CalculatorContextType = {
    buffer,
    setBuffer,
    result,
    setResult,
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
