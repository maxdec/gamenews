'use strict';

var AppDispatcher = require('../dispatcher/AppDispatcher');
var ExampleConstants = require('../constants/ExampleConstants');
var EventEmitter = require('events').EventEmitter;
var objectAssign = require('object-assign');

var ExampleStore = objectAssign({}, EventEmitter.prototype, {
  _example: '',

  get: function() {
    return this._example;
  },

  _set: function (example) {
    this._example = example;
  },

  emitChange: function() {
    this.emit('change');
  },

  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  }
});

ExampleStore.dispatchToken = AppDispatcher.register(function (payload) {
  var action = payload.action;

  switch (action.actionType) {
    case ExampleConstants.EXAMPLE_SET:
      ExampleStore._set(action.data);
      break;

    default:
      return true;
  }

  ExampleStore.emitChange();

  return true;
});

module.exports = ExampleStore;
