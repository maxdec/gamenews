'use strict';

var React = require('react/addons');
var games = require('../utils/games');
var Newsarticle = require('./Newsarticle.jsx');
var api = require('../utils/api');
var ReactList = require('react-list');

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
            date: new Date(article.getElementsByTagName('pubDate')[0].textContent),
            url: article.getElementsByTagName('link')[0].textContent,
            img: article.getElementsByTagNameNS('http://search.yahoo.com/mrss/', 'content')[0].getAttribute('url')
          };
        })
      });
    }.bind(this));
  },

  renderItem: function (index, key) {
    return <Newsarticle article={this.state.articles[index]} key={key} />;
  },

  itemSizeGetter: function () {
    return 310;
  },

  render: function () {
    var game = games[this.props.game];

    return (
      <div className="col-md-3 newscolumn">
        <img src={game.img} alt={game.name}/>
        <hr />
        <div className="scroll-list">
          <ReactList
            itemRenderer={this.renderItem}
            length={this.state.articles.length}
            itemSizeGetter={this.itemSizeGetter}
            type='uniform'
          />
        </div>
      </div>
    );
  }
});
