(function () {
    'use strict';

    var build = {};

    build.root = '.build';
    build.webPath = build.root + '/web';

    module.exports = gulpConfig();

    function gulpConfig() {
        return {
            files: '',
            bundleSource: 'bundle.js',
            paths: {
                src: {
                    entry: 'src/main.ts',
                    js: './src/client/js/**/*.js',
                    libs: ['public/lib/**/*', 'libs/**/*'],
                    styles: ['./src/styles/**/*', '!src/styles/{less,less/**}'],
                    less: './src/styles/less/**/*.less',
                    templates: ['src/*.html'],
                    images: 'images/**/*'
                },
                dest: {
                    root: build.root,
                    js: build.webPath + '/js',
                    styles: build.webPath + '/styles',
                    css: build.webPath + '/styles/css',
                    templates: build.webPath + '/templates',
                    images: build.webPath + '/images'
                }
            }
        }
    }
})();
