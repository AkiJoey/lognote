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
}

declare const Lognote: typeof Logger & {
  logger: Logger
  note: Logger & chalk.Chalk
}

export = Lognote
