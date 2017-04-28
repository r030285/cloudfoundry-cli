'use strict'

var path = require('path')
var execFile = require('child_process').execFile
var execFileSync = require('child_process').execFileSync
var common = require(path.join(__dirname, '..', 'lib', 'common'))

function deleteService(name, callback) {
  execFile('cf', ['delete-service', name, '-f'], function(error, stdout, stderr) {
    if (error) return callback(error)
    return callback && callback(null, details)
  })
}

function deleteServiceSync(name) {
  try {
    execFileSync('cf', ['delete-service', name, '-f'])
  } catch(e) {
    if (e.stderr) console.log(e.stderr.toString())
    else console.log(e.stdout.toString())
  }
}

module.exports = function(sync) {
  if (sync) return deleteServiceSync
  else return deleteService
}
