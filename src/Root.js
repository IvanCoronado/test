import React from "react";

import { Provider } from "react-redux";
import { store, reduxRouterHistory } from "./store";

import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

import { MatchSelector } from "./containers/MatchSelector/index";

export class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <MatchSelector />
        </ThemeProvider>
      </Provider>
    );
  }
}
