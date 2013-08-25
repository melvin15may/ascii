'use strict';
module.exports = function(grunt) {
    grunt.initConfig({
        jshint: {
            files: ['Gruntfile.js', 'app/scripts/**/*.js'],
            options: {
                globalstrict: true,
                globals: {
                    module: true
                }
            }
        },

        watch: {
            files: 'app/**/*',
            options: {
                livereload: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['jshint']);
};
