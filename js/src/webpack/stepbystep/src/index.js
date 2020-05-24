import {chunk, join} from 'lodash-es';
import './scss/main.scss'
import {a} from './utils'

console.log(a());
console.log(join(['a', 'b', 'c']));
console.log(chunk([1, 2, 3], 2));

import './css/base.css'

// 给 app 标签再加一个 div 并且类名为 box
var app = document.getElementById('app')
var div = document.createElement('div')
div.className = 'box'
app.appendChild(div)
