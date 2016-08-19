var React = require('react');
var MasterLayout = require('./master');

var IndexComponent = React.createClass({
    render: function() {
        return (
            <MasterLayout name={ this.props.name }>
                <div className="welcome">
                    <div className="welcome__content">
                        <h1 className="welcome__title">
                            Welcome to { this.props.name }
                        </h1>
                        <p className="welcome__message">
                            All <span>{ this.props.projectCount }</span> works you find here have been uncopyrighted <span>by their creator(s)</span> and gifted to the commons.
                        </p>
                        <a className="mdl-button cta-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" href="/about">
                            Submit a Work
                        </a>

                        <a className="mdl-button cta-button mdl-shadow-2dp cta-button--secondary mdl-js-button mdl-js-ripple-effect" href="/about">
                            Browse All
                        </a>
                    </div>
                </div>
                <div className="mdl-grid wrap">
                </div>
            </MasterLayout>
        )
    }
});

module.exports = IndexComponent;
