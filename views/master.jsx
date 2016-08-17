var React = require('react');

var MasterLayout = React.createClass({
    render: function() {
        return (
            <html>
                <head>
                    <title>{ this.props.name }</title>
                    <link rel='stylesheet' href='/stylesheets/style.css' />
                    <link rel="stylesheet" href="//fonts.googleapis.com/icon?family=Material+Icons" />
                    <link rel="stylesheet" href="//storage.googleapis.com/code.getmdl.io/1.0.1/material.min.css" />
                    <script src="//storage.googleapis.com/code.getmdl.io/1.0.1/material.min.js"></script>
                </head>
                <body>
                    { this.props.children }
                </body>
            </html>
        )
    }
});

module.exports = MasterLayout;
