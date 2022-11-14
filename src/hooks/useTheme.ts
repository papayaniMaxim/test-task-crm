import { useLayoutEffect, useState } from "react";

export const useTheme = () => {
  const initialTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(initialTheme || "light");
  useLayoutEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  localStorage.setItem("theme", theme);
  return { theme, setTheme };
};
