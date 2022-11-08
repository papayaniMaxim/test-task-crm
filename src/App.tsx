import { HashRouter, Route, Routes } from "react-router-dom";
import classes from "./App.module.css";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import News from "./pages/News/News";
import SeachAddress from "./pages/SeachAddress/SeachAddress";

function App() {
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
            </Routes>
          </section>
        </section>
      </HashRouter>
    </div>
  );
}

export default App;
