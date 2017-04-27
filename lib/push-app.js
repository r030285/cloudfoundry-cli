'use strict'

var path = require('path')
var execFile = require('child_process').execFile
var execFileSync = require('child_process').execFileSync

function pushApp(appDir, callback) {
  if (appDir) process.chdir(appDir)
  execFile('cf', ['push'], function(error, stdout, stderr) {
    if (error) return callback(error)
    callback(null)
  })
}

function pushAppSync(appDir) {
  if (appDir) process.chdir(appDir)
  var stdout = execFileSync('cf', ['push'])
  return stdout
}

module.exports = function(sync) {
  if (sync) return pushAppSync
  else return pushApp
}
