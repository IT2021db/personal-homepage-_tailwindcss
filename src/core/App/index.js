import { useSelector } from "react-redux";
import { GlobalStyle } from "./GlobalStyle";
import { selectIsDark } from "../../features/PersonalHomepage/ThemeSwitcher/themeSwitcherSlice";
import { PersonalHomepage } from "../../features/PersonalHomepage";

function App() {
  const isDark = useSelector(selectIsDark);
  return (
    <>
      <GlobalStyle isDark={isDark} />{" "}
      {/* Passing the isDark value to GlobalStyle */}
      <PersonalHomepage />
    </>
  );
}

export default App;
