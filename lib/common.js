'use strict'

var common = {}

// TODO: implement filter validation
common.filtersAreValid = function(filters) {
  return true
}

common.getAppsArray = function(input) {
  var apps = []
  var lines = input.split('\n')
  var header = lines[3].toString()
  lines = lines.slice(4)
  lines.forEach(function(line) {
    if (line.length) {
      var app = {}
      app.name = line.substring(header.indexOf('name'), header.indexOf('requested state')).trim()
      app.state = line.substring(header.indexOf('requested state'), header.indexOf('instances')).trim()
      app.instances = line.substring(header.indexOf('instances'), header.indexOf('memory')).trim()
      app.memory = line.substring(header.indexOf('memory'), header.indexOf('disk')).trim()
      app.disk = line.substring(header.indexOf('disk'), header.indexOf('urls')).trim()
      app.urls = line.substring(header.indexOf('urls')).trim()
      apps.push(app)
    }
  })
  return apps
}

common.getServicesArray = function(input) {
  var services = []
  var lines = input.split('\n')
  var header = lines[3].toString()
  lines = lines.slice(4)
  lines.forEach(function(line) {
    if (line.length) {
      var service = {}
      service.name = line.substring(header.indexOf('name'), header.indexOf('service')).trim()
      service.type = line.substring(header.indexOf('service'), header.indexOf('plan')).trim()
      service.plan = line.substring(header.indexOf('plan'), header.indexOf('bound apps')).trim()
      service.boundApps = line.substring(header.indexOf('bound app'), header.indexOf('last operation')).trim()
      service.lastOperation = line.substring(header.indexOf('last operation')).trim()
      services.push(service)
    }
  })
  return services
}

module.exports = common
