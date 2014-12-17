'use strict';

module.exports = function () {
    global.window = {};
    global.ko = require('../../js/knockout.js');
    var app = require('../../js/vuemodele.js');
    var game = null;

    var assert = require('assert');

    this.Given(/^The game has started$/, function (callback) {
        game = new global.window.TicTacToe();
        assert.equal(game.playcases[0].player(), null, 'The game is not at inital state.');
        assert.equal(game.currentPlayer(), 'x', 'The first player is not X.');
        callback();
    });

    this.When(/^The first player play$/, function (callback) {
        var playcase = game.playcases[0];
        game.play(playcase);
        assert.equal(game.playcases[0].player(), 'x', 'The first player is not X.');
        callback();
    });

    this.Then(/^The hand switch to the adversary$/, function (callback) {
        //expect(1).toBe(1); // jasmine-based
        assert.equal(game.currentPlayer(), 'o', 'The hand has not switched.');
        callback();
    });
};
