const chalk = require('chalk');

/**
 * A simple logger utility for logging messages with different log levels.
 */
class Logger {

    constructor(prefix) {
        this.prefix = prefix || '';
    }

    /**
     * Log a message at the 'log' level.
     * @param {string} message - The message to log.
     */
    log(message) {
        this.printLog('log', message, chalk.green);
    }

    /**
     * Log a message at the 'info' level.
     * @param {string} message - The message to log.
     */
    info(message) {
        this.printLog('info', message, chalk.blue);
    }

    /**
     * Log a message at the 'warn' level.
     * @param {string} message - The message to log.
     */
    warn(message) {
        this.printLog('warn', message, chalk.yellow);
    }

    /**
     * Log a message at the 'error' level.
     * @param {string} message - The message to log.
     */
    error(message) {
        this.printLog('error', message, chalk.red);
    }

    printLog(type, message, color) {
        const timestamp = new Date().toLocaleString();
        const logMessage = `[${timestamp}] [${type.toUpperCase()}]${this.prefix ? ` [${this.prefix}]` : ''}: ${message}`;
        console.log(color(logMessage));
    }
}

module.exports = Logger;
