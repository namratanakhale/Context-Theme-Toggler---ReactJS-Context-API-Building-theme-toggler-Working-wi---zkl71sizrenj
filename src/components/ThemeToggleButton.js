import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

const ThemeToggleButton = () => {
  const themeCtx = useContext(ThemeContext);
  const light = themeCtx.theme.glabalThemeLight;
  console.log(light);

  return (
    <>
      <button
        id="global-theme-toggler"
        className={`btn btn-${light ? "light" : "dark"} txt-${
          light ? "light" : "dark"
        }`}
        onClick={() => themeCtx.dispatch({ type: "toggleGlobalTheme" })}
      >
        Switch to {light ? "dark" : "light"} theme
      </button>
    </>
  );
};
export { ThemeToggleButton };