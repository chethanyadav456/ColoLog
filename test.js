const Logger = require('./index');
const logger = new Logger('MyApp');

logger.log('This is a log message.');
logger.info('This is an info message.');
logger.warn('This is a warning message.');
logger.error('This is an error message.');