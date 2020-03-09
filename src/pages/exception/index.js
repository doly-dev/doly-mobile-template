import React from "react";
import { Button, Block } from "@wonder-ui/core";

import PageContent from "~/components/PageContent";
import routing from "~/stores/routing";

export default class ExceptionPage extends React.PureComponent {
  render() {
    return (
      <PageContent name="页面不存在">
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
      </PageContent>
    );
  }
}
