import { ReactElement, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ShevronIcon from "../../UI/icons/ShevronIcon";
import classes from "./MenuItem.module.css";

function MenuItem(props: {
  icon: ReactElement;
  text: string;
  submenuItems?: ReactElement[];
  path: string;
}) {
  const [openSubmenu, setOpenSubMenu] = useState(false);

  const { icon, text, submenuItems, path } = props;
  const location = useLocation();
  const isActive = location.pathname === path;
  const handler = () => setOpenSubMenu((prev) => !prev);

    return (
    <li>
      <Link to={path} className={classes.text} onClick={handler}>
        <i className={classes.icon}>{icon}</i>

        {text}

        {submenuItems && (
          <i className={openSubmenu ? classes.shevronDown : classes.shevronUp}>
            {<ShevronIcon />}
          </i>
        )}

        {isActive && <div className={classes.marker}></div>}
      </Link>

      {submenuItems && openSubmenu && (
        <ul className={classes.submenu}>{submenuItems?.map((item) => item)}</ul>
      )}
    </li>
  );
}

export default MenuItem;
