var vows = require('vows')
var assert = require('assert')
var scale = require('../')

vows.describe('scale').addBatch({
  'scale.build': function () {
    assert.deepEqual(scale('1 2 3 4', 'C'), ['C', 'D', 'E', 'F'])
    assert.deepEqual(scale('8 9 10 11', 'C2'), [ 'C2', 'D2', 'E2', 'F2' ])
  },
  'scale.get': function () {
    assert.deepEqual(scale.get('major', 'C'), [ 'C', 'D', 'E', 'F', 'G', 'A', 'B' ])
  }
}).export(module)
