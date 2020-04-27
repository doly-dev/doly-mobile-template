import React from "react";
import { List, ListItem } from "@wonder-ui/core";

import PageContent from "~/components/PageContent";
import routing from "~/stores/routing";

export default () => {
  return (
    <PageContent name="首页">
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
    </PageContent>
  );
};
