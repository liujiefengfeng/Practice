const React = require('react');

class StockItem extends React.Component{
  render() {
    const {name, price} = this.props;
    return (
      <div>
        <span> {name} </span>
        <span> {price} </span>
      </div>
    );
  }
};

StockItem.propTypes={
  name: React.PropTypes.string,
  price: React.PropTypes.string
};

module.exports = StockItem;
