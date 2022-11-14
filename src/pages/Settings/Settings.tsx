import ThemeToggle from "./ThemeToggle/ThemeToggle";
import classes from "./Settings.module.css";

function Settings() {
    return <div className={classes.container}>
      <ThemeToggle/>
  </div>;
}

export default Settings;
