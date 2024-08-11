import { createContext, ReactNode, useEffect, useState } from "react";

interface ThemesContextType {
  themesList: string[];
  currentTheme: string;
  changeTheme: (theme: string) => void;
}
const ThemeContext = createContext<ThemesContextType | null>(null);

function ThemesProvider({ children }: { children: ReactNode }) {
  const [currentTheme, setCurrentTheme] = useState(
    localStorage.getItem("userTheme") || "theme-one"
  );
  const themesList = ["theme-1", "theme-2", "theme-3"];
  const ctxVal: ThemesContextType = {
    themesList,
    currentTheme,
    changeTheme,
  };

  useEffect(() => {
    localStorage.setItem("userTheme", currentTheme);
  }, [currentTheme]);

  function changeTheme(theme: string) {
    document.body.dataset.theme = theme;
    setCurrentTheme(theme);
  }

  return (
    <ThemeContext.Provider value={ctxVal}>{children}</ThemeContext.Provider>
  );
}

export { ThemeContext };
export default ThemesProvider;
