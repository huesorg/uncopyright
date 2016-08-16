var React = require('react');
var MasterLayout = require('./master');

var ModalComponent = React.createClass({
    render: function() {
        return (
            <MasterLayout name={ this.props.name }>
            <div>
                <h1>Welcome to { this.props.name }</h1>
                <p>You were referred by { this.props.projectRef.firstName} {this.props.projectRef.lastName}</p>
                <p>There are { this.props.projectCount } projects.</p>
                <a href="/projects">See Current Projects</a>
            </div>
          </MasterLayout>
        )
    }
});

module.exports = ModalComponent;
