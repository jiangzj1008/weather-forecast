var express = require('express')
var app = express()
var bodyParser = require('body-parser')

app.use(bodyParser.json())

app.use(express.static('static'))

const registerRoutes = function(app,routes) {
    for (var i = 0; i < routes.length; i++) {
        var route = routes[i]
        app[route.method](route.path, route.func)
    }
}

const routeIndex = require('./route/index')
registerRoutes(app, routeIndex.routes)

const routeWeather = require('./route/weather')
registerRoutes(app, routeWeather.routes)

var server = app.listen(8081, function() {
    var host = server.address().address
    var port = server.address().port
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
})
