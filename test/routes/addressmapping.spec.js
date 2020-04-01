import {
    expect
} from 'chai'
import {
    testServer
} from '../server/testServer.spec'

describe('api/addresses', async () => {
    const server = await testServer()
    const request = {
        method: 'GET',
        url: '/api/addresses'
    }

    it('returns HTTP Status Code 200', () => {


        server.select('IL').inject(request, response => {
            expect(JSON.parse(response.statusCode)).to.equal(200)

        })

    })

    it('returns list of addresses', () => {
        try {


            server.select('IL').inject(request, response => {
                expect(JSON.parse(response.payload)).to.be.an('array')



            })

        } catch (err) {

            console.log('Test Error', err)
            process.exit(1)
        }
    })
})

describe('api/activeSystems', async () => {
    const server = await testServer()
    const request = {
        method: 'GET',
        url: '/api/activeSystems'
    }

    it('returns list of activeSystems', () => {
        try {

            server.select('IL').inject(request, response => {
                expect(JSON.parse(response.payload)).to.be.an('array')
                //console.log(response.payload)
                //console.log(JSON.parse(response.payload))


            })

        } catch (err) {

            console.log('Test Error', err)
            process.exit(1)
        }
    })
})