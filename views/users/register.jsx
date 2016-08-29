var React = require('react');
var MasterLayout = require('../master');

var RegisterComponent = React.createClass({
  render: function() {
    return (
      <MasterLayout name={ this.props.name }>
        <h1>Register Here!</h1>

      </MasterLayout>
    )
  }
});

module.exports = RegisterComponent;
