/*
 * grunt-relative-root
 * https://github.com/hurrymaplelad/grunt-relative-root
 *
 * Copyright (c) 2013 Adam Hull
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>',
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp'],
    },

    // Configuration to be run (and then tested).
    relativeRoot: {

      simple: {
        src: 'test/fixtures/stylish.css',
        dest: 'tmp/simple/stylish.css'
      },

      fancy: {
        options: {
          root: 'test/fixtures/'
        },
        files: [{
          expand: true,
          cwd: '<%= relativeRoot.fancy.options.root %>',
          src: '*.css',
          dest: 'tmp/fancy/'
        }]
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*.test.js'],
    },

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'relativeRoot', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
