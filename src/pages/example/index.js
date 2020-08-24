import React, { useState, useCallback } from "react";
import { Page, Button } from "@wonder-ui/core";

import Timer from "~/components/Timer";
import services from "~/services";

import styles from "./style.less";

export default () => {
  const [loading, setLoading] = useState(false);
  const [notices, setNotices] = useState([]);

  const getNotices = useCallback(() => {
    setLoading(true);

    return services
      .getNotices({ a: 1 })
      .then(res => {
        setNotices(res.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const clearNotices = useCallback(() => {
    setNotices([]);
  }, []);

  return (
    <Page name="示例">
      <div className={styles.content}>
        <h3>Mock</h3>
        <div>
          <Button onClick={getNotices} disabled={loading}>
            {loading ? "获取中..." : "获取通知列表"}
          </Button>
          {notices.length > 0 && <a onClick={clearNotices}>清空</a>}
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
    </Page>
  );
};
