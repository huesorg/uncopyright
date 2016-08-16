var React = require('react');

var ErrorComponent = React.createClass({
    render: function() {
        return (
            <div>
                <h1>Error!</h1>
                <p>{ this.props.message }</p>
                <p>{ this.props.error.status }</p>
                <p>{ this.props.error.stack }</p>
            </div>
        )
    }
});

module.exports = ErrorComponent;
