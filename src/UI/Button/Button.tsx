import { EventHandler, MouseEvent, ReactNode } from "react";
import Loader from "../loaders/Loader";
import classes from "./Button.module.css";

interface IProps {
  onClick?: EventHandler<MouseEvent>;
  isLoading?: boolean;
  iconSVG?: ReactNode;
  content: string;
}

function Button({ onClick, isLoading, iconSVG, content }: IProps) {
  return (
    <button onClick={onClick} className={classes.button}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {iconSVG}
          {content}
        </>
      )}
    </button>
  );
}

export default Button;
