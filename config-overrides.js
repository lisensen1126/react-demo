const path = require("path");
const {
    override,
    fixBabelImports,
    addWebpackAlias
} = require('customize-cra')

module.exports= override(
    addWebpackAlias({  //增加路径别名的处理
        '@': path.resolve('./src')
    }),
    fixBabelImports('import', {  //antd UI组件按需加载的处理
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
    })
)