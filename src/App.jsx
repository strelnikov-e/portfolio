import useLocalStorage from "use-local-storage";
import { useEffect } from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/Home.jsx";
import Contacts from "./pages/Contacts.jsx";
import About from "./pages/About.jsx";
import Work from "./pages/Work.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <>
      <Navbar switchTheme={switchTheme} />
      {/* <ScrollToTop /> */}
      <Routes>
        <Route index element={<Home />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="about" element={<About />} />
        <Route path="work" element={<Work />} />
      </Routes>
    </>
  );
}

export default App;
