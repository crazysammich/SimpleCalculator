import { Fragment } from "react";
// import styles from "./App.module.css";
import ThemesButton from "./components/ThemesButton";
import Calculator from "./components/Calculator";

function App() {
  return (
    <Fragment>
      <header>
        <ThemesButton />
      </header>
      <main>
        <Calculator />
      </main>
    </Fragment>
  );
}

export default App;
