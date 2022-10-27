import SeachButtonIcon from '../../UI/icons/SeachButtonIcon';
import classes from './SeachAddress.module.css'

function SeachAddress() {
    return (
        <div className={classes.container}>
            <h2>Поиск адресов</h2>
            <label className={classes.label} htmlFor='form'> Введите интересующий вас адрес </label>
            <form  name='form' className={classes.form} >
                <input placeholder='Введите интересующий вас адрес' className={classes.input} type="text" />
                <button className={classes.button}><SeachButtonIcon/> Поиск</button>
            </form>
    
            <ul className={classes.list}> <h2>Адреса</h2>
                <li>город Москва, улица Ленина 13, дом 32</li>
                <li>город Москва, улица Ленина 13, дом 32</li>
                <li>город Москва, улица Ленина 13, дом 32</li>
                <li>город Москва, улица Ленина 13, дом 32</li>
                <li>город Москва, улица Ленина 13, дом 32</li>
                <li>город Москва, улица Ленина 13, дом 32</li>
                <li>город Москва, улица Ленина 13, дом 32</li>
                <li>город Москва, улица Ленина 13, дом 32</li>
                <li>город Москва, улица Ленина 13, дом 32</li>
            </ul>
        </div>
    );
}

export default SeachAddress;