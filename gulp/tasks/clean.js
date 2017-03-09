(function () {
    'use strict';

    var gulp = require('gulp'),
        gulpConfig = require('../config'),
        rimraf = require('gulp-rimraf');

    module.exports = gulp.task('clean', function () {
        return gulp
            .src(gulpConfig.paths.dest.root, {read: false})
            .pipe(rimraf());
    });
})();
