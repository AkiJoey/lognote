const chalk = require('chalk')

const levels = require('./levels')
const formats = require('./formats')

class Logger {
  constructor(options) {
    options = Object.assign({ raw: false }, options)
    this.format = options.format
    this.preset = options.preset
    this.raw = options.raw

    if (this.raw) {
      Object.setPrototypeOf(this, chalk)
    }

    this.log = message => {
      if (this.raw) {
        return message
      }
      console.log(message)
    }

    Object.keys(levels).forEach(level => {
      this[level] = message => {
        const color = levels[level]

        if (this.format) {
          message = this.format(message, level, color)
        } else if (this.preset && formats[this.preset]) {
          message = formats[this.preset](message, level, color)
        } else {
          message = chalk[color](message)
        }

        return this.log(message)
      }
    })
  }
}

module.exports = Logger
