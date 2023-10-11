import { useState, useEffect, MouseEvent } from "react";
import type { Theme } from "../themes";
import { randkey } from "../utils";
import themes from "../themes";
import Button from "./Button";

function ThemesButton() {
  const [theme, setTheme] = useState("themeOne");
  const themesNames = getThemesNames(themes);

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
  }, [theme]);

  function handleThemeClick(e: MouseEvent<HTMLButtonElement>) {
    setTheme(e.currentTarget.value);
  }

  return (
    <div>
      {themesNames.map((_, i) => (
        <div key={randkey()}>
          <span>{i}</span>
        </div>
      ))}
      {themesNames.map((name) => (
        <div key={randkey()}>
          <Button value={name} onClick={handleThemeClick} />
        </div>
      ))}
    </div>
  );
}
export default ThemesButton;

function setRootTheme(theme: Theme) {
  Object.entries(theme).forEach(([prefix, obj]) => {
    Object.entries(obj).forEach(([suffix, val]) => {
      document.documentElement.style.setProperty(`--${prefix}-${suffix}`, val);
    });
  });
}

function getThemesNames(themes: object) {
  return Object.keys(themes).map((themeName) => themeName);
}
