import React from "react";
import { Page } from "@wonder-ui/core";
import routing from "~/stores/routing";

function isHomePage(path) {
  return path === "/";
}

function PageContent({ children, ...restProps }) {
  return (
    <Page
      navbar // 显示头部
      showBack={!isHomePage(routing.location.pathname)} // 显示头部左侧返回
      {...restProps}
    >
      {children}
    </Page>
  );
}

export default PageContent;
