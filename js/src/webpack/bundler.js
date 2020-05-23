const fs = require("fs");
const path = require("path");
const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const babel = require("@babel/core");

function stepOne(filename) {
  const content = fs.readFileSync(filename, 'utf-8');
  const ast = parser.parse(content, {
    sourceType: 'module' // ES module
  });
  
  const dependencies = [];
  
  //遍历AST抽象语法树
  traverse(ast, {
    //获取通过import引入的模块
    ImportDeclaration({node}) {
      const dirname = path.dirname(filename);
      const newFile = './' + path.join(dirname, node.source.value)
      //保存所依赖的模块
      dependencies[node.source.value] = newFile;
    }
  });
  
  //通过@babel/core和@babel/preset-env进行代码的转换
  const {code} = babel.transformFromAst(ast, null, {
    presets: ["@babel/preset-env"]
  });
  
  return {
    filename,
    dependencies,
    code
  }
}
