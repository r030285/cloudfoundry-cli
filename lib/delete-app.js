'use strict'

var path = require('path')
var execFile = require('child_process').execFile
var execFileSync = require('child_process').execFileSync

function deleteApp(appName, callback) {
  execFile('cf', ['delete', appName, '-f'], function(error, stdout, stderr) {
    if (error) return callback(error)
    return callback && callback(null)
  })
}

function deleteAppSync(appName) {
  try {
    execFileSync('cf', ['delete', appName, '-f'])
  } catch(e) {
    if (e.stderr) console.log(e.stderr.toString())
    else console.log(e.stdout.toString())
  }
}

module.exports = function(sync) {
  if (sync) return deleteAppSync
  else return deleteApp
}
