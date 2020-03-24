import Glue from 'glue'

import manifest from './manifest.json'
import {
    expect
} from 'chai'

const options = {
    relativeTo: __dirname
}

export const testServer = async () => {



    try {
        process.on('SIGTERM', err => {
            // logger.error(err)
            process.exit(1)
        })

        const server = await Glue.compose(manifest, options)

        await server.start();
        describe('GET /api/entities', async () => {
            const server = await testServer()
            const request = {
                method: 'GET',
                url: '/api/entities'
            }
            it('describe the entity', () => {
                expect(1).to.be.equal(1);
            })

            it('returns HTTP Status Code 200', done => {
                server.select('IL').inject(request, response => {
                    expect(JSON.parse(response.statusCode)).to.equal(200)
                    done()
                })
            })

            it('returns an array', done => {
                try {
                    server.select('IL').inject(request, response => {
                        expect(JSON.parse(response.payload)).to.be.an('array')
                        done()
                    })
                } catch (err) {
                    console.log('Test Error', err)
                }
            })
        });

        return server



        //  await server.start();
        console.log('server has started');
    } catch (err) {
        console.error(err);
        process.exit(1);
    }


}