var React = require('react');
var MasterLayout = require('../master');

var EditUser = React.createClass({

  getInitialState: function() {
    return {
      username: this.props.user.username,
      email: this.props.user.email
    };
  },

  handleChange: function(event) {
    this.setState({
      username: event.target.username,
      email: event.target.email
    });
  },

  handleSubmit: function(e) {
    e.preventDefault();

    $.ajax({
      url: '/users/' + this.props.user.id,
      dataType: 'json',
      contentType: 'application/json',
      type: 'PUT',
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
        <h1>Edit User</h1>

        <form ref="form" method="post" action="">
          <div className="row">
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>

          <div className="row">
            <label>Email</label>
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>

          <button onClick={this.handleSubmit}>
            Update
          </button>
        </form>

      </MasterLayout>
    )
  }
});

module.exports = EditUser;
