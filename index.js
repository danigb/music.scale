'use strict'

function extend (base, module) {
  Object.keys(module).forEach(function (name) { base[name] = module[name] })
}

var scale = require('music.scale.build')
extend(scale, require('music.scale.dictionary'))
scale.pattern = require('music.scale.pattern')

module.exports = scale
