'use strict';

var AppDispatcher = require('../dispatcher/AppDispatcher');
var ExampleConstants = require('../constants/ExampleConstants');
var api = require('../utils/api');

var ExampleActions = {
  fetch: function () {
    api('GET', '/hello/Maxence', function (err, result) {
      if (err) return console.error(err);
      ExampleActions.set(result);
    }.bind(this));
  },
  set: function (track) {
    AppDispatcher.handleViewAction({
      actionType: ExampleConstants.EXAMPLE_SET,
      data: track
    });
  }
};

module.exports = ExampleActions;
