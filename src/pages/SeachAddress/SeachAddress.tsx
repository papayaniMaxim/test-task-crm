import { EventHandler, MouseEvent, useMemo, useState } from 'react';
import { RootObject, Suggestion } from '../../interfaces/interface';
import getAddressPrompt from '../../services/getAddressPrompt';
import SeachButtonIcon from '../../UI/icons/SeachButtonIcon';
import Loader from '../../UI/loaders/Loader';
import classes from './SeachAddress.module.css'

function SeachAddress() {
    const [query, setQuery] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)
    const [suggestions, setSuggestions] = useState<Suggestion[]>()
    const [error, setError] = useState(false)

    const buttonHandler: EventHandler<MouseEvent> = (e) => {
        setError(() => false)
        e.preventDefault()
        if (query.length >= 3) {
            setLoading(() => true)
            getAddressPrompt(query)
                .then((suggestions: RootObject) => {
                    setSuggestions(suggestions.suggestions)
                    setLoading(() => false)
                })
                .catch(error => {
                    setError(() => true)
                    setLoading(() => false)
                })
        }
    }

    const suggestionsList = suggestions
        ? <ul className={classes.list}> <h2>Адреса</h2>
            {suggestions.length > 0
                ? suggestions?.map(suggestion => <li key={suggestion.value}>{suggestion.value}</li>)
                : <li>Не найдено</li>}
        </ul>
        : null

    const validationMessage = query.length < 3 && query.length > 0
        ? <p className={classes.message}>Запрос должен быть не менее трех символов</p>
        : null

    return (
        <div className={classes.container}>
            <h2>Поиск адресов</h2>
            <label className={classes.label} htmlFor='form'> Введите интересующий вас адрес </label>
            <form name='form' className={classes.form} >
                <input
                    placeholder='Введите интересующий вас адрес'
                    className={classes.input}
                    value={query}
                    onChange={(e) => setQuery(() => e.target.value)}
                    type="text" />
                <button onClick={buttonHandler} className={classes.button}>{loading ? <Loader /> : <><SeachButtonIcon />Поиск</>}</button>
            </form>

            {validationMessage}

            {error
                ? <p className={classes.message}>Ошибка загрузки</p>
                : suggestionsList
            }


        </div>
    );
}

export default SeachAddress;