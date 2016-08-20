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
                <div className="mdl-tabs mdl-js-tabs mdl-js-ripple-effect">
                    <div className="mdl-tabs__tab-bar">
                        <a href="#facts" className="mdl-tabs__tab is-active">Quick Facts</a>
                        <a href="#hopes" className="mdl-tabs__tab">Why?</a>
                        <a href="#fears" className="mdl-tabs__tab">Why Not?</a>
                    </div>
                    <div className="mdl-tabs__panel is-active" id="facts">
                        <ul className="why-list why-list--facts">
                            <li>Copyright is automatic. Uncopyright is a choice.</li>
                            <li>The {this.props.projectCount} works here are only a small portion of uncopyrighted work in the world.</li>
                            <li>We hope, throught this project, to create a movement of creatives who are gifting their work to the commons.</li>
                        </ul>
                    </div>
                    <div className="mdl-tabs__panel" id="hopes">
                        <ul className="why-list why-list--hopes">
                            <li>Palpatine grodin monkey-lizard cb-99 endocott rattataki sebulba.</li>
                            <li>Ka kendal sy fett roos nikto iv. </li>
                            <li>Draethos dorvalla codru-ji moff oppo. Boss veila dorvalla tsavong triclops dor sesswenna bail tharen. </li>
                            <li>Maris cognus sulorine lando. </li>
                            <li>a kendal sy fett roos nikto iv. Draethos dorvalla codru-ji moff oppo. </li>
                            <li>Jek mon trianii dormé givin drach'nam mustafar lowbacca darth.</li>
                            <li>Dat leia naberrie ahsoka. Briqualon roonan nadon zann hapes gunray orrin daala. </li>
                            <li>Nilgaard fett momaw bren taung auril. Jek mon trianii dormé givin drach'nam mustafar lowbacca darth. Skywalker klivian boltrunians fel massa watto. </li>
                        </ul>
                    </div>
                    <div className="mdl-tabs__panel" id="fears">
                        <ul className="why-list why-list--fears">
                            <li>a kendal sy fett roos nikto iv. Draethos dorvalla codru-ji moff oppo. </li>
                            <li>Nilgaard fett momaw bren taung auril. Jek mon trianii dormé givin drach'nam mustafar lowbacca darth. Skywalker klivian boltrunians fel massa watto. </li>
                            <li>Ka kendal sy fett roos nikto iv. </li>
                            <li>Draethos dorvalla codru-ji moff oppo. Boss veila dorvalla tsavong triclops dor sesswenna bail tharen. </li>
                            <li>Maris cognus sulorine lando. </li>
                            <li>Palpatine grodin monkey-lizard cb-99 endocott rattataki sebulba.</li>
                            <li>Jek mon trianii dormé givin drach'nam mustafar lowbacca darth.</li>
                            <li>Dat leia naberrie ahsoka. Briqualon roonan nadon zann hapes gunray orrin daala. </li>
                        </ul>
                    </div>
                </div>
            </MasterLayout>
        )
    }
});

module.exports = IndexComponent;
