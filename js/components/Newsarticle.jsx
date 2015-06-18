'use strict';

var React = require('react/addons');

module.exports = React.createClass({
  render: function () {
    var article = this.props.article;

    var style = {
      backgroundImage: 'url(' + article.img + ')',
    };

    return (
      <a className="newsarticle" href={article.url} target="_blank">
        <div className="img" style={style} />
        <div className="infos">
          <small>{article.date.toDateString()}</small>
          <h4>{article.title}</h4>
        </div>
      </a>
    );
  }
});
