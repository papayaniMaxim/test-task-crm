import { BrowserRouter, Route, Routes } from "react-router-dom";
import classes from "./App.module.css";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import { useTheme } from "./hooks/useTheme";
import News from "./pages/News/News";
import SeachAddress from "./pages/SeachAddress/SeachAddress";
import Settings from "./pages/Settings/Settings";
import Tables from "./pages/Tables/Tables";

function App() {
  useTheme()
    return (
    <div className={classes.container}>
      <BrowserRouter>
        <Header />
        <section className={classes.body}>
          <Menu />
          <section className={classes.content}>
            <Routes>
              <Route path="/" element={<News />} />
              <Route path="/address" element={<SeachAddress />} />
              <Route path="/tables/*" element={<Tables />} />
              <Route path="/settings/*" element={<Settings />} />
            </Routes>
          </section>
        </section>
      </BrowserRouter>
    </div>
  );
}

export default App;
