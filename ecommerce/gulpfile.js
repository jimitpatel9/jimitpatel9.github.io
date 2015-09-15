var gulp = require('gulp');
var karma = require('gulp-karma');
var jasmine = require('gulp-jasmine');
var inject = require('gulp-inject');
var testFiles = [
  'js/angular/angular.js',
    'node_modules/angular-mocks/angular-mocks.js',
      'tests/**/*.js',
      'tests/loginCtrlTest.js',
      '*.js',
      'tests/*.js'
];
 
gulp.task('test', function() {
  // Be sure to return the stream 
  return gulp.src(testFiles)
    .pipe(karma({
      configFile: 'karma.conf.js',
      action: 'run'
    }))
    .on('error', function(err) {
      // Make sure failed tests cause gulp to exit non-zero 
      throw err;
    });
});
 
gulp.task('default', function() {
  gulp.src(testFiles)
    .pipe(karma({
      configFile: 'karma.conf.js',
      action: 'watch'
    }));
});