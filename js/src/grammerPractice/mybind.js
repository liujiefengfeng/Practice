Function.prototype.mybind = function (context) {
  let self = this;
  let args = Array.prototype.slice.call(arguments, 1);
  let fBound = function () {
    let bindArgs = Array.prototype.slice.call(arguments, 1);
    return self.apply(this instanceof fBound ? this : context, bindArgs.concat(args))
  };
  
  fBound.prototype = Object.create(this.prototype);
  return fBound;
};

function biu() {
  // this.a = "Hey, this a is in the mybind file";
  // node 中的this 与 browser 中的this 不一样
  test();
  console.log("this inside biu", this)
  // <ref *1> Object [global] {
  //   global: [Circular *1],
  //     clearInterval: [Function: clearInterval],
  //   clearTimeout: [Function: clearTimeout],
  //   setInterval: [Function: setInterval],
  //   setTimeout: [Function: setTimeout] {
  //     [Symbol(nodejs.util.promisify.custom)]: [Function (anonymous)]
  //   },
  //   queueMicrotask: [Function: queueMicrotask],
  //   clearImmediate: [Function: clearImmediate],
  //   setImmediate: [Function: setImmediate] {
  //     [Symbol(nodejs.util.promisify.custom)]: [Function (anonymous)]
  //   }
  // }
}

console.log("this inside module", this); // {}

function test() {
  var a = "Hey, this a is in the mybind file";
  console.log(this.a)
}

console.log("run test");
test();
console.log("run biu");
biu();

let conext = {a: "Hey, this a is in the mybind func"};
let bindTest = test.mybind({a: "Hey, this a is in the mybind func"});
let bindOriginal = test.bind(conext);

console.log("bind test");
bindTest();
bindOriginal();
