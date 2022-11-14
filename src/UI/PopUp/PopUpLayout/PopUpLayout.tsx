import { MouseEventHandler, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./PopUpLayout.module.css";

function PopUpLayout(props: { children: ReactNode }) {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  const backgroundHandler: MouseEventHandler = (e) => {
      setOpen(() => false)
      setTimeout(()=>navigate(-1), 300);
  };

  const contentHandler: MouseEventHandler = (e) => {
    e.stopPropagation();
  };

    const backgroundClass = classes.background + ' ' + (open? '': classes.close)

  return (
    <div className={backgroundClass} onClick={backgroundHandler}>
      <div className={classes.content} onClick={contentHandler}>
        {props.children}
      </div>
    </div>
  );
}

export default PopUpLayout;
