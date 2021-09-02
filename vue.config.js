module.exports = {
  //   publicPath: {
  //     process.env.NODE_ENV === "production"
  //     ? "./" //任意
  //     : "./",
  //   },
  devServer: {
    proxy: "http://localhost:3000",
  },
  publicPath: "/pwa-project",
  outputDir: "docs",
};
