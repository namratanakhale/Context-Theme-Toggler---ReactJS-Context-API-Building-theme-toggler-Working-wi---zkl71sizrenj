
import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

const LocalThemedBox = () => {
  const themeCtx = useContext(ThemeContext);
  let localLight = themeCtx.theme.localThemeLight;
  return (
    <div
      style={{ width: "200px", height: "200px", border: "2px solid green" }}
      id="local-themed-box"
      className={`bg-${localLight ? "light" : "dark"}`}
    >
      {/* Write code below this line */}
      <p
        id="local-themed-text-container"
        className={`txt-${localLight ? "light" : "dark"}`}
      >
        This is some Text Inside Local Theme box
      </p>
      <button
        id="local-theme-toggler"
        className={`btn btn-${localLight ? "light" : "dark"} txt-${
          localLight ? "light" : "dark"
        }`}
        onClick={() => themeCtx.dispatch({ type: "toggleLocalTheme" })}
      >
        Toggle local theme to {localLight ? "dark" : "light"}
      </button>
    </div>
  );
};

export { LocalThemedBox };