// Styles
import "./App.css";

// Components
import Header from "./components/Header";
import ThemesButton from "./components/ThemesButton";
import Calculator from "./components/Calculator";
import Content from "./components/Content";
import ThemesProvider from "./context/ThemesContext";

function App() {
  return (
    <ThemesProvider>
      <>
        <Header>
          <h1>calc</h1>
          <ThemesButton />
        </Header>
        <Content>
          <Calculator />
        </Content>
      </>
    </ThemesProvider>
  );
}
export default App;

// function setRootTheme(theme: Theme, prefix: string = "") {
//   const colors = ["primary", "secondary", "tertiary", "accent"];
//   if (colors.some((c) => c in theme)) {
//     Object.entries(theme).forEach(([suffix, val]) => {
//       document.documentElement.style.setProperty(`--${prefix}-${suffix}`, val);
//     });
//     return;
//   }
//   Object.entries(theme).forEach(([prefix, obj]) => {
//     setRootTheme(obj, prefix);
//   });
// }

// function getStoredTheme() {
//   return localStorage.getItem("userTheme") ?? "themeOne";
// }
