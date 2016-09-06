var React = require('react');
var MasterLayout = require('../master');
var MessageList = require('../message');

var RegisterComponent = React.createClass({

  getInitialState: function() {
    return {
      username: '',
      email: '',
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

  render: function() {
    var renderMessages;

    if (this.props.errors) {
      renderMessages = <MessageList messages={ this.props.errors }/>
    } else {
      renderMessages = null;
    }

    return (
      <MasterLayout name={ this.props.name }>
        <h1>Register Here!</h1>

        { renderMessages }

        <form ref="form" method="post" action="">

          <div className="row">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>

          <div className="row">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>

          <div className="row">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>

          <div className="row">
            <label>Password Confirmation</label>
            <input
              type="password"
              name="password2"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>

          <button type="submit">
            Register
          </button>
        </form>

      </MasterLayout>
    )
  }
});

module.exports = RegisterComponent;
