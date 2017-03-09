(function () {
    'use strict';

    var gulp = require('gulp'),
        gulpConfig = require('../config'),
        browserify = require('browserify'),
        source = require('vinyl-source-stream'),
        tsify = require('tsify');

    module.exports = gulp.task('browserify', function () {
        return browserify({
            basedir: '.',
            debug: true,
            entries: [gulpConfig.paths.src.main],
            cache: {},
            packageCache: {}
        })
            .plugin(tsify)
            .bundle()
            .pipe(source(gulpConfig.bundleSource))
            .pipe(gulp.dest(gulpConfig.paths.dest.root));
    });
})();
