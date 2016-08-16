var React = require('react');
var MasterLayout = require('./master');

var IndexComponent = React.createClass({
    render: function() {
        return (
            <MasterLayout name={ this.props.name }>
              <div>
                  <h1>Welcome to { this.props.name }</h1>
                  <p>There are { this.props.projectCount } projects.</p>
                  <a href="/projects">See Current Projects</a>
              </div>
            </MasterLayout>
        )
    }
});

module.exports = IndexComponent;
