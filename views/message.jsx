var React = require('react');

var MessageList = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.messages.map(function(message) {
          return <MessageComponent key={message.index} data={message}/>
        })}
      </div>
    )
  }
});


var MessageComponent = React.createClass({
  render: function() {
    return (
      <div>{this.props.data.msg}</div>
    )
  }
});

module.exports = MessageList;
