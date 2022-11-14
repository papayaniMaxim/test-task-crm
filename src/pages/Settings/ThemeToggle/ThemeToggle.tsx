import { MouseEventHandler } from "react";
import { useTheme } from "../../../hooks/useTheme";
import ToggleButton from "../../../UI/ToggleButton/ToggleButton";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const handler: MouseEventHandler = (e) => {
    if (theme === "dark") return setTheme(() => "light");
    return setTheme(() => "dark");
  };
    return <>
        <h2>Theme toggle</h2>
        <ToggleButton onClick={handler}/>
    </>;
}

export default ThemeToggle;
