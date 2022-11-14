import { Suggestion } from "../../../interfaces/interface";
import classes from "./SuggestionsList.module.css";

interface IProps {
  suggestions?: Suggestion[];
}

function SuggestionsList({ suggestions }: IProps) {
  if (!suggestions) return null;

  return (
    <ul className={classes.list}>
      {" "}
      <h2>Адреса</h2>
      {suggestions.length > 0 ? (
        suggestions?.map((suggestion) => (
          <li key={suggestion.value}>{suggestion.value}</li>
        ))
      ) : (
        <li>Не найдено</li>
      )}
    </ul>
  );
}

export default SuggestionsList;
