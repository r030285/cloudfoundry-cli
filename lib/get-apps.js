'use strict'

var querystring = require('querystring')
var path = require('path')
var execFile = require('child_process').execFile
var execFileSync = require('child_process').execFileSync
var common = require(path.join(__dirname, '..', 'lib', 'common'))

function getApps(filters, callback) {
  if (typeof filters === 'function') {
    callback = filters
  }
  if (filters) {
    if (!common.filtersAreValid(filters)) throw new Error('Invalid filter')
    filters = querystring.parse(filters)
  }
  execFile('cf', ['apps'], function(error, stdout, stderr) {
    if (error) return callback(error)
    var apps = common.getAppsArray(stdout, filters)
    callback(null, apps)
  })
}

function getAppsSync(filters) {
  if (filters) {
    if (!common.filtersAreValid(filters)) throw new Error('Invalid filter')
    filters = querystring.parse(filters)
  }
  var stdout = execFileSync('cf', ['apps'])
  var apps = common.getAppsArray(stdout.toString(), filters)
  return apps
}

module.exports = function(sync) {
  if (sync) return getAppsSync
  else return getApps
}
