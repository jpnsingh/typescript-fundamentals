(function () {
    'use strict';

    var gulp = require('gulp'),
        gulpConfig = require('../config');

    module.exports = gulp.task('templates', function () {
        return gulp
            .src(gulpConfig.paths.src.templates)
            .pipe(gulp.dest(gulpConfig.paths.dest.root));
    });
})();
