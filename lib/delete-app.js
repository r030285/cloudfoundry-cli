'use strict'

var path = require('path')
var execFile = require('child_process').execFile
var execFileSync = require('child_process').execFileSync

function deleteApp(appName, callback) {
  execFile('cf', ['delete', appName, '-f'], function(error, stdout, stderr) {
    if (error) return callback(error)
    callback(null)
  })
}

function deleteAppSync(appName) {
  var stdout = execFileSync('cf', ['delete', appName, '-f'])
  return stdout
}

module.exports = function(sync) {
  if (sync) return deleteAppSync
  else return deleteApp
}
