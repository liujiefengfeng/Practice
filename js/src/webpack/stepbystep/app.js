// ES6
import sum from './vendor/sum'

console.log(sum(1, 2));


// CommonJS
var minus = require("./vendor/minus");
console.log(minus(1, 2));

// AMD
// require(['./vendor/multi'], function(multi) {
//   console.log(multi(1, 2))
// })

// import '@babel/polyfill'

const array = [1, 2, 3]
const isES6 = () => console.log(...array)

isES6()

const arr = [new Promise(() => {}), new Promise(() => {})]

arr.map(item => {
  console.log(item)
});
