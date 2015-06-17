'use strict';

var React = require('react/addons');
var games = require('../utils/games');
var Newsarticle = require('./Newsarticle.jsx');
var api = require('../utils/api');

module.exports = React.createClass({
  getInitialState: function () {
    return { articles: [] };
  },
  componentDidMount: function () {
    api('GET', '/forward?url=' + games[this.props.game].feeds[0], null, function (err, doc) {
      var articles = doc.getElementsByTagName('item');
      this.setState({
        articles: Array.prototype.map.call(articles, function (article) {
          return {
            title: article.getElementsByTagName('title')[0].textContent,
            desc: article.getElementsByTagName('description')[0].textContent,
            url: article.getElementsByTagName('link')[0].textContent,
            img: article.getElementsByTagName('media:content')[0].attributes.url.value
          };
        })
      });
    }.bind(this));
  },
  render: function () {
    var game = games[this.props.game];

    var articles = this.state.articles.map(function (article) {
      return <Newsarticle article={article} key={article.url} />;
    });

    return (
      <div className="col-md-3 newscolumn">
        <img src={game.img} alt={game.name}/>

        {articles}
      </div>
    );
  }
});
