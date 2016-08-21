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
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/packery/2.1.1/packery.pkgd.min.js"></script>

                    <link rel='stylesheet' href='/stylesheets/style.css' />

                    <meta name="viewport" content="width=device-width, initial-scale=1" />

                    <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" href="/images/favicon/favicon-32x32.png" sizes="32x32" />
                    <link rel="icon" type="image/png" href="/images/favicon/favicon-16x16.png" sizes="16x16" />
                    <link rel="manifest" href="/images/favicon/manifest.json" />
                    <link rel="mask-icon" href="/images/favicon/safari-pinned-tab.svg" color="#5bbad5" />
                    <link rel="shortcut icon" href="/images/favicon/favicon.ico" />
                    <meta name="msapplication-config" content="/images/favicon/browserconfig.xml" />
                    <meta name="theme-color" content="#ffffff" />

                </head>
                <body>
                    <div className="mdl-layout mdl-js-layout">
                        <header className="mdl-layout__header mdl-layout__header--scroll">
                            <div className="mdl-layout__header-row">
                                <div className="mdl-layout-spacer"></div>
                                <nav className="mdl-navigation">
                                    <a className="mdl-navigation__link" alt="" href="">Why?</a>
                                    <a className="mdl-navigation__link" alt="" href="">Why not?</a>
                                    <a className="mdl-navigation__link" alt="" href="">Contribute</a>
                                </nav>
                            </div>
                        </header>

                        <div className="mdl-layout__drawer">
                            <div className="mdl-layout__title-wrap">
                                <span className="mdl-layout__title">Uncopyright Movement</span>
                            </div>
                            <nav className="mdl-navigation">
                                <a className="mdl-navigation__link" href="./">
                                    <i className="material-icons">home</i>
                                    Home
                                </a>
                                <a className="mdl-navigation__link" href="/projects">
                                    <i className="material-icons">view_list</i>
                                    Works
                                </a>
                                <a className="mdl-navigation__link" href="/about">
                                    <i className="material-icons">account_circle</i>
                                    About
                                </a>
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
