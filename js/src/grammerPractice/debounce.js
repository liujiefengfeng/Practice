// 跟王者荣耀的回城功能，你复触发回城功能，那么只认最后一次，从最后一次触发开始计时

function debounce(fn, delay) {
  let timer = null;
  return function (...args) {
    const context = this;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, ...args)
    }, delay)
  }
}
