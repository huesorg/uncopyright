var React = require('react');
var MasterLayout = require('../master');

var ProjectShowComponent = React.createClass({
  render: function() {
    return (
      <MasterLayout name={ this.props.name }>
          <div>
              <h3>{this.props.project.firstName} { this.props.project.lastName }</h3>
              <a href={this.props.project.url}>Project Site</a>
              <p>Categories: { this.props.project.categories }</p>
              <p>Description: { this.props.project.description }</p>
              <a href="/projects">Back</a>
          </div>
      </MasterLayout>
    )
  }
});

module.exports = ProjectShowComponent;
