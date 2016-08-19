var React = require('react');
var MasterLayout = require('./master');

var AboutComponent = React.createClass({
    render: function() {
        return (
            <MasterLayout name={ this.props.name }>
                <div className="mdl-grid wrap">
                    <div className="
                        content content-page
                        mdl-color--white
                        mdl-cell mdl-cell--8-col"
                    >
                        <div className="crumbs mdl-color-text--grey-500">
                          Uncopyright &gt; About
                        </div>

                        <h2 className="page-title">About Page</h2>

                        <div className="content-page__body">
                            <p>Lucas ipsum dolor sit amet mon maul mara lars organa darth moff skywalker solo hoth. Hutt jar hutt moff kenobi mace r2-d2 antilles. Greedo mon secura sith organa zabrak qui-gonn. Wicket obi-wan ackbar fisto. Leia amidala solo dagobah hutt grievous organa. Obi-wan darth cade ben. Jinn mandalorians windu amidala. Leia kenobi solo greedo solo. Mandalorians alderaan darth biggs. Bespin anakin calrissian skywalker darth coruscant. Mustafar antilles jabba organa mon. Lars yoda darth skywalker jade hoth. </p>
                            <p>Leia hutt yavin fett. Darth ben leia mara boba hutt fett hutt jade. Maul kessel ponda palpatine jade calamari. Sebulba sebulba darth coruscant wampa han aayla. Kit amidala ben darth anakin gamorrean solo luke. Mace solo mara alderaan kashyyyk mace leia qui-gon baba. Skywalker darth darth lando. Kashyyyk maul darth jade darth yoda. Organa amidala luuke lobot kashyyyk tatooine jango mace. Jabba sidious han calamari boba solo. Palpatine tatooine darth darth hoth. Wedge ben bespin calamari jabba leia alderaan.</p>
                            <p>Lucas ipsum dolor sit amet mon maul mara lars organa darth moff skywalker solo hoth. Hutt jar hutt moff kenobi mace r2-d2 antilles. Greedo mon secura sith organa zabrak qui-gonn. Wicket obi-wan ackbar fisto. Leia amidala solo dagobah hutt grievous organa. Obi-wan darth cade ben. Jinn mandalorians windu amidala. Leia kenobi solo greedo solo. Mandalorians alderaan darth biggs. Bespin anakin calrissian skywalker darth coruscant. Mustafar antilles jabba organa mon. Lars yoda darth skywalker jade hoth. </p>
                            <p>Leia hutt yavin fett. Darth ben leia mara boba hutt fett hutt jade. Maul kessel ponda palpatine jade calamari. Sebulba sebulba darth coruscant wampa han aayla. Kit amidala ben darth anakin gamorrean solo luke. Mace solo mara alderaan kashyyyk mace leia qui-gon baba. Skywalker darth darth lando. Kashyyyk maul darth jade darth yoda. Organa amidala luuke lobot kashyyyk tatooine jango mace. Jabba sidious han calamari boba solo. Palpatine tatooine darth darth hoth. Wedge ben bespin calamari jabba leia alderaan.</p>
                        </div>
                    </div>
                </div>
            </MasterLayout>
        )
    }
});

module.exports = AboutComponent;
