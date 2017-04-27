'use strict'

var path = require('path')
var getApps = require(path.join(__dirname, 'lib', 'get-apps'))
var getServices = require(path.join(__dirname, 'lib', 'get-services'))
var createService = require(path.join(__dirname, 'lib', 'create-service'))
var deleteService = require(path.join(__dirname, 'lib', 'delete-service'))
var bindService = require(path.join(__dirname, 'lib', 'bind-service'))

var cloudFoundry = {}

cloudFoundry.getApps = getApps()
cloudFoundry.getAppsSync = getApps(true)

cloudFoundry.getServices = getServices()
cloudFoundry.getServicesSync = getServices(true)

cloudFoundry.createService = createService()
cloudFoundry.createServiceSync = createService(true)

cloudFoundry.deleteService = deleteService()
cloudFoundry.deleteServiceSync = deleteService(true)

cloudFoundry.bindService = bindService()
cloudFoundry.bindServiceSync = bindService(true)

module.exports = cloudFoundry
