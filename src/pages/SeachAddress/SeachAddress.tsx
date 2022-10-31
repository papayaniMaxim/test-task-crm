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

    const buttonHandler: EventHandler<MouseEvent> = (e) => {
        e.preventDefault()
        if (query.length >= 3) {
            setLoading(() => true)
            getAddressPrompt(query)
                .then((suggestions: RootObject) => setSuggestions(suggestions.suggestions))
                .then(() => setLoading(() => false))
        }
    }

    // Мемоизация будет полезна если подключить стейт менеджер типа Redux 
    // или использовать useContext c провайдером на App
    const suggestionsList = useMemo(() => {
        if (loading) return <Loader />
        if (!suggestions) return null

        return (

            <ul className={classes.list}> <h2>Адреса</h2>
                {suggestions.length > 0
                    ? suggestions?.map(suggestion => <li key={suggestion.value}>{suggestion.value}</li>)
                    : <li>Не найдено</li>}
            </ul>
        )

    }, [suggestions, loading])

    const validationMessage = query.length < 3 && query.length > 0
        ? <span className={classes.message}>Запрос должен быть не менее трех символов</span>
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
                <button onClick={buttonHandler} className={classes.button}><SeachButtonIcon /> Поиск</button>
            </form>

            {validationMessage}

            {suggestionsList}

        </div>
    );
}

export default SeachAddress;