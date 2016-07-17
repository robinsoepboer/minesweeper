const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();
const lessPluginAutoPrefix = require('less-plugin-autoprefix');
const autoprefix = new lessPluginAutoPrefix({browsers: ["last 2 versions", 'last 6 Android versions']});

gulp.task('styles', styles);

function styles() {
    return gulp.src(['./style/*.less'])
        .pipe(plugins.print())
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.concat('style.less'))
        .pipe(plugins.less({
                plugins: [autoprefix]
            }))
        .pipe(plugins.cleanCss())
        .pipe(plugins.sourcemaps.write())
        .pipe(gulp.dest('./build/styles'));
}
