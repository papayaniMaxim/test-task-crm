import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../UI/Button/Button";
import PopUp from "../../UI/PopUp/PopUp";
import classes from "./Tables.module.css";

function Tables() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className={classes.container}>
      <h2>Try to open PopUp</h2>
      <Button
        content="open"
        onClick={() => navigate(`${location.pathname}/popup`)}
      />
      <PopUp path={`/popup`}>
        <h2>PopUp</h2>
      </PopUp>
    </div>
  );
}

export default Tables;
