import { createLogger, format, transports } from 'winston';

const logger = createLogger({
  format: format.combine(
    format.splat(),
    format.simple(),
    format.colorize(),
  ),
  transports: [new transports.Console()],
});

export const {
  log, info, warn, error,
} = logger;

export default logger;
