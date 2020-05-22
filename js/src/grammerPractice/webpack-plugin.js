class HelloPlugin {
  constructor(options) {
  }
  
  apply(compiler) {
    compiler.hooks.emit.tap("HelloPlugin", (compilation) => {
    
    });
    
    compiler.plugin("emit", function (compilation, callback) {
      callback();
    });
  }
}

module.exports = HelloPlugin;
