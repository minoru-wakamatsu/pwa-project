module.exports = {
  publicPath: "/pwa-project",
  outputDir: "docs",
  pwa: {
    workboxOptions: {
      runtimeCaching: [
        {
          urlPattern: /\/api\/.+/,
          handler: "networkFirst",
          options: {
            cacheName: "api",
            expiration: {
              maxAgeSeconds: 60 * 60 * 24,
            },
            cacheableResponse: {
              statuses: [0, 200],
            },
          },
        },
      ],
    },
  },
};
