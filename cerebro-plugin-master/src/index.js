'use strict';
const { memoize } = require('cerebro-tools');

const stockCode = 'sz000001';
const getStockData = memoize((stockCode) => (
    fetch(`http://stocks.sina.cn/aj/sh/info?code=${stockCode}`)
      .then(response = response.json())
  ));

const plugin = ({term, display, actions}) => {
  // It is your main plugin function
  // do something and call display() with your results
  display({
    title: 'It works!',
    subtitle: `You entered ${term}`,
    getPreview: () => `<span> 'Hello' </span>`
  });

  getStockData().then(stockData => {
    console.log(stockData);
    const latestPrice = stockData.data.hq.zuixin;
    display({
      getPreview: ()=> `<span>${latestPrice}</span>`
    })
  });
};

module.exports = {
  fn: plugin,
  keyword: 'techmeme'
};
