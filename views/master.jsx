var React = require('react');

var MasterLayout = React.createClass({
    render: function() {
        return (
            <html>
                <head>
                    <title>{ this.props.name }</title>
                    <link rel="stylesheet" href="//fonts.googleapis.com/icon?family=Material+Icons" />
                    <link rel="stylesheet" href="//storage.googleapis.com/code.getmdl.io/1.0.1/material.min.css" />
                    <script src="//storage.googleapis.com/code.getmdl.io/1.0.1/material.min.js"></script>
                    <link rel='stylesheet' href='/stylesheets/style.css' />
                </head>
                <body>
                    <div className="mdl-layout mdl-js-layout">

                        <div className="mdl-layout__drawer">
                            <span className="mdl-layout__title">Uncopyright Movement</span>
                            <nav className="mdl-navigation">
                                <a className="mdl-navigation__link" href="./">Home</a>
                                <a className="mdl-navigation__link" href="/projects">Works</a>
                                <a className="mdl-navigation__link" href="#">About</a>
                            </nav>
                        </div>
                        <main className="mdl-layout__content">
                            { this.props.children }
                        </main>
                    </div>
                </body>
            </html>
        )
    }
});

module.exports = MasterLayout;
