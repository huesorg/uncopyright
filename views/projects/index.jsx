var React = require('react');
var MasterLayout = require('../master');

var ListItemWrapper = React.createClass({
  render: function() {
    return (
      <li>
        {this.props.data.firstName}  {this.props.data.lastName},
        <a href={"/projects/" + this.props.data._id}>Project Page</a>,
        Categories: { this.props.data.categories }
      </li>
    );
  }
});

var ProjectListComponent = React.createClass({
  render: function() {
    return (
      <MasterLayout name={ this.props.name }>

        <div>
          <ul>
            {this.props.projects.map(function(project) {
               return <ListItemWrapper key={project.id} data={project}/>;
            })}
          </ul>
        </div>

      </MasterLayout>
    );
  }
});

module.exports = ProjectListComponent;
