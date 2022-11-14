import { MouseEventHandler, useState } from "react";
import classes from "./ToggleButton.module.css";

interface IProps {
  onClick: MouseEventHandler;
  isOn?: boolean;
}

function ToggleButton({ onClick, isOn }: IProps) {
  const [on, setOn] = useState(isOn || false);

  return (
    <button
      className={classes.button}
      onClick={(e) => {
        setOn((prev) => !prev);
        onClick(e);
      }}
    >
      <div className={classes.toggle + " " + (on ? classes.on : "")}></div>
    </button>
  );
}

export default ToggleButton;
