import qs from "qs";
import request from "./request";
import api from "./api";

// 规整化URL
function normalizeQueryUrl(url, params) {
  if (typeof params === "object") {
    const divider = url.indexOf("?") > -1 ? "&" : "?";
    return `${url}${divider}${qs.stringify(params)}`;
  }
  return url;
}

// 构建请求方法
function createService(apiOpts) {
  const { name, ...restOpts } = apiOpts;
  return data => {
    // 开发环境打印调试信息
    // eslint-disable-next-line
    if (DEV) {
      console.group(name); // eslint-disable-line no-console
      console.log(`${restOpts.method} ${restOpts.url} ${new Date()}`); // eslint-disable-line no-console
      console.log("params: ", data); // eslint-disable-line no-console
      console.groupEnd(); // eslint-disable-line no-console
    }

    const params = {
      ...restOpts
    };

    if (params.method.toLowerCase() === "get") {
      params.url = normalizeQueryUrl(params.url, data || params.data);
    } else {
      params.data = data || params.data;
    }

    return request(params);
  };
}

const services = {};

for (const [key, value] of Object.entries(api)) {
  services[key] = createService(value);
}

export default services;
