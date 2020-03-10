const { override, fixBabelImports, addLessLoader, addWebpackPlugin } = require('customize-cra');

// 你可以使用 antd-dayjs-webpack-plugin 插件用 Day.js 替换 momentjs 来大幅减小打包大小。
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: { '@primary-color': '#1DA57A' },
    }),
    addWebpackPlugin(new AntdDayjsWebpackPlugin()),
);
