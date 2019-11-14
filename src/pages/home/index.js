import React from "react";
import { NavBar } from "antd-mobile";
import { Page, List, ListItem } from "@wonder-ui/core";

import routing from "~/stores/routing";

export default function() {
  return (
    <Page name="首页">
      <NavBar>首页</NavBar>
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
            routing.push("notFound");
          }}
        >
          不存在的页面
        </ListItem>
      </List>
    </Page>
  );
}
