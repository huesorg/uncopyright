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
                            <li className="packery-item">Copyright is automatic. Uncopyright is a choice.</li>
                            <li className="packery-item">The {this.props.projectCount} works here are only a small portion of uncopyrighted work in the world.</li>
                            <li className="packery-item">We hope, throught this project, to create a movement of creatives who are gifting their work to the commons.</li>
                        </ul>
                    </div>
                    <div className="mdl-tabs__panel" id="hopes">
                        <ul className="why-list why-list--hopes">
                            <li className="packery-item">Palpatine grodin monkey-lizard cb-99 endocott rattataki sebulba.</li>
                            <li className="packery-item">Ka kendal sy fett roos nikto iv. </li>
                            <li className="packery-item">Draethos dorvalla codru-ji moff oppo. Boss veila dorvalla tsavong triclops dor sesswenna bail tharen. </li>
                            <li className="packery-item">Maris cognus sulorine lando. </li>
                            <li className="packery-item">a kendal sy fett roos nikto iv. Draethos dorvalla codru-ji moff oppo. </li>
                            <li className="packery-item">Jek mon trianii dormé givin drach'nam mustafar lowbacca darth.</li>
                            <li className="packery-item">Dat leia naberrie ahsoka. Briqualon roonan nadon zann hapes gunray orrin daala. </li>
                            <li className="packery-item">Nilgaard fett momaw bren taung auril. Jek mon trianii dormé givin drach'nam mustafar lowbacca darth. Skywalker klivian boltrunians fel massa watto. </li>
                        </ul>
                    </div>
                    <div className="mdl-tabs__panel" id="fears">
                        <ul className="why-list why-list--fears">
                            <li className="packery-item">a kendal sy fett roos nikto iv. Draethos dorvalla codru-ji moff oppo. </li>
                            <li className="packery-item">Nilgaard fett momaw bren taung auril. Jek mon trianii dormé givin drach'nam mustafar lowbacca darth. Skywalker klivian boltrunians fel massa watto. </li>
                            <li className="packery-item">Ka kendal sy fett roos nikto iv. </li>
                            <li className="packery-item">Draethos dorvalla codru-ji moff oppo. Boss veila dorvalla tsavong triclops dor sesswenna bail tharen. </li>
                            <li className="packery-item">Maris cognus sulorine lando. </li>
                            <li className="packery-item">Palpatine grodin monkey-lizard cb-99 endocott rattataki sebulba.</li>
                            <li className="packery-item">Jek mon trianii dormé givin drach'nam mustafar lowbacca darth.</li>
                            <li className="packery-item">Dat leia naberrie ahsoka. Briqualon roonan nadon zann hapes gunray orrin daala. </li>
                        </ul>
                    </div>
                </div>
            </MasterLayout>
        )
    }
});

module.exports = IndexComponent;
