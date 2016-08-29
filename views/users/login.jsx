var React = require('react');
var MasterLayout = require('../master');

var LoginComponent = React.createClass({
  getInitialState: function() {
    return {foo: 'Hello!'};
  },

  handleChange: function(event) {
    this.setState({value: event.target.foo});
  },

  render: function() {
    return (
      <MasterLayout name={ this.props.name }>
        <h1>Login Here!</h1>

        <input
          type="text"
          value={this.state.foo}
          onChange={this.handleChange}
        />

      </MasterLayout>
    );
  }
});

module.exports = LoginComponent;
