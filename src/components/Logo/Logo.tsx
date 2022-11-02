import LogoIcon from "../../UI/icons/LogoIcon";
import classes from './Logo.module.css'

function Logo(){
    
    return (
        <div className={classes.container}>
                <LogoIcon />
            <h1 className={classes.text}>Wrench CRM</h1>
        </div>
    );
}

export default Logo;
