import winston from 'winston'
require('winston-daily-rotate-file')

const transport = new (winston.transports.DailyRotateFile)({
  dirname: './logs',
  filename: 'IL-%DATE%.log',
  datePattern: 'YYYY-MM-DD',
  zippedArchive: true,
  maxSize: '20m',
  maxFiles: '14d'
})

transport.on('rotate', (oldFilename, newFilename) => {
  console.log('rotate event', oldFilename, newFilename)
})

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'IL' },
  transports: [
    transport
  ]
})

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }))
}
logger.info('Hello World!')

module.exports = { logger }
