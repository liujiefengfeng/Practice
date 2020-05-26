Function.prototype.bind = function (context, ...args) {
  if (typeof this !== "function") {
    throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
  }
  
  let self = this;
  
  let fbound = function () {
    self.apply(this instanceof fbound ? this : context,
      args.concat(Array.prototype.slice.call(arguments)));
  };
  
  fbound.prototype = Object.create(self.prototype);
  
  return fbound;
};
