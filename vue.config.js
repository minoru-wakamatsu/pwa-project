module.exports = {
  //   publicPath: {
  //     process.env.NODE_ENV === "production"
  //     ? "./" //任意
  //     : "./",
  //   },
  devServer: {
    proxy: "http://localhost:3000",
    //proxy: "https://aac4-150-249-204-198.ngrok.io",
  },
  publicPath: "/pwa-project",
  outputDir: "docs",
  pwa: {
    workboxOptions: {
      runtimeCaching: [
        {
          urlPattern: /https:\/\/c780-150-249-204-198.ngrok.io\/api\/.*/,
          handler: "networkFirst",
          options: {
            cacheName: "api-cache",
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
};
