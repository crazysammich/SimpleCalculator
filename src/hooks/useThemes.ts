import { useContext } from "react";
import { ThemeContext } from "../context/ThemesContext";

function useThemes() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within <ThemeProvider>");
  }
  return ctx;
}

export default useThemes;
