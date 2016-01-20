var React = require('react')
var DemoCharts = require('../components/demo-charts')
var DemoText = require('../components/demo-text')

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Hello from Electron!!!</h1>
        <DemoCharts />
        <DemoText />
      </div>
    )
  }
})
