const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();

gulp.task('scripts', scripts);

function scripts() {
    return gulp.src(['./app/**/*.js'])
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.order([
            '**/module.js',
            '**/*.js'
        ]))
        .pipe(plugins.print())
        .pipe(plugins.concat('app.js'))
        .pipe(plugins.uglify())
        .pipe(plugins.sourcemaps.write())
        .pipe(gulp.dest('./build/scripts'));
}
