module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "Todo_List" : "/",
  css: {
    loaderOptions: {
      scss: {
        prependData: `@use "@/assets/scss/global.scss";`,
      },
    },
  },
};
