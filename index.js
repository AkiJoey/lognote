const Logger = require('./lib/logger')

module.exports = Object.assign(Logger, {
  logger: new Logger(),
  note: new Logger({ raw: true })
})
