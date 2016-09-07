var React = require('react');
var MasterLayout = require('../master');

var UserShow = React.createClass({
  render: function() {
    return (
      <MasterLayout name={ this.props.name }>
        <h2>Welcome back, {this.props.user.username}!</h2>
      </MasterLayout>
    )
  }
});

module.exports = UserShow;
