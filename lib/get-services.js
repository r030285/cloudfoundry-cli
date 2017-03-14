'use strict'

var path = require('path')
var execFile = require('child_process').execFile
var execFileSync = require('child_process').execFileSync
var common = require(path.join(__dirname, '..', 'lib', 'common'))

function getServices(filters, callback) {
  if (typeof filters === 'function') {
    callback = filters
  }
  if (filters) {
    if (!common.filtersAreValid(filters)) throw new Error('Invalid filter')
  }
  execFile('cf', ['services'], function(error, stdout, stderr) {
    if (error) return callback(error)
    var services = common.getServicesObject(stdout)
    callback(null, services)
  })
}

function getServicesSync(filters) {
  if (filters) {
    if (!common.filtersAreValid(filters)) throw new Error('Invalid filter')
  }
  var stdout = execFileSync('cf', ['services'])
  var services = common.getServicesArray(stdout.toString())
  return services
}

module.exports = function(sync) {
  if (sync) return getServicesSync
  else return getServices
}
