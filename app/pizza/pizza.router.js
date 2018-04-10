const Router = require('koa-router')
const loki = require('lokijs')
const db = new loki('pizza.json')
const pizzaDb = db.addCollection('pizza')


const router = new Router({
    prefix: '/pizza'
})

router
    .get('/', (ctx, next) => {
        ctx.body = 'hello pizza'
    })
    .get('/:id', (ctx, next) => {
        pizzaDb.get(ctx.params.id)
    })
    .post('/',  (ctx, next) => {})
    .put('/:id',  (ctx, next) => {})
    .del('/:id',  (ctx, next) => {})
    .all('/',  (ctx, next) => {})

module.exports = router