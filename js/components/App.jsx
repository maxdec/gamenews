'use strict';

var React = require('react/addons');
// var ExampleActions = require('../actions/ExampleActions');
var ExampleStore = require('../stores/ExampleStore');
var Navbar = require('./Navbar.jsx');
var Newscolumn = require('./Newscolumn.jsx');

module.exports = React.createClass({
  getInitialState: function () {
    return { example: ExampleStore.get() };
  },
  // componentDidMount: function () {
  //   ExampleStore.addChangeListener(this._onChange);
  //   // Fetch init data
  //   ExampleActions.fetch();
  // },
  // componentWillUnmount: function() {
  //   ExampleStore.removeChangeListener(this._onChange);
  // },
  // _onChange: function () {
  //   this.setState({ example: ExampleStore.get() });
  // },
  render: function () {
    return (
      <div className="app-content">
        <Navbar />

        <div className="container-fluid">
          <div className="row">
            <Newscolumn game="csgo" />
            <Newscolumn game="lol" />
            <Newscolumn game="minecraft" />
            <Newscolumn game="heartstone" />
          </div>
        </div>
      </div>
    );
  }
});
