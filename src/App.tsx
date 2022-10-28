import { useLayoutEffect, useState } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import classes from './App.module.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import News from './pages/News/News';
import SeachAddress from './pages/SeachAddress/SeachAddress';

function App() {
    
    const windowInnerWidth = window.innerWidth
    const initialMenuState = windowInnerWidth <= 768 ? false : true
    
    const [openMenu, setOpenMenu] = useState(initialMenuState)

    return (
        <div className={classes.container}>
            <HashRouter>
                <Header setOpenMenu={setOpenMenu} />
                <section className={classes.body}>
                    <Menu isOpen={openMenu} />
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
