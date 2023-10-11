// import { Fragment } from "react";
import styles from "./App.module.css";
import ThemesButton from "./components/ThemesButton";
import Calculator from "./components/Calculator";

function App() {
  return (
    <div className={styles.app}>
      <header>
        <ThemesButton />
      </header>
      <main>
        <Calculator />
      </main>
    </div>
  );
}

export default App;
