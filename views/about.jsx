var React = require('react');
var MasterLayout = require('./master');

var AboutComponent = React.createClass({
    render: function() {
        return (
            <MasterLayout name={ this.props.name }>
              <div>
                  <h2>About Page</h2>
              </div>
            </MasterLayout>
        )
    }
});

module.exports = AboutComponent;
