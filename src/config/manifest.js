const Fs = require('fs')
const path = require('path')
const tlsOptions = {
  key: Fs.readFileSync(path.resolve(__dirname, '../secrets/il-key.pem')),
  cert: Fs.readFileSync(path.resolve(__dirname, '../secrets/il.pem'))
}

const manifest = {
  'server': {
    'app': {
      'description': 'Interoperability Layer for the HIS projects'
    },
    'connections': {
      'router': {
        'isCaseSensitive': true,
        'stripTrailingSlash': true
      }
    }
  },
  'connections': [
    {
      'port': 5000,
      'tls': tlsOptions,
      'labels': ['web-ui']
    },
    {
      'port': 3003,
      'tls': tlsOptions,
      'labels': ['IL']
    },
    {
      'port': 3007,
      'labels': ['VL']
    },
    {
      'port': 9721,
      'tls': tlsOptions,
      'labels': ['DAD']
    }
  ],
  'registrations': [
    { 'plugin': { 'register': 'blipp' } },
    { 'plugin': { 'register': 'inert' } },
    { 'plugin': { 'register': 'vision' } },
    {
      'plugin': { 'register': 'lout', 'options': { 'endpoint': '/api/docs' } }
    },
    { 'plugin': { 'register': '../routes/IL/addressmapping.routes' } },
    { 'plugin': { 'register': '../routes/IL/entity.routes' } },
    { 'plugin': { 'register': '../routes/IL/logs.routes' } },
    { 'plugin': { 'register': '../routes/IL/messagetype.routes' } },
    { 'plugin': { 'register': '../routes/IL/queue.routes' } },
    { 'plugin': { 'register': '../routes/IL/settings.routes' } },
    { 'plugin': { 'register': '../routes/IL/stats.routes' } },
    { 'plugin': { 'register': '../routes/IL/subscriber.routes' } },
    { 'plugin': { 'register': '../routes/VL/laborder.routes' } },
    { 'plugin': { 'register': '../routes/VL/labresult.routes' } },
    { 'plugin': { 'register': '../routes/DAD/dad.routes' } },
    { 'plugin': { 'register': '../routes/web-ui/web.routes' } }
  ]
}

module.exports = manifest
