const chalk = require('chalk')

const foreground = (message, level, color) => {
  level = level.toUpperCase()
  return chalk[color](`${level}: ${message}`)
}

const background = (message, level, color) => {
  message = chalk[color](message)
  const bgColor = 'bg' + color.charAt(0).toUpperCase() + color.slice(1)
  level = chalk[bgColor].black('', level.toUpperCase(), '')
  return `${level} ${message}`
}

const datatime = (message, level, color) => {
  const datatime = new Date().toISOString()
  level = level.toUpperCase()
  return chalk[color](`[${datatime}] [${level}] - ${message}`)
}

module.exports = {
  foreground,
  background,
  datatime
}
