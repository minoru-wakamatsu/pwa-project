module.exports = {
  baseUrl: "./",
  publicPath:
    process.env.NODE_ENV === "production"
      ? "/" //任意
      : "/",
};
