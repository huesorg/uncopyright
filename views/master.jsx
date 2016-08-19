var React = require('react');

var MasterLayout = React.createClass({
    render: function() {
        return (
            <html>
                <head>
                    <title>{ this.props.name }</title>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
                    <link rel="stylesheet" href="https://code.getmdl.io/1.2.0/material.indigo-pink.min.css" />
                    <script defer src="https://code.getmdl.io/1.2.0/material.min.js"></script>
                    <link rel='stylesheet' href='/stylesheets/style.css' />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                </head>
                <body>
                    <div className="mdl-layout mdl-js-layout">
                        <header className="mdl-layout__header mdl-layout__header--scroll">
                            <div className="mdl-layout__header-row">
                              <span className="mdl-layout-title">Uncopyright Movement</span>
                              <div className="mdl-layout-spacer"></div>
                              <nav className="mdl-navigation">
                                <a className="mdl-navigation__link" href="">Why?</a>
                                <a className="mdl-navigation__link" href="">Why not?</a>
                                <a className="mdl-navigation__link" href="">Contribute</a>
                              </nav>
                            </div>
                        </header>

                        <div className="mdl-layout__drawer">
                            <span className="mdl-layout__title">Uncopyright Movement</span>
                            <nav className="mdl-navigation">
                                <a className="mdl-navigation__link" href="./">Home</a>
                                <a className="mdl-navigation__link" href="/projects">Works</a>
                                <a className="mdl-navigation__link" href="/about">About</a>
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
