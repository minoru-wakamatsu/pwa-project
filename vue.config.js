//const { GenerateSW } = require("workbox-webpack-plugin");

module.exports = {
  publicPath: "/pwa-project",
  outputDir: "docs",
  pwa: {
    workboxOptions: {
      runtimeCaching: [
        {
          urlPattern: /https:\/\/8045-2400-2412-2e3-8300-88c5-e1ff-772f-2e6f.ngrok.io\/api\/v1\/.*/,
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
        {
          urlPattern: /https:\/\/8045-2400-2412-2e3-8300-88c5-e1ff-772f-2e6f.ngrok.io\/api\/v1\/.*/,
          method: "POST",
          handler: "networkOnly",
          options: {
            backgroundSync: {
              name: "medipad-api-que",
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
