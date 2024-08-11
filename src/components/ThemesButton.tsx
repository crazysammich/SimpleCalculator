import { Fragment, MouseEvent } from "react";
import styles from "./ThemesButton.module.css";
import { randkey } from "../utils";
import { useThemes } from "../hooks";

function ThemesButton() {
  const { currentTheme, themesList, changeTheme } = useThemes();

  function handleThemeClick(e: MouseEvent<HTMLButtonElement>) {
    changeTheme(e.currentTarget.value);
  }

  return (
    <div className={styles["themes-switch-container"]}>
      <span>theme</span>
      <div className={styles["themes-switch-btn"]} role="switch">
        {themesList.map((name, i) => (
          <Fragment key={randkey()}>
            <label htmlFor={`theme-${i + 1}`}>{i + 1}</label>
            <button
              id={`theme-${i}`}
              className={` ${currentTheme === name ? "active" : ""}`}
              name={`theme-radio-button`}
              value={name}
              onClick={handleThemeClick}
            />
          </Fragment>
        ))}
        <span
          className={styles.slider}
          aria-hidden="true"
          data-current-btn={currentTheme}
        ></span>
      </div>
    </div>
  );
}
export default ThemesButton;
