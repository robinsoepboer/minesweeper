const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();

// Load some files into the registry
const hub = new plugins.hub(['gulp_tasks/*.js']);

// Tell gulp to use the tasks just loaded
gulp.registry(hub);


gulp.task('build', gulp.series('styles', 'scripts'));