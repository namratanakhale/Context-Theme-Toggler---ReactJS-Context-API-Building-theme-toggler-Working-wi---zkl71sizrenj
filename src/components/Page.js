import React, { useContext } from "react";
import { LocalThemedBox } from "./LocalThemedBox";
import { ThemeContext } from "./ThemeProvider";

const Page = () => {
  const themeCtx = useContext(ThemeContext);
  const light = themeCtx.theme.glabalThemeLight;
  console.log(light);

  return (
    <div
      className={`container bg-${light ? "light" : "dark"}`}
      id="themed-page"
    >
      <p
        id="themed-text-container"
        className={`txt-${light ? "light" : "dark"}`}
      >
        lorem ipsum dolor iterit n stuff
      </p>
      <button
        className={`btn btn-${light ? "light" : "dark"} txt-${
          light ? "light" : "dark"
        }`}
        id="themed-button"
      >
        Themed Button
      </button>
      <LocalThemedBox />
    </div>
  );
};

export { Page };