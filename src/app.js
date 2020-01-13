import "~/utils/polyfill";

import React from "react";
import ReactDom from "react-dom";
import { App, View } from "@wonder-ui/core";
import routerConfig from "~/router.config";
import routing from "~/stores/routing";

import NoMatchPage from "~/pages/exception";

const appConfig = {
  routes: routerConfig,
  routerStore: routing,
  on: {
    pageInit(name) {
      if (name) {
        document.title = name;
      }
    }
  }
};

function MyApp() {
  return (
    <App {...appConfig}>
      <View noMatch={<NoMatchPage />} />
    </App>
  );
}

ReactDom.render(<MyApp />, document.getElementById("root"));
