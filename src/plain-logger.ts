import { ConsoleLogger, LogLevel } from '@nestjs/common';

export class PlainLogger extends ConsoleLogger {
  formatMessage(_logLevel: LogLevel, message: string) {
    return `\x1B[38;5;3m${new Date()
      .toISOString()
      .substring(11, 23)}\x1B[39m ${message}\n`;
  }
}
