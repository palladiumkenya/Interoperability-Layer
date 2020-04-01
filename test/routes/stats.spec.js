import {
    expect
} from 'chai'
import {
    testServer
} from '../server/testServer.spec'
describe('GET /api/stats', async () => {

    const server = await testServer();
    const request = {
        method: 'GET',
        url: '/api/stats'
    }
    const requestBad = {
        method: 'GET',
        url: '/api/stat'
    }

    it('returns Http Status code 200', () => {
      
            server.select('IL').inject(request, response => {
                expect(JSON.parse(response.statusCode)).to.be.equal(200);
                
            })
        
    })
    it('returns an object', () => {
      
            server.select('IL').inject(request, response => {

                expect(JSON.parse(response.payload)).to.be.an('object');
              

            })
        
    })

    it('returns Https Status code 404 ', () => {

        
            server.select('IL').inject(requestBad, response => {

                expect(JSON.parse(response.statusCode)).to.be.equal(404);
                
            })
        
    })


})