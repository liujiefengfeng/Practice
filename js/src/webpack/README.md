example:
请编写一个bundler.js,将其中的ES6代码转换为ES5代码，并将这些文件打包，生成一段能在浏览器正确运行起来的代码。(最后输出say hello)

thoughts:
1、利用babel完成代码转换,并生成单个文件的依赖
2、生成依赖图谱
3、生成最后打包代码

step1:
转换代码、 生成依赖
@babel/parser生成AST抽象语法树
@babel/traverse进行AST遍历，记录依赖关系
@babel/core和@babel/preset-env进行代码的转换

step2
生成依赖图谱
