import React from "react";
import { Page } from "@wonder-ui/core";
import routing from "~/stores/routing";

function isHomePage(path) {
  return path === "/";
}

function PageContent({ children, ...restProps }) {
  return (
    <Page
      navbar
      showBack={!isHomePage(routing.location.pathname)}
      {...restProps}
    >
      {children}
    </Page>
  );
}

export default PageContent;
