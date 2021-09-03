const { GenerateSW } = require("workbox-webpack-plugin");

module.exports = {
  publicPath: "/pwa-project",
  outputDir: "docs",
  configureWebpack: (config) => {
    config.plugins.push(
      new GenerateSW({
        cacheId: "api-cache-v1",
        runtimeCaching: [
          {
            urlPattern: /\/api\/.+/,
            handler: "networkFirst",
            options: {
              cacheName: "api",
              expiration: {
                maxEntries: 20,
                maxAgeSeconds: 60 * 60 * 24 * 30,
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      })
    );
  },
};
