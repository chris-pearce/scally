'use strict';

module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        sassdoc: {
            default: {
                src: '../src/**/*.scss'
            }
        }

    });

    // Register tasks and define them

    // Register tasks
    grunt.loadNpmTasks('grunt-sassdoc');

    // SassDoc
    grunt.registerTask('sassdoc', [
        'sassdoc'
    ]);

};
