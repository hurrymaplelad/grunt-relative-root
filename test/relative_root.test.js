'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.relativeRoot = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },

  simple: function(test) {
    test.expect(1);

    test.equal(
      grunt.file.read('tmp/simple/stylish.css'),
      grunt.file.read('test/expected/simple/stylish.css'),
      'relativizes absolute paths'
    );

    test.done();
  },

  fancy: function(test) {
    test.expect(1);

    test.equal(
      grunt.file.read('tmp/fancy/stylish.css'),
      grunt.file.read('test/expected/fancy/stylish.css'),
      'relativizes absolute paths'
    );

    test.done();
  },
};
