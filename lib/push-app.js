'use strict'

var path = require('path')
var childProcess = require('child_process')
var execFile = childProcess.execFile
var execFileSync = childProcess.execFileSync

function pushApp(appDir, callback) {
  if (appDir) process.chdir(appDir)
  execFile('cf', ['push'], function(error, stdout, stderr) {
    if (error) return callback(error)
    return callback && callback(null)
  })
}

function pushAppSync(appDir) {
  if (appDir) process.chdir(appDir)
  try {
    execFileSync('cf', ['push'])
  } catch(e) {
    if (e.stderr) console.log(e.stderr.toString())
    else console.log(e.stdout.toString())
  }
}

module.exports = function(sync) {
  if (sync) return pushAppSync
  else return pushApp
}
