import React, { memo } from "react";
import routes from "./router";
import { HashRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import YNHeader from "./components/Header";
import YNPlayerBar from "./pages/Player/Player_Bar";

import store from "./store";
import { Provider } from "react-redux";
export default memo(function App() {
  return (
    //共享store
    <Provider store={store}>
      <HashRouter>
        <YNHeader />
        {renderRoutes(routes)}
        <YNPlayerBar />
      </HashRouter>
    </Provider>
  );
});
