Function.prototype.call = function (context, ...args) {
  var context = context || window;
  let fn = new Symbol('fn');
  context.fn = fn;
  
  let result = eval('context.fn(...args)');
  
  delete context.fn;
  return result;
}
