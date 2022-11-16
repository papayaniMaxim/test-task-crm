import React from "react";
import { BrowserRouter, HashRouter, Route, Routes, useLocation } from "react-router-dom";
import classes from "./App.module.css";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import { useTheme } from "./hooks/useTheme";
import News from "./pages/News/News";
import SeachAddress from "./pages/SeachAddress/SeachAddress";
import Settings from "./pages/Settings/Settings";
import Tables from "./pages/Tables/Tables";
import Widget from "./pages/Widgets/Widget";

function App() {
    useTheme();
  return (
    <div className={classes.container}>
      <HashRouter>
        <Header />
        <section className={classes.body}>
          <Menu />
          <section className={classes.content}>
            <Routes>
              <Route path="/" element={<News />} />
              <Route path="/address" element={<SeachAddress />} />
              <Route path="/tables/*" element={<Tables />} />
              <Route path="/settings/*" element={<Settings />} />
              <Route path="/widgets/*" element={<Widget />} />
            </Routes>
          </section>
        </section>
      </HashRouter>
    </div>
  );
}

export default App;
