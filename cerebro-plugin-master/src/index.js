'use strict';
const React = require('react');
const { memoize } = require('cerebro-tools');
const StockItem = require('./stockItem.jsx');
const _ = require('lodash');

const stockCode = 'sz000002';
const getStockData = () => (
    fetch(`http://stocks.sina.cn/aj/sh/info?code=${stockCode}`)
      .then(response => response.json())
  );

const plugin = ({term, display, actions}) => {
  // It is your main plugin function
  // do something and call display() with your results
  getStockData().then(stockData => {
    const latestPrice = stockData.data.hq.zuixin;
    const name = stockData.data.ah.name;
    console.log('stock data', stockData);
    const stockList = [
      {name: '万科企业', price: '12.00'},
      {name: '万科企业', price: '12.00'},
      {name: '万科企业', price: '12.00'},
      {name: '万科企业', price: '12.00'},
      ]
    display({
      title: 'It works!',
      subtitle: `You entered ${term}`,
      getPreview: ()=> (
        <div>
          {_.map(stockList, (stockItem, index) => <StockItem { ...stockItem }/>)}
        </div>
      )
    })
  });
};

module.exports = {
  fn: plugin,
  keyword: 'techmeme'
};
