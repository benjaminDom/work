const Logger = require('logplease');
const logger = Logger.create('utils');
const isEven = require('./number');


let numbers=[2,3]


logger.info(`number ${numbers[0]} is even ?`,isEven(2));
logger.error("number 3 is even",isEven(3));
