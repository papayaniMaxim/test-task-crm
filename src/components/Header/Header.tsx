import Logo from "../Logo/Logo";
import Person from "../Person/Person";
import classes from "./Header.module.css";

function Header() {
  return (
    <header className={classes.header}>
      <Logo />
      <Person />
    </header>
  );
}

export default Header;
