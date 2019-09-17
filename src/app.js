import "~/utils/polyfill";

import React from "react";
import ReactDom from "react-dom";
import { App, View } from '@wonder-ui/core';
import routerConfig from "~/router.config";
import routing from '~/stores/routing';

const appConfig = {
  routes: routerConfig,
  routerStore: routing,
  on: {
    pageInit(name){
      if(name){
        document.title = name;
      }
    }
  }
}

function DolyApp() {
  return (
    <App
      {...appConfig}
    >
      <View />
    </App>
  )
}

ReactDom.render(<DolyApp />, document.getElementById("root"));
