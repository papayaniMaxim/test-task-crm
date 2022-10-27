import { useLayoutEffect, useState } from 'react';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import classes from './App.module.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import News from './components/News/News';
import SeachAddress from './components/SeachAddress/SeachAddress';

function App() {
    const [openMenu, setOpenMenu] = useState(true)

    useLayoutEffect(() => {
        const windowInnerWidth = window.innerWidth
        if (windowInnerWidth <= 768) setOpenMenu(false)
    }, [])

    return (
        <div className={classes.container}>
            <HashRouter>
                <Header setOpenMenu={setOpenMenu} />
                <section className={classes.body}>
                    {openMenu && <Menu />}
                    <section className={classes.content}>
                        <Routes>
                            <Route path='/' element={<News />} />
                            <Route path='/address' element= {<SeachAddress/>} />
                        </Routes>
                    </section>
                </section>
            </HashRouter>
        </div>
    );
}

export default App;
