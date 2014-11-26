'use strict';

module.exports = function () {

    var ko = require('../../js/knockout.js');
    var app = require('../../js/vuemodele.js');

    var assert = require('assert');
    //var assert = require('karma-jasmine');

    this.Given(/^The game has started$/, function (callback) {
        callback.pending();

        var game = new app.TicTacToe();

        //callback();
    });

    this.When(/^The first player play$/, function (callback) {
        callback.pending();
        //callback();
    });

    this.Then(/^The hand switch to the adversary$/, function (callback) {
        callback.pending();

        //assert.equal(myList.getAll().length, 1, 'Grocery List should grow by one item.');
        //assert.equal(1, 1, 'Grocery List should grow by one item.');
        //assert.expect(1).toBe(1);
        //callback();
    });

};

// FOR KARMA-CUCUMBERJS ADAPTER :
//// This addStepDefinitions() function is why the step definitions must 
//// be configured to load after the adapter.
//addStepDefinitions(function (scenario) {

//    var assert = require('assert');
//    //var assert = require('karma-jasmine');

//    // Provide a custom World constructor. It's optional, a default one is supplied.
//    scenario.World = function (callback) {
//        callback();
//    };

//    // Define your World, here is where you can add some custom utlity functions you
//    // want to use with your Cucumber step definitions, this is usually moved out
//    // to its own file that you include in your Karma config
//    var proto = scenario.World.prototype;
//    proto.appSpecificUtilityFunction = function someHelperFunc() {
//        // do some common stuff with your app
//    };


//    // Before scenario hoooks
//    scenario.Before(function (callback) {
//        // Use a custom utility function
//        this.appSpecificUtilityFunction();

//        callback();
//    });


//    scenario.Given(/^The game has started$/, function (callback) {
//        // Verify or set up an app state
//        //game = ;

//        // Move to next step
//        callback();
//    });

//    scenario.When(/^The first player play$/, function (callback) {
//        // Trigger some user action

//        // Move to next step
//        callback();
//    });

//    scenario.Then(/^The hand switch to the adversary$/, function (callback) {
//        // Verify the expected outcome
//        //assert.equal(1, 1, 'Grocery List should grow by one item.');

//        // Move to next step
//        callback();
//    });


//    // After scenario hooks
//    scenario.After(function (callback) {
//        callback();
//    });
//});
