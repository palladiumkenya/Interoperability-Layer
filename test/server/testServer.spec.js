import Glue from 'glue'

import manifest from './manifest.json'
import { expect } from 'chai'

const options = {
  relativeTo: __dirname
}

export const testServer = async () => {
  try {
    process.on('SIGTERM', err => {
      // logger.error(err)
      process.exit(1)
    });
    const server = await Glue.compose(manifest, options)
    // const server = await testServer()
 
 //   module.exports=server;
    //console.log(server)
  //  await server.start();

    


 /*   describe('GET /api/entities', async () => {
      //const server = await testServer()
      const request = {
        method: 'GET',
        url: '/api/entities'
      }
      it('describe the entity', () => {
        expect(1).to.be.equal(1)
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
          process.exit(1)
        }
      })
    })
    describe('/api/entities/{id}', async () => {
      const request = {
        method: 'GET',
        url: '/api/entities/1'
      }

      it('returns HTTP Status Code 200', done => {
        server.select('IL').inject(request, response => {
          expect(JSON.parse(response.statusCode)).to.equal(200)
          done()
        })
      })

      it('returns an object', done => {
        try {
          server.select('IL').inject(request, response => {
            expect(JSON.parse(response.payload)).to.be.an('object')
            expect(JSON.parse(response.payload)).to.have.property('description')
            console.log('response for one entity')
            console.log(response.payload)
            done()
          })
        } catch (err) {
          console.log('Test Error', err)
          process.exit(1)
        }
      })
    })

    describe('api/entities/subscriptions/', async () => {
      const request = {
        method: 'GET',
        url: '/api/entities/subscriptions/IQCare'
      }

      it('returns HTTP Status Code 200', done => {
        server.select('IL').inject(request, response => {
          expect(JSON.parse(response.statusCode)).to.equal(200)
          done()
        })
      })
      it('returns all subscriptions for a specific entity in this case IQCare', done => {
        try {
          server.select('IL').inject(request, response => {
            expect(JSON.parse(response.payload)).to.be.an('array')
            let array = JSON.parse(response.payload)
            expect(array[0].verboseName.toString()).to.be.equal(
              'PATIENT_REGISTRATION'
            )
            //expect(array[0]['versboseName'].to).to.be.equal('PATIENT_REGISTRATION');
            console.log('Subscriptions')
            // console.log(array);
            done()
          })
        } catch (err) {
          console.log('Test Error', err)
          process.exit(1)
        }
      })
    })

    describe('api/addresses', async () => {
      const request = {
        method: 'GET',
        url: '/api/addresses'
      }

      it('returns HTTP Status Code 200', done => {
        server.select('IL').inject(request, response => {
          expect(JSON.parse(response.statusCode)).to.equal(200)
          done()
        })
      })

      it('returns list of addresses', done => {
        try {
          server.select('IL').inject(request, response => {
            expect(JSON.parse(response.payload)).to.be.an('array')
            console.log(response.payload)
            console.log(JSON.parse(response.payload))

            done()
          })
        } catch (err) {
          console.log('Test Error', err)
          process.exit(1)
        }
      })
    })

    describe('api/activeSystems', async () => {
      const request = {
        method: 'GET',
        url: '/api/activeSystems'
      }

      it('returns list of activeSystems', done => {
        try {
          server.select('IL').inject(request, response => {
            expect(JSON.parse(response.payload)).to.be.an('array')
            console.log(response.payload)
            console.log(JSON.parse(response.payload))

            done()
          })
        } catch (err) {
          console.log('Test Error', err)
          process.exit(1)
        }
      })
    }) */

    return server

     await server.start();
    console.log('server has started')
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
} 
