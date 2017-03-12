'use strict';

const plugin = ({term, display, actions}) => {
  // It is your main plugin function
  // do something and call display() with your results
  console.log(term)
  console.log(display)
  console.log(actions)
  display({
    title: 'It works!',
    subtitle: `You entered ${term}`
    getPreview: () => (
      <span> 'Hello' </span>
    )
  })
};

module.exports = {
  fn: plugin
  keyword: 'techmeme'
}
