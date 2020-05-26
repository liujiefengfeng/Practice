// 公交车，10 分钟一趟，10 分钟内有多少人在公交站等我不管，10 分钟一到就发车

function throttle(fn, interval) {
  let can = true;
  return function (...args) {
    const context = this;
    if (!can) return;
    can = false;
    setTimeout(() => {
      fn.apply(context, args);
      can = true;
    }, interval)
  }
}


function throttleTwo(fn, interval) {
  let last = 0;
  return function (...args) {
    const context = this;
    const cur = new Date();
    if (cur - last > interval) {
      fn.apply(context, args);
      last = cur;
    }
  }
}
