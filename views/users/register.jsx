var React = require('react');
var MasterLayout = require('../master');
var ReactDOM = require('react-dom');

var RegisterComponent = React.createClass({

  getInitialState: function() {
    return {
      username: 'Username',
      email: 'Email',
      password: '',
      password2: ''
    };
  },

  handleChange: function(event) {
    this.setState({
      username: event.target.username,
      email: event.target.email,
      password: event.target.password,
      password2: event.target.password2
    });
  },

  handleSubmit: function(e) {
    e.preventDefault();

    $.ajax({
      url: '/users/registration',
      dataType: 'json',
      contentType: 'application/json',
      type: 'POST',
      data: data,
      success: function(data) {
        this.setState({});
      }.bind(this),
      error: function(xhr, status, err) {
        //this.setState({data: user});
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  render: function() {
    return (
      <MasterLayout name={ this.props.name }>
        <h1>Register Here!</h1>

        <form ref="form" method="post" action="">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={this.state.username}
            onChange={this.handleChange}
          />

          <input
            type="text"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
          />

          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />

          <input
            type="password"
            name="password2"
            value={this.state.password}
            onChange={this.handleChange}
          />

          <button type="submit">
            Register
          </button>
        </form>

      </MasterLayout>
    )
  }
});

module.exports = RegisterComponent;
