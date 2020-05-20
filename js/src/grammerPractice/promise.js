class Promise {
  callbacks = [];
  state = "pending";
  value = null;
  
  constructor(fn) {
    fn(this._resolve.bind(this), this._reject.bind(this))
  }
  
  then(onFulfilled) {
    return new Promise((resolve, reject) => {
      this._handle({
        onFulfilled: onFulfilled || null,
        onRejected: onRejected || null,
        resolve: resolve,
        reject: reject
      })
    })
  }
  
  _handle(callback) {
    if (this.state === "pending") {
      this.callbacks.push(callback);
      return;
    }
    
    let cb = this.state === "fulfilled" ? callback.onFulfilled : callback.onRejected;
    if (!cb) {
      cb = this.state === 'fulfilled' ? callback.resolve : callback.reject;
      cb(this.value);
      return;
    }
  }
  
  _resolve(value) {
    if (value && (typeof value === "object" || typeof value === "function")) {
      let then = value.then;
      if (typeof then === "function") {
        then.call(value, this._resolve(this));
        return;
      }
    }
    
    this.state = "fulfilled";
    this.value = value;
    this.callbacks.forEach(callback => this._handle(callback))
  }
  
  _reject(error) {
    this.state = "rejected";
    this.value = error;
    this.callbacks.forEach(callback => this._handle(callback))
  }
}
