import chalk from 'chalk'

type Format = (message: string, level?: string, color?: string) => string

interface LoggerOptions {
  raw?: boolean
  preset?: string
  format?: Format
}

declare class Logger {
  raw: boolean
  preset?: string
  format?: Format;
  [key: string]: any
  constructor(options?: LoggerOptions)
  log: (message: string) => string | undefined
}

declare const logger: Logger
declare const note: Logger & chalk.Chalk

export default Logger
export { logger, note }
