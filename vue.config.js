const url = "https://api.zhuishushenqi.com/book/by-categories?gender=male&type=hot&major=玄幻&minor=&start=0&limit=20"

module.exports = {
    configureWebpack: {
        devServer: {
            proxy: {
                "/api": {
                    target: "https://api.zhuishushenqi.com",
                    pathRewrite: {"^/api": ""},
                    changeOrigin: true
                }
            }
        }
    }
}
