module.exports = {
  //   publicPath: {
  //     process.env.NODE_ENV === "production"
  //     ? "./" //任意
  //     : "./",
  //   },
  devServer: {
    //proxy: "http://localhost:3000",
    proxy: "https://aac4-150-249-204-198.ngrok.io",
  },
  publicPath: "/pwa-project",
  outputDir: "docs",
};
