## step list bellow

- [X] 搭建项目并打包 JS 文件 
- [X] 生产和开发模式
- [X] 覆盖默认 entry/output
- [X] 用 Babel 7 转译 ES6
- [X] Code Splitting
- [X] Lazy Loading、Prefetching /* webpackPrefetch: true */ 
- [] 自动生成 HTML 文件
- [] 处理 CSS/SCSS 文件
- [] JS Tree Shaking
- [] CSS Tree Shaking
- [] 图片处理汇总
- [] 字体文件处理
- [] 处理第三方 js 库
- [] 开发模式与 webpack-dev-server
- [] 开发模式和生产模式・实战
- [] 打包自定义函数库
- [] PWA 配置
- [] TypeScript 配置
- [] Eslint 配置
- [] 使用 DLLPlugin 加快打包速度
- [] 多页面打包配置
- [] 编写 loader
- [] 编写 plugin
- [] 编写 Bundle

### babel

- @babel/core
- @babel/preset-env: 包含 ES6、7 等版本的语法转化规则
- @babel/plugin-transform-runtime: 避免 polyfill 污染全局变量，减小打包体积. Babel 使用非常小的助手来完成常见功能。默认情况下，这将添加到需要它的每个文件中。这种重复有时是不必要的，尤其是当你的应用程序分布在多个文件上的时候。transform-runtime 可以重复使用 Babel 注入的程序代码来节省代码，减小体积。
- @babel/polyfill: ES6 内置方法和函数转化垫片: Babel 默认只转换新的 JavaScript 句法（syntax），而不转换新的 API，比如 Iterator、Generator、Set、Maps、Proxy、Reflect、Symbol、Promise 等全局对象，以及一些定义在全局对象上的方法（比如 Object.assign）都不会转码。必须使用 @babel/polyfill，为当前环境提供一个垫片。所谓垫片也就是垫平不同浏览器或者不同环境下的差异
- babel-loader: 负责 ES6 语法转化
