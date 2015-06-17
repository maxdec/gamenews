'use strict';

var React = require('react/addons');

module.exports = React.createClass({
  render: function () {
    var article = this.props.article;

    var style = {
      backgroundImage: 'url(' + article.img + ')',
    };

    return (
      <a href={article.url} target="_blank" className="newsarticle" title={article.title}>
        <div className="bg" style={style} ></div>
        <div className="title">{article.title}</div>
      </a>
    );
  }
});
