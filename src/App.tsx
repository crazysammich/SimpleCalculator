import { Fragment, useEffect, useState } from "react";
// Styles
import "./App.css";

// Components
import Header from "./components/Header";
import ThemesButton from "./components/ThemesButton";
import Calculator from "./components/Calculator";
import Content from "./components/Content";

// Data
import themes from "./themes";
import type { Theme } from "./themes";

function App() {
  const [theme, setTheme] = useState(getStoredTheme);

  useEffect(() => {
    switch (theme) {
      case "themeOne":
        setRootTheme(themes.themeOne);
        break;
      case "themeTwo":
        setRootTheme(themes.themeTwo);
        break;
      case "themeThree":
        setRootTheme(themes.themeThree);
        break;
    }
    localStorage.setItem("userTheme", theme);
  }, [theme]);

  return (
    <Fragment>
      <Header>
        <h1>calc</h1>
        <ThemesButton theme={theme} onThemeClick={setTheme} />
      </Header>
      <Content>
        <Calculator />
      </Content>
    </Fragment>
  );
}
export default App;

function setRootTheme(theme: Theme, prefix: string = "") {
  const colors = ["primary", "secondary", "tertiary", "accent"];
  if (colors.some((c) => c in theme)) {
    Object.entries(theme).forEach(([suffix, val]) => {
      document.documentElement.style.setProperty(`--${prefix}-${suffix}`, val);
    });
    return;
  }
  Object.entries(theme).forEach(([prefix, obj]) => {
    setRootTheme(obj, prefix);
  });
}

function getStoredTheme() {
  return localStorage.getItem("userTheme") ?? "themeOne";
}
