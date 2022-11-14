import { EventHandler, MouseEvent, useState } from "react";
import { RootObject, Suggestion } from "../../interfaces/interface";
import getAddressPrompt from "../../services/getAddressPrompt";
import classes from "./SeachAddress.module.css";
import SeachAddressForm from "./SeachAddressForm/SeachAddressForm";
import SuggestionsList from "./SuggestionsList/SuggestionsList";

function SeachAddress() {
  const [query, setQuery] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [suggestions, setSuggestions] = useState<Suggestion[]>();
  const [error, setError] = useState(false);

  const buttonHandler: EventHandler<MouseEvent> = (e) => {
    setError(() => false);
    e.preventDefault();
    if (query.length >= 3) {
      setLoading(() => true);
      getAddressPrompt(query)
        .then((suggestions: RootObject) => {
          setSuggestions(suggestions.suggestions);
          setLoading(() => false);
        })
        .catch((error) => {
          setError(() => true);
          setLoading(() => false);
        });
    }
  };

  const validationMessage =
    query.length < 3 && query.length > 0 ? (
      <p className={classes.message}>
        Запрос должен быть не менее трех символов
      </p>
    ) : null;

  return (
    <div className={classes.container}>
      <h2>Поиск адресов</h2>
      <SeachAddressForm
        query={query}
        setQuery={setQuery}
        isLoading={loading}
        buttonHandler={buttonHandler}
      />
      {validationMessage}
      {error ? (
        <p className={classes.message}>Ошибка загрузки</p>
      ) : (
        <SuggestionsList suggestions={suggestions} />
      )}
    </div>
  );
}

export default SeachAddress;
