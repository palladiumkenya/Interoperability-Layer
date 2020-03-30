import { expect } from 'chai'
import { testServer } from '../server/testServer.spec'

describe('GET /api/entities', async () => {
  const server = await testServer()
  //console.log('Server' + server.select('IL'))

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

      done();
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
})

describe('/api/entities/{id}', async () => {
  const server = await testServer()
  const request = {
    method: 'GET',
    url: '/api/entities/1'
  }

  const request2 = {
    method: 'GET',
    url: '/api/entities/25'
  }
  it('returns HTTP Status Code 200 if it does not exist', done => {
    server.select('IL').inject(request2, response => {
      expect(JSON.parse(response.statusCode)).to.equal(200)

      done();
    })
  })
  it('returns values as empty if entity does not exist', done => {
    server.select('IL').inject(request2, response => {
      if (response.payload == '') {
        expect(response.payload).to.be.equal('')
        done()
      } else {
        expect(JSON.parse(response.payload)).to.be.an(Object)
      }
    })
  })

  it('returns HTTP Status Code 200', done => {
    server.select('IL').inject(request, response => {
      expect(JSON.parse(response.statusCode)).to.equal(200)
      done();
    })
  })

  it('returns an object', done => {
    try {
      server.select('IL').inject(request, response => {
        expect(JSON.parse(response.payload)).to.be.an('object')
        expect(JSON.parse(response.payload)).to.have.property('description')

        done()
      })
    } catch (err) {
      console.log('Test Error', err)
      process.exit(1)
    }
  })
})

describe('api/entities/subscriptions/', async () => {
  const server = await testServer()
  const request = {
    method: 'GET',
    url: '/api/entities/subscriptions/IQCare'
  }

  it('returns HTTP Status Code 200', done => {
    server.select('IL').inject(request, response => {
      expect(JSON.parse(response.statusCode)).to.equal(200)
      done();
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
        done();
      })
    } catch (err) {
      console.log('Test Error', err)
      process.exit(1)
    }
  })
})
