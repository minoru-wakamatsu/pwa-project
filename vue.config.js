//const { GenerateSW } = require("workbox-webpack-plugin");

module.exports = {
  publicPath: "/pwa-project",
  outputDir: "docs",
  pwa: {
    workboxOptions: {
      runtimeCaching: [
        {
          urlPattern: /\/api\/.*/,
          handler: "networkFirst",
          options: {
            cacheName: "medipad-api-cache",
            expiration: {
              maxEntries: 10,
              maxAgeSeconds: 300,
            },
            cacheableResponse: {
              statuses: [0, 200],
            },
          },
        },
      ],
    },
  },
  //   configureWebpack: (config) => {
  //     config.plugins.push(
  //       new GenerateSW({
  //         cacheId: "api-cache-v1",
  //         runtimeCaching: [
  //           {
  //             urlPattern: /\/api\/.+/,
  //             handler: "networkFirst",
  //             options: {
  //               cacheName: "api",
  //               expiration: {
  //                 maxEntries: 20,
  //                 maxAgeSeconds: 60 * 60 * 24 * 30,
  //               },
  //               cacheableResponse: {
  //                 statuses: [0, 200],
  //               },
  //             },
  //           },
  //         ],
  //       })
  //     );
  //   },
};
