import { Dispatch, SetStateAction } from "react";
import LogoIcon from "../../UI/icons/LogoIcon";
import classes from './Logo.module.css'

function Logo(props: {
    setOpenMenu: Dispatch<SetStateAction<boolean>>;
    openMenu: boolean;
}){
    
    const handler = ()=> props.setOpenMenu( prev => !prev)
    return (
        <div className={classes.container} onClick={handler}>
            <div className={props.openMenu ? classes.rotableLogo : classes.dafaultLogo}>
                <LogoIcon />
            </div>
            <h1 className={classes.text}>Wrench CRM</h1>
        </div>
    );
}

export default Logo;
