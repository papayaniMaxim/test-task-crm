import { Dispatch, SetStateAction } from 'react';
import Logo from '../Logo/Logo';
import Person from '../Person/Person';
import classes from './Header.module.css'
function Header(props: {
    setOpenMenu: Dispatch<SetStateAction<boolean>>;
    openMenu: boolean;
}) {
    return (
        <header className={classes.header}>
            <Logo setOpenMenu={props.setOpenMenu} openMenu={props.openMenu} />
            <Person/>
        </header>
    );
}

export default Header;