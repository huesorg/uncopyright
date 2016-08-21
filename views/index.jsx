var React = require('react');
var MasterLayout = require('./master');

/* Tried. Couldn't figure out how to map the project

var HopesListWrapper = React.createClass({
    render: function() {
        return (
            <li id={ this.props.id } className="hope packery-item">
                { this.props.description }
            </li>
        )
    }
});

var FearsListWrapper = React.createClass({
    render: function() {
        return (
            <li id={ this.props.id } className="fear packery-item">
                { this.props.description }
            </li>
        )
    }
});

*/

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
                        <a
                            className="mdl-button cta-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
                            href="https://hues.typeform.com/to/ahz9lb">
                            Submit a Work
                        </a>

                        <a
                            className="mdl-button cta-button mdl-shadow-2dp cta-button--secondary mdl-js-button mdl-js-ripple-effect"
                            href="/projects">
                            Browse All
                        </a>
                    </div>
                </div>
                <div className="mdl-tabs mdl-tabs--home mdl-js-tabs mdl-js-ripple-effect">
                    <div className="mdl-tabs__tab-bar">
                        <a href="#facts" className="mdl-tabs__tab mdl-tabs__tab--facts is-active">Quick Facts</a>
                        <a href="#hopes" className="mdl-tabs__tab mdl-tabs__tab--hopes">Why?</a>
                        <a href="#fears" className="mdl-tabs__tab mdl-tabs__tab--fears">Why Not?</a>
                    </div>
                    <div className="mdl-tabs__panel is-active" id="facts">
                        <ul className="why-list why-list--facts">
                            <li className="packery-item">
                                <div className="why-list__icon">
                                    <i className="material-icons">
                                        language
                                    </i>
                                </div>
                                <div className="why-list__text">
                                    The goal of this project is to create a global movement of creatives who are gifting their work to the commons.
                                </div>
                            </li>
                            <li className="packery-item">
                                <div className="why-list__icon">
                                    <i className="material-icons">
                                        lock_open
                                    </i>
                                </div>
                                <div className="why-list__text">
                                    Copyright is automatic. Uncopyright is a choice.
                                </div>
                            </li>
                            <li className="packery-item">
                                <div className="why-list__icon">
                                    <i className="material-icons">
                                        extension
                                    </i>
                                </div>
                                <div className="why-list__text">
                                    The {this.props.projectCount} works here are only a small portion of uncopyrighted work in the world.
                                </div>
                            </li>
                            <li className="packery-item">
                                <div className="why-list__icon">
                                    <i className="material-icons">
                                        grid_off
                                    </i>
                                </div>
                                <div className="why-list__text">
                                    You don't have to submit work here to uncopyright it. Just mark your work "uncopyright".
                                </div>
                            </li>
                            <li className="packery-item">
                                <div className="why-list__icon">
                                    <i className="material-icons">
                                        recent_actors
                                    </i>
                                </div>
                                <div className="why-list__text">
                                    Submit work to help others find it, and to connect it to you as a creator.
                                </div>
                            </li>
                            <li className="packery-item">
                                <div className="why-list__icon">
                                    <i className="material-icons">
                                        money_off
                                    </i>
                                </div>
                                <div className="why-list__text">
                                    This project is free, unmonetized, open source, and (obviously?) uncopyrighted.
                                </div>
                            </li>

                            <div className="why-list--cta">
                                <a
                                    className="mdl-button cta-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
                                    href="https://hues.typeform.com/to/ahz9lb">
                                    Submit a Work
                                </a>
                            </div>
                        </ul>
                    </div>
                    <div className="mdl-tabs__panel" id="hopes">
                        <ul className="why-list why-list--hopes">
                            <li className="packery-item">
                                <div className="why-list__icon">
                                    <i className="material-icons">
                                        tag_faces
                                    </i>
                                </div>
                                <div className="why-list__text">
                                    Palpatine grodin monkey-lizard cb-99 endocott rattataki sebulba.
                                </div>
                                <div className="why-list__actions">
                                    <a className="mdl-js-ripple-effect">
                                        Source Name
                                    </a>
                                    <button className="mdl-button mdl-js-ripple-effect mdl-js-button mdl-button--icon">
                                        <i className="material-icons">more_vert</i>
                                    </button>
                                </div>
                            </li>
                            <li className="packery-item">
                                <div className="why-list__icon">
                                    <i className="material-icons">
                                        tag_faces
                                    </i>
                                </div>
                                <div className="why-list__text">
                                    Ka kendal sy fett roos nikto iv.
                                </div>
                                <div className="why-list__actions">
                                    <a className="mdl-js-ripple-effect">
                                        Source Name
                                    </a>
                                    <button className="mdl-button mdl-js-ripple-effect mdl-js-button mdl-button--icon">
                                        <i className="material-icons">more_vert</i>
                                    </button>
                                </div>
                            </li>
                            <li className="packery-item">
                                <div className="why-list__icon">
                                    <i className="material-icons">
                                        tag_faces
                                    </i>
                                </div>
                                <div className="why-list__text">
                                    Draethos dorvalla codru-ji moff oppo. Boss veila dorvalla tsavong triclops dor sesswenna bail tharen.
                                </div>
                                <div className="why-list__actions">
                                    <a className="mdl-js-ripple-effect">
                                        Source Name
                                    </a>
                                    <button className="mdl-button mdl-js-ripple-effect mdl-js-button mdl-button--icon">
                                        <i className="material-icons">more_vert</i>
                                    </button>
                                </div>
                            </li>
                            <li className="packery-item">
                                <div className="why-list__icon">
                                    <i className="material-icons">
                                        tag_faces
                                    </i>
                                </div>
                                <div className="why-list__text">
                                    Maris cognus sulorine lando.
                                </div>
                                <div className="why-list__actions">
                                    <a className="mdl-js-ripple-effect">
                                        Source Name
                                    </a>
                                    <button className="mdl-button mdl-js-ripple-effect mdl-js-button mdl-button--icon">
                                        <i className="material-icons">more_vert</i>
                                    </button>
                                </div>
                            </li>
                            <li className="packery-item">
                                <div className="why-list__icon">
                                    <i className="material-icons">
                                        tag_faces
                                    </i>
                                </div>
                                <div className="why-list__text">
                                    a kendal sy fett roos nikto iv. Draethos dorvalla codru-ji moff oppo.
                                </div>
                                <div className="why-list__actions">
                                    <a className="mdl-js-ripple-effect">
                                        Source Name
                                    </a>
                                    <button className="mdl-button mdl-js-ripple-effect mdl-js-button mdl-button--icon">
                                        <i className="material-icons">more_vert</i>
                                    </button>
                                </div>
                            </li>
                            <li className="packery-item">
                                <div className="why-list__icon">
                                    <i className="material-icons">
                                        tag_faces
                                    </i>
                                </div>
                                <div className="why-list__text">
                                    Jek mon trianii dormé givin drach'nam mustafar lowbacca darth.
                                </div>
                                <div className="why-list__actions">
                                    <a className="mdl-js-ripple-effect">
                                        Source Name
                                    </a>
                                    <button className="mdl-button mdl-js-ripple-effect mdl-js-button mdl-button--icon">
                                        <i className="material-icons">more_vert</i>
                                    </button>
                                </div>
                            </li>
                            <li className="packery-item">
                                <div className="why-list__icon">
                                    <i className="material-icons">
                                        tag_faces
                                    </i>
                                </div>
                                <div className="why-list__text">
                                    Dat leia naberrie ahsoka. Briqualon roonan nadon zann hapes gunray orrin daala.
                                </div>
                                <div className="why-list__actions">
                                    <a className="mdl-js-ripple-effect">
                                        Source Name
                                    </a>
                                    <button className="mdl-button mdl-js-ripple-effect mdl-js-button mdl-button--icon">
                                        <i className="material-icons">more_vert</i>
                                    </button>
                                </div>
                            </li>
                            <li className="packery-item">
                                <div className="why-list__icon">
                                    <i className="material-icons">
                                        tag_faces
                                    </i>
                                </div>
                                <div className="why-list__text">
                                    Nilgaard fett momaw bren taung auril. Jek mon trianii dormé givin drach'nam mustafar lowbacca darth. Skywalker klivian boltrunians fel massa watto.
                                </div>
                                <div className="why-list__actions">
                                    <a className="mdl-js-ripple-effect">
                                        Source Name
                                    </a>
                                    <button className="mdl-button mdl-js-ripple-effect mdl-js-button mdl-button--icon">
                                        <i className="material-icons">more_vert</i>
                                    </button>
                                </div>
                            </li>
                            <div className="why-list--cta">
                                <a
                                    className="mdl-button cta-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
                                    href="https://hues.typeform.com/to/ahz9lb">
                                    Submit a Work
                                </a>
                            </div>
                        </ul>
                    </div>
                    <div className="mdl-tabs__panel" id="fears">
                        <ul className="why-list why-list--fears">
                            <li className="packery-item">
                                <div className="why-list__icon">
                                    <i className="material-icons">
                                        tag_faces
                                    </i>
                                </div>
                                <div className="why-list__text">
                                    Ka kendal sy fett roos nikto iv.
                                </div>
                                <div className="why-list__actions">
                                    <a className="mdl-js-ripple-effect">
                                        Source Name
                                    </a>
                                    <button className="mdl-button mdl-js-ripple-effect mdl-js-button mdl-button--icon">
                                        <i className="material-icons">more_vert</i>
                                    </button>
                                </div>
                            </li>
                            <li className="packery-item">
                                <div className="why-list__icon">
                                    <i className="material-icons">
                                        tag_faces
                                    </i>
                                </div>
                                <div className="why-list__text">
                                    Palpatine grodin monkey-lizard cb-99 endocott rattataki sebulba.
                                </div>
                                <div className="why-list__actions">
                                    <a className="mdl-js-ripple-effect">
                                        Source Name
                                    </a>
                                    <button className="mdl-button mdl-js-ripple-effect mdl-js-button mdl-button--icon">
                                        <i className="material-icons">more_vert</i>
                                    </button>
                                </div>
                            </li>
                            <li className="packery-item">
                                <div className="why-list__icon">
                                    <i className="material-icons">
                                        tag_faces
                                    </i>
                                </div>
                                <div className="why-list__text">
                                    Draethos dorvalla codru-ji moff oppo. Boss veila dorvalla tsavong triclops dor sesswenna bail tharen.
                                </div>
                                <div className="why-list__actions">
                                    <a className="mdl-js-ripple-effect">
                                        Source Name
                                    </a>
                                    <button className="mdl-button mdl-js-ripple-effect mdl-js-button mdl-button--icon">
                                        <i className="material-icons">more_vert</i>
                                    </button>
                                </div>
                            </li>
                            <li className="packery-item">
                                <div className="why-list__icon">
                                    <i className="material-icons">
                                        tag_faces
                                    </i>
                                </div>
                                <div className="why-list__text">
                                    a kendal sy fett roos nikto iv. Draethos dorvalla codru-ji moff oppo.
                                </div>
                                <div className="why-list__actions">
                                    <a className="mdl-js-ripple-effect">
                                        Source Name
                                    </a>
                                    <button className="mdl-button mdl-js-ripple-effect mdl-js-button mdl-button--icon">
                                        <i className="material-icons">more_vert</i>
                                    </button>
                                </div>
                            </li>
                            <li className="packery-item">
                                <div className="why-list__icon">
                                    <i className="material-icons">
                                        tag_faces
                                    </i>
                                </div>
                                <div className="why-list__text">
                                    Jek mon trianii dormé givin drach'nam mustafar lowbacca darth.
                                </div>
                                <div className="why-list__actions">
                                    <a className="mdl-js-ripple-effect">
                                        Source Name
                                    </a>
                                    <button className="mdl-button mdl-js-ripple-effect mdl-js-button mdl-button--icon">
                                        <i className="material-icons">more_vert</i>
                                    </button>
                                </div>
                            </li>
                            <li className="packery-item">
                                <div className="why-list__icon">
                                    <i className="material-icons">
                                        tag_faces
                                    </i>
                                </div>
                                <div className="why-list__text">
                                    Maris cognus sulorine lando.
                                </div>
                                <div className="why-list__actions">
                                    <a className="mdl-js-ripple-effect">
                                        Source Name
                                    </a>
                                    <button className="mdl-button mdl-js-ripple-effect mdl-js-button mdl-button--icon">
                                        <i className="material-icons">more_vert</i>
                                    </button>
                                </div>
                            </li>
                            <li className="packery-item">
                                <div className="why-list__icon">
                                    <i className="material-icons">
                                        tag_faces
                                    </i>
                                </div>
                                <div className="why-list__text">
                                    Dat leia naberrie ahsoka. Briqualon roonan nadon zann hapes gunray orrin daala.
                                </div>
                                <div className="why-list__actions">
                                    <a className="mdl-js-ripple-effect">
                                        Source Name
                                    </a>
                                    <button className="mdl-button mdl-js-ripple-effect mdl-js-button mdl-button--icon">
                                        <i className="material-icons">more_vert</i>
                                    </button>
                                </div>
                            </li>
                            <li className="packery-item">
                                <div className="why-list__icon">
                                    <i className="material-icons">
                                        tag_faces
                                    </i>
                                </div>
                                <div className="why-list__text">
                                    Nilgaard fett momaw bren taung auril. Jek mon trianii dormé givin drach'nam mustafar lowbacca darth. Skywalker klivian boltrunians fel massa watto.
                                </div>
                                <div className="why-list__actions">
                                    <a className="mdl-js-ripple-effect">
                                        Source Name
                                    </a>
                                    <button className="mdl-button mdl-js-ripple-effect mdl-js-button mdl-button--icon">
                                        <i className="material-icons">more_vert</i>
                                    </button>
                                </div>
                            </li>
                            <div className="why-list--cta">
                                <a
                                    className="mdl-button cta-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
                                    href="https://hues.typeform.com/to/ahz9lb">
                                    Submit a Work
                                </a>
                            </div>
                        </ul>
                    </div>
                </div>
            </MasterLayout>
        )
    }
});

module.exports = IndexComponent;
