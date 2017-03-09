(function () {
    'use strict';

    var gulp = require('gulp');
    var ts = require('gulp-typescript');
    var tsProject = ts.createProject('tsconfig.json');
    var browserify = require('browserify');
    var source = require('vinyl-source-stream');
    var tsify = require('tsify');
    var paths = {
        pages: ['app/src/*.html']
    };

    gulp.task('copy-html', function () {
        return gulp.src(paths.pages)
            .pipe(gulp.dest('app/dist'));
    });

    gulp.task('default', ['copy-html'], function () {
        return browserify({
            basedir: './app',
            debug: true,
            entries: ['src/main.ts'],
            cache: {},
            packageCache: {}
        })
            .plugin(tsify)
            .bundle()
            .pipe(source('bundle.js'))
            .pipe(gulp.dest('app/dist'));
    });
})();
