const Koa = require('koa')
const Router = require('koa-router');
const logger = require('koa-logger')
var bodyParser = require('koa-bodyparser');

// Setup Server
const app = new Koa()
app.use(logger())
app.use(bodyParser())

// Register Routes
const pizzaRouter = require('./pizza/pizza.router')
  app
    .use(pizzaRouter.routes())
    .use(pizzaRouter.allowedMethods())


module.exports = app