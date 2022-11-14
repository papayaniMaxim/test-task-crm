import { Dispatch, EventHandler, MouseEvent, SetStateAction } from "react";
import Button from "../../../UI/Button/Button";
import SeachButtonIcon from "../../../UI/icons/SeachButtonIcon";
import Input from "../../../UI/Input/Input";
import classes from "./SeachAddressForm.module.css";

interface IProps {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
  isLoading: boolean;
  buttonHandler: EventHandler<MouseEvent>;
}

function SeachAddressForm({
  query,
  setQuery,
  isLoading,
  buttonHandler,
}: IProps) {
  return (
    <>
      <label className={classes.label} htmlFor="form">
        Введите интересующий вас адрес
      </label>
      <form name="form" className={classes.form}>
        <Input
          placeholder="Введите интересующий вас адрес"
          value={query}
          onChange={(e) => setQuery(() => e.target.value)}
          type="text"
        />

        <Button
          isLoading={isLoading}
          iconSVG={<SeachButtonIcon />}
          content={"Поиск"}
          onClick={buttonHandler}
        />
      </form>
    </>
  );
}

export default SeachAddressForm;
