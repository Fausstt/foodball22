const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
    createProxyMiddleware("/endpoint", {
        target: "https://marketing.affboat.com/api/v3/integration?api_token=mVec2YGDK6LU9PiU4r8uBjGCP46nLHIjtVXy5h3rP583yeGvfowvx9A3TEVO",
        changeOrigin: true,
    });
};
