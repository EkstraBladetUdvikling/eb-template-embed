// Karma configuration
// Generated on Tue Jan 10 2017 14:35:56 GMT+0100 (CET)

module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'browserify'],

    // list of files / patterns to load in the browser
    files: ['src/scripts/main.js', 'tests/*.js', {pattern: 'dist/*.html', watched: false}],

    // list of files to exclude
    exclude: [],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'src/scripts/*.js': ['browserify'],
      'dist/*.html': ['html2js']
    },

    // Browserify and Babelify processing
    browserify: {
      configure: function browserify(bundle) {
        bundle.once('prebundle', function prebundle() {
          bundle.transform('babelify', {
            presets: ['latest']
          })
        })
      }
    },

    // Load HTML to be able to test DOM
    html2JsPreprocessor: {
      // strip this from the file path
      stripPrefix: 'dist/',

      // or define a custom transform function
      processPath: function (filePath) {
        // Drop the file extension
        return filePath.replace(/\.html$/, '')
      }
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['dots'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_DISABLE,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
