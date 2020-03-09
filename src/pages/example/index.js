import React from "react";
import { Button } from "@wonder-ui/core";

import PageContent from "~/components/PageContent";
import Timer from "~/components/Timer";
import services from "~/services";

import styles from "./style.less";

export default class ExamplePage extends React.Component {
  state = {
    loading: false,
    notices: []
  };

  getNotices = () => {
    this.setState({
      loading: true
    });

    services
      .getNotices()
      .then(res => {
        this.setState({
          notices: res.data
        });
      })
      .finally(() => {
        this.setState({
          loading: false
        });
      });
  };

  clearNotices = () => {
    this.setState({
      notices: []
    });
  };

  render() {
    const { loading, notices } = this.state;

    return (
      <PageContent name="示例">
        <div className={styles.content}>
          <h3>Mock</h3>
          <div>
            <Button onClick={this.getNotices} disabled={loading}>
              {loading ? "获取中..." : "获取通知列表"}
            </Button>
            {notices.length > 0 && <a onClick={this.clearNotices}>清空</a>}
          </div>
          <div>
            {notices.length > 0 ? (
              <ul>
                {notices.map(notice => (
                  <li key={notice.timestamp}>{notice.content}</li>
                ))}
              </ul>
            ) : (
              <span style={{ color: "gray" }}>暂无通知</span>
            )}
          </div>
          <h3>Component</h3>
          <Timer />
        </div>
      </PageContent>
    );
  }
}
