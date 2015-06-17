'use strict';

var React = require('react/addons');

module.exports = React.createClass({
  render: function () {
    return (
      <nav className="navbar navbar-fixed-top navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">Gamenews</a>
          </div>
        </div>
      </nav>
    );
  }
});
