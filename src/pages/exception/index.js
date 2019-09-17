import React from "react";
import { Page, Button, Block } from "@wonder-ui/core";
import { NavBar, Icon } from "antd-mobile";

export default class ExceptionPage extends React.Component {
  goBack = () => {
    const { history } = this.props;
    history.goBack();
  };

  render() {
    return (
      <Page name="错误页面">
        <NavBar
          icon={<Icon type="left" />}
          onLeftClick={() => {
            this.props.history.goBack();
          }}
        >404</NavBar>
        <Block space={1} />
        <Button variant="outlined" size="medium" color="primary" fullWidth onClick={()=>{this.props.history.goBack()}}>返回上一页</Button>
        <Block space={1} />
        <Button to="/" variant="outlined" size="medium" color="primary" fullWidth>去首页</Button>
      </Page>
    );
  }
}
