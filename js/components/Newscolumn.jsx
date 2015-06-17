'use strict';

var React = require('react/addons');
var games = require('../utils/games');
var Newsarticle = require('./Newsarticle.jsx');

module.exports = React.createClass({
  render: function () {
    var game = games[this.props.game];

    var article = {
      title: 'SUPER TROP COOL LE NOUVEAU SKIN',
      url: 'http://google.com'
    };

    return (
      <div className="col-md-3 newsblock">
        <img src={game.img} alt={game.name}/>

        <Newsarticle article={article} />
      </div>
    );
  }
});
