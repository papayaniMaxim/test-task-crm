import { ChangeEventHandler, HTMLInputTypeAttribute } from "react";
import classes from "./Input.module.css";

interface IProps {
  placeholder: string;
  value: string | number;
  onChange: ChangeEventHandler<HTMLInputElement>;
  type: HTMLInputTypeAttribute;
}
function Input({ placeholder, value, onChange, type }: IProps) {
  return (
    <input
      placeholder={placeholder}
      className={classes.input}
      value={value}
      onChange={onChange}
      type={type}
    />
  );
}

export default Input;
