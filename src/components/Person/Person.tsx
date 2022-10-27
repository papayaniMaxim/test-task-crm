import UserIcon from '../../UI/icons/UserIcon';
import classes from './Person.module.css'
function Person() {
    return (
        <div className={classes.container}>
            <UserIcon /> <span className={classes.text}>Имя Фамилия</span>
        </div>
    );
}

export default Person;