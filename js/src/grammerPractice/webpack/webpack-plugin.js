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


// new HelloPlugin(options)
// HelloPlugin.apply(compiler)
// compiler.plugin(event, callback)

// Compiler + Compilation 都是 tapable 的实例

// 广播事件
// compiler.apply("event-name", params);
// compilation.apply("event-name", params);
//
// compiler.plugin("event-name", function (params) {
//
// });
// 监听事件
// compilation.plugin("event-name", function (params) {
//
// });
//
// compiler.hooks.compile.tap("MyPlugin", params => {
//   console.log("compile hook in a sync way");
// });
//
// compiler.hooks.run.tapAsync("MyPlugin", (compiler, callback) => {
//   console.log("run hook in an async way");
//   callback();
// });
//
// compiler.hooks.run.tapPromise("MyPlugin", compiler => {
//   return new Promise(resolve => setTimeout(resolve, 1000).then(() => {
//     console.log("run hook in a async and delay way");
//   }));
// });

class Hook {
  constructor(args) {
    this.taps = [];
    this.interceptors = [];
    this._args = args;
  }
  
  tap(name, fn) {
    this.taps.push({name, fn});
  }
}

class SyncHook extends Hook {
  call(name, fn) {
    try {
      this.taps.forEach(tap => tap.fn(name));
      fn(null, name);
    } catch (e) {
      fn(e)
    }
  }
}

class Compiler {
  constructor() {
    this.hooks = {
      run: new AsyncSeriesHook(["compiler"]),
      compile: new SyncHook(["params"])
    };
  }
  
  run() {
    this.hooks.run.callAsync(this, err => {
      this.compile(onCompiled);
    });
  }
  
  compile() {
    this.hooks.compile.call(params)
  }
}

class Myplugin {
  apply(compiler) {
    compiler.hooks.run.tap("Myplygin", () => {
      console.log("start to compile");
    });
    compiler.hooks.compiler.tapAsync("MyPlugin", (name, age) => {
      setTimeout(() => {
        console.log("compiling");
      }, 1000)
    });
  }
}

const myPlugin = new Myplugin();

const options = {
  plugins: [Myplugin]
};

let compiler = new Compiler(options);
compiler.run();
