import React from "react";
import { Page, Button, Block } from "@wonder-ui/core";
import { NavBar, Icon } from "antd-mobile";

import services from "~/services";
import picTangwei from "~/assets/images/tangwei.jpeg";
import Timer from "~/components/Timer";

import styles from "./style.less";

export default class ExamplePage extends React.Component {
  state = {
    loading: false,
    notices: []
  };

  getNotices = () => {
    const { loading } = this.state;
    if (loading) {
      return;
    }

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
      <Page name="示例">
        <NavBar
          icon={<Icon type="left" />}
          onLeftClick={() => {
            this.props.history.goBack();
          }}
        >示例</NavBar>
        <Block space={1} />
        <Button to="notFound" variant="outlined" size="medium" color="primary" fullWidth>点击跳转不存在的页面</Button>
        <h3>状态管理</h3>
        <p>暂时没有内置状态管理，推荐使用</p>
        <ol>
          <li>mobx+mobx-react</li>
          <li>mobx+mobx-react-lite</li>
          <li>redux</li>
        </ol>
        <h3>Component</h3>
        <Timer />
        <h3>Mock</h3>
        <div>
          <button
            className={styles.btn}
            onClick={this.getNotices}
            disabled={loading}
            type="button"
          >
            {loading ? "获取中..." : "获取通知列表"}
          </button>
          {notices.length > 0 && (
            <a
              onClick={this.clearNotices}
              style={{ marginLeft: 10 }}
            >
              清空
            </a>
          )}
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
        <h3>CSS</h3>
        <p>
          默认使用
          <a
            href="https://github.com/webpack-contrib/css-loader#modules"
            target="_blank"
            rel="noopener noreferrer"
          >
            css module
          </a>
          <br />
          <br />
          <em>每个独立组件和页面，单独放一个样式文件</em>
        </p>
        <span className={styles.bgColors}>
          <span className={styles.red}>赤</span>
          <span className={styles.orange}>橙</span>
          <span className={styles.yellow}>黄</span>
          <span className={styles.green}>绿</span>
          <span className={styles.cyan}>青</span>
          <span className={styles.blue}>蓝</span>
          <span className={styles.purple}>紫</span>
        </span>
        <h3>Image</h3>
        <img src={picTangwei} className={styles.pic} alt="" />
      </Page>
    );
  }
}
