import { ChangeEvent, ChangeEventHandler, EventHandler, MouseEvent, useEffect, useState } from 'react';
import { RootObject, Suggestion } from '../../interfaces/interface';
import getAddressPrompt from '../../services/getAddressPrompt';
import SeachButtonIcon from '../../UI/icons/SeachButtonIcon';
import classes from './SeachAddress.module.css'

function SeachAddress() {
    const [query, setQuery] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)
    const [suggestions, setSuggestions] = useState<Suggestion[]>() 
        
    const buttonHandler: EventHandler<MouseEvent> = (e) => {
        e.preventDefault()
        if (query.length > 3) {
            setLoading(() => true)
            getAddressPrompt(query)
                .then((suggestions: RootObject) => setSuggestions(suggestions.suggestions))
                .then(() => setLoading(() => false))
        }
    } 

    useEffect(()=> console.log(suggestions), [suggestions])
    return (
        <div className={classes.container}>
            <h2>Поиск адресов</h2>
            <label className={classes.label} htmlFor='form'> Введите интересующий вас адрес </label>
            <form  name='form' className={classes.form} >
                <input
                    placeholder='Введите интересующий вас адрес'
                    className={classes.input}
                    value={query}
                    onChange={(e) => setQuery(()=> e.target.value)}
                    type="text" />
                <button onClick={buttonHandler} className={classes.button}><SeachButtonIcon/> Поиск</button>
            </form>
    
            <ul className={classes.list}> <h2>Адреса</h2>
                {suggestions?.map(suggestion => <li>{suggestion.value}</li>)}
            </ul>
        </div>
    );
}

export default SeachAddress;