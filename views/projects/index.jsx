var React = require('react');
var MasterLayout = require('../master');
import Gravatar from 'react-gravatar';

var ListItemWrapper = React.createClass({
  render: function() {
    return (
      <div className="work mdl-cell mdl-card mdl-shadow--4dp mdl-cell--3-col mdl-cell--4-col-tablet">
        <div className="mdl-grid">
            <figure className="mdl-card__media mdl-cell mdl-cell--6-col">
                <Gravatar email={this.props.data.email} size={200} className="profile-image" https />
            </figure>
            <div className="work--icon mdl-cell mdl-cell--6-col mdl-cell--stretch">
                <i className={"material-icons " + this.props.data.categories}></i>
            </div>
        </div>
        <div className="mdl-card__title">
            <h3 className="mdl-card__title-text">
                {this.props.data.firstName} {this.props.data.lastName} is uncopyrighting {this.props.data.categories}
            </h3>
        </div>
        <div className="mdl-card__supporting-text">
            {this.props.data.description}
        </div>
        <div className="view-work mdl-card__actions mdl-card--border mdl-cell--bottom">
            <a
                className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
                href={"/projects/" + this.props.data._id}>
                View Work
            </a>
        </div>

      </div>
    );
  }
});

var ProjectListComponent = React.createClass({
  render: function() {
    return (
      <MasterLayout name={ this.props.name }>

        <div className="mdl-grid wrap">
            {this.props.projects.map(function(project) {
               return <ListItemWrapper key={project.id} data={project}/>;
            })}
        </div>

      </MasterLayout>
    );
  }
});

module.exports = ProjectListComponent;
