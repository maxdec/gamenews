'use strict';

var React = require('react/addons');

module.exports = React.createClass({
  render: function () {
    var article = this.props.article;

    return (
      <a href={article.url}>{article.title}</a>
    );
  }
});
