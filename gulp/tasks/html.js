(function () {
    'use strict';

    var gulp = require('gulp'),
        gulpConfig = require('../config');

    module.exports = gulp.task('html', function () {
        return gulp
            .src(gulpConfig.paths.src.html)
            .pipe(gulp.dest(gulpConfig.paths.dest.root));
    });
})();
