const { createLogger, format, transports } = require('winston');
const winstonDaily = require('winston-daily-rotate-file');
const moment = require('moment');

function tsFormat() {
    return moment().format('YYYY-MM-DD HH:mm:ss.SSS ZZ');
}

const logger = createLogger({
    level: 'info',
    format: format.combine(
        format.timestamp({
            format: tsFormat
        }),
        format.errors({ stack: true }),
        format.splat(),
        format.json()
    ),
    transports: [
        new transports.Console({
            timestamp: tsFormat,
            colorize: true,
            showlevel: true,
            level: 'debug',
        }),
        new (winstonDaily)({
            level: 'info',
            filename: `${__dirname}/Log/logs_%DATE%.log`,
            timestamp: tsFormat,
            datePattern: 'YYYY-MM-DD',
            showlevel: true,
            maxsize: 1000000,
            maxFiles: 5,
        }),
    ],
    exceptionHandlers: [
        new (winstonDaily)({
            level: 'info',
            filename: `${__dirname}/Log/exception_%DATE%.log`,
            timestamp: tsFormat,
            datePattern: 'YYYY-MM-DD',
            showlevel: true,
            maxsize: 1000000,
            maxFiles: 5,
        }),
        new transports.Console({
            timestamp: tsFormat,
            colorize: true,
            showlevel: true,
            level: 'debug',
        }),
    ],
});

logger.info('인포 로깅');
logger.error('에러 로깅');