import React from "react";
import { List, ListItem } from "@wonder-ui/core";

import PageContent from "~/components/PageContent";
import routing from "~/stores/routing";

export default function() {
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
        <ListItem
          arrow="horizontal"
          onClick={() => {
            routing.push("notFoundPage");
          }}
        >
          不存在的页面
        </ListItem>
      </List>
    </PageContent>
  );
}
