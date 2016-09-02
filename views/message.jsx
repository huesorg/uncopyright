var React = require('react');

var MessageComponent = React.createClass({
  render: function() {
    return (
      <div>{this.props.message}</div>
    )
  }
});

module.exports = MessageComponent;
