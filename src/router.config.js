// 路由配置
export default [
  {
    path: "/",
    async: () => import("~/pages/home"),
    exact: true
  },
  {
    path: "/example",
    async: () => import("~/pages/example"),
    exact: true
  }
];
