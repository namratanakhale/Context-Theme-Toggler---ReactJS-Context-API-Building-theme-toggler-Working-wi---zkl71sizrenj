import React, { useReducer } from "react";

const ThemeContext = React.createContext({
  theme: {
    localThemeLight: true,
    glabalThemeLight: true,
  },
  dispatch: () => {},
});

const reducer = (state, action) => {
  switch (action.type) {
    case "toggleLocalTheme":
      return {
        ...state,
        localThemeLight: !state.localThemeLight,
      };
    case "toggleGlobalTheme":
      return {
        ...state,
        glabalThemeLight: !state.glabalThemeLight,
        localThemeLight: !state.glabalThemeLight,
      };
    default:
      return state;
  }
};
const intitalState = {
  localThemeLight: true,
  glabalThemeLight: true,
};

const ThemeProvider = (props) => {
  const [theme, dispatch] = useReducer(reducer, intitalState);

  return (
    <ThemeContext.Provider value={{ theme, dispatch }}>
      <React.Fragment>{props.children}</React.Fragment>
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };