import { ChangeEvent, Fragment, Dispatch, SetStateAction } from "react";
import styles from "./ThemesButton.module.css";
import { randkey } from "../utils";
import themes from "../themes";
interface ThemesButtonProps {
  theme: string;
  onThemeClick: Dispatch<SetStateAction<string>>;
}
function ThemesButton({ theme, onThemeClick }: ThemesButtonProps) {
  const themesNames = getThemesNames(themes);

  function handleThemeClick(e: ChangeEvent<HTMLInputElement>) {
    onThemeClick(e.currentTarget.value);
  }

  return (
    <div className={styles["themes-switch-container"]}>
      <span>theme</span>
      <div className={styles["themes-switch-btn"]} role="switch">
        {themesNames.map((name, i) => (
          <Fragment key={randkey()}>
            <label htmlFor={`theme-${i + 1}`}>{i + 1}</label>
            <input
              id={`theme-${i}`}
              type="radio"
              name={`theme-radio-button`}
              value={name}
              checked={theme === name}
              onChange={handleThemeClick}
            />
          </Fragment>
        ))}
        <span className={styles.slider} aria-hidden="true"></span>
      </div>
    </div>
  );
}
export default ThemesButton;

function getThemesNames(themes: object) {
  return Object.keys(themes).map((themeName) => themeName);
}
