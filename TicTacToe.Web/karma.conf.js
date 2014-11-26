// Karma configuration
// Generated on Mon Nov 17 2014 20:34:31 GMT+0100 (Paris, Madrid)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'cucumberjs'],


    // list of files / patterns to load in the browser
    files: [
      'js/*.js',
      'tests/**/*.js',

      // These are not watched because they're not expected to change.
      // These are not included because they are not JavaScript files and Karma inserts 
      // these as <script> tags.
      // These are served however, as the adapter will load them into the captured browsers.
      // The cucumber-html.css file can be copied and customized, simply change the path.
      // The adapter will load any file ending with '.css' into the captured browsers.
      { pattern: 'node_modules/karma-cucumberjs/vendor/cucumber-html.css', watched: false, included: false, served: true },
      { pattern: 'app.template', watched: false, included: false, served: true },

      // These are not included because they're text feature files and shouldn't go in script tags.
      // These are watched because feature files will change during dev and you want Karma to run
      // tests when these change.
      // These are served by Karma so the adapter can load their contents when its time to test.
      { pattern: 'features/*.feature', watched: true, included: false, served: true },

      // The step definitions should be loaded last so the adapter can load the global functions 
      // needed by the step defs.
      // The step defs are watched and served so Karma runs when they change.
      { pattern: 'features/step_definitions/**/*.js', watched: true, included: true, served: true }
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'html'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
