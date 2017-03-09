(function () {
    'use strict';

    module.exports = gulpConfig();

    function gulpConfig() {
        return {
            files: '',
            bundleSource: 'bundle.js',
            paths: {
                src: {
                    html: ['src/*.html'],
                    main: 'src/main.ts'
                },
                dest: {
                    root: 'dist'
                }
            }
        }
    }
})();
