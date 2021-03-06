var React = require('react');
var MasterLayout = require('../master');

var LoginComponent = React.createClass({

  getInitialState: function() {
    return {
      email: '',
      password: ''
    };
  },

  handleChange: function(event) {
    this.setState({
      email: event.target.email,
      password: event.target.password
    });
  },

  messages: function() {
    if (this.props.error) {
      return (<p>{this.props.error.msg}</p>)
    } else {
      return ('')
    };
  },

  render: function() {
    return (
      <MasterLayout name={ this.props.name }>
        <h1>Login Here!</h1>

        {this.messages}

        <form ref="form" method="post" action="">

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

          <button type="submit">
            Login
          </button>

        </form>

      </MasterLayout>
    );
  }
});

module.exports = LoginComponent;
