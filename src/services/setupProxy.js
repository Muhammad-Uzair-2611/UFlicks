import { createProxyMiddleware } from "http-proxy-middleware";

const app = (app) => {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://api.themoviedb.org/3",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "",
      },
    })
  );
};

export default app;
