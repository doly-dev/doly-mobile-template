import React from "react";
import { Page, List, ListItem } from "@wonder-ui/core";

import routing from "~/stores/routing";

export default () => {
  return (
    <Page name="首页">
      <List renderHeader={() => `页面列表`}>
        <ListItem
          arrow="horizontal"
          onClick={() => {
            routing.push("example");
          }}
        >
          示例
        </ListItem>
      </List>
    </Page>
  );
};
