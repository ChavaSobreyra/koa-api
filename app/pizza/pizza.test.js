
const { expect } = require('chai')
const app = require('../app')
const axios = require('axios')

describe('Pizza API', () => {
    let server
    before(() => {
        server = app.listen('3000')
    })
    after(() => {
        server.close()
    })


    describe('GET /', function() {
        it('should return 200', async () => {
            const response = await axios.get('/pizzas')
            console.log('response', response)
        });
    });
});