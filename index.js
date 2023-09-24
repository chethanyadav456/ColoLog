const chalk = require('chalk');

class Logger {
    constructor(prefix) {
        this.prefix = prefix || '';
    }

    log(message) {
        this.printLog('log', message, chalk.green);
    }

    info(message) {
        this.printLog('info', message, chalk.blue);
    }

    warn(message) {
        this.printLog('warn', message, chalk.yellow);
    }

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