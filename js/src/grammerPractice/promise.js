const isFunction = variable => typeof variable === 'function';
const PENDING = 'PENDING'
const FULFILLED = 'FULFILLED'
const REJECTED = 'REJECTED'

Array.prototype.sort((a, b) => a - b);


class MyPromise {
  
  constructor(handle) {
    if (isFunction(handle)) {
      throw new Error('MyPromise must accept a function as a parameter')
    }
    
    this.status = PENDING;
    this.value = undefined;
    this.fulfilledQueues = [];
    this.rejectedQueues = [];
    
    handle(this.resolve, this.reject)
  }
  
  resolve(value) {
    if (this.status !== PENDING) return;
    this.value = value;
    this.status = FULFILLED;
  }
  
  reject(err) {
    if (this.status !== PENDING) return
    this.status = REJECTED
    this.value = err
  }
  
  then(onFulfilled, onRejected) {
    const {status, value} = this;
    switch (status) {
      case PENDING:
        this.fulfilledQueues.push(onFulfilled);
        this.rejectedQueues.push(onRejected);
      case FULFILLED:
        onFulfilled(value)
        break;
      case REJECTED:
        onRejected(value)
        break;
    }
    
    return this;
  }
}
