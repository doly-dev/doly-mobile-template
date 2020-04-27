const delay = require("doly-mocker-api/utils/delay"); // eslint-disable-line
const api = require("../src/services/api");
const notices = require("./notices");

const noMock = process.env.MOCK === "none";

const mockdata = {
  ...notices
};

// 默认接口结构
const defaultRes = {
  errCode: "0000",
  requestId: "",
  errMsg: "mock api success"
};

/**
 * 创建接口mock
 * @param {Object} param0 接口相关数据
 */
function createApi({ method = "POST", url = "", res = {} }) {
  const ret =
    typeof res === "function"
      ? (req, response) =>
          response.send({
            ...defaultRes,
            ...res(req, response)
          })
      : {
          ...defaultRes,
          ...res
        };

  return {
    [`${method.toUpperCase()} ${url}`]: ret
  };
}

// mock数据
let mocks = {};

// eslint-disable-next-line
for (const prop in mockdata) {
  const mockObj = createApi({
    ...api[prop],
    res: mockdata[prop]
  });

  mocks = { ...mocks, ...mockObj };
}

module.exports = noMock ? {} : delay(mocks, 1000);
