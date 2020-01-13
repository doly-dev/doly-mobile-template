import React from "react";
import { Page, Button, Block } from "@wonder-ui/core";
import { NavBar, Icon } from "antd-mobile";
import routing from "~/stores/routing";

export default class ExceptionPage extends React.PureComponent {
  render() {
    return (
      <Page name="页面不存在">
        <NavBar
          icon={<Icon type="left" />}
          onLeftClick={() => {
            routing.goBack();
          }}
        >
          404
        </NavBar>
        <Block space={1} />
        <Button
          variant="outlined"
          size="medium"
          color="primary"
          fullWidth
          onClick={() => {
            routing.goBack();
          }}
        >
          返回上一页
        </Button>
        <Block space={1} />
        <Button
          to="/"
          variant="outlined"
          size="medium"
          color="primary"
          fullWidth
        >
          去首页
        </Button>
      </Page>
    );
  }
}
