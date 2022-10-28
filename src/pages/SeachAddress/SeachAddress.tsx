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
        if (query.length > 3) {
            setLoading(() => true)
            getAddressPrompt(query)
                .then((suggestions: RootObject) => setSuggestions(suggestions.suggestions))
                .then(() => setLoading(() => false))
        }
    }

    // Мемоизация будет полезна если подключить стейт менеджер типа Redux 
    // или использовать useContext c провайдером на App
    const suggestionsList = useMemo(() => {

        return (
            <ul className={classes.list}> <h2>Адреса</h2>
                {loading
                    ? <Loader />
                    : suggestions && suggestions.length > 0
                        ? suggestions?.map(suggestion => <li key={suggestion.value}>{suggestion.value}</li>)
                        : <li>Список пуст</li>}
            </ul>
        )

    }, [suggestions, loading])

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

            {suggestionsList}

        </div>
    );
}

export default SeachAddress;