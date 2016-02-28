var express = require('express')
var path = require('path')

var app = express()

server = require('http').Server(app)

// 设置视图
app.set('views', path.join(__dirname, 'views'))

app.set('view engine', 'html')

app.engine('.html', require('ejs').__express)

// 路由配置文件
require('./router')(app)

server.listen(8080, function() {
  console.log('App start at port 8080.');
})
