'use strict';
const moment = require('moment')
exports.main_handler = async (event, context) => {
    let currentTime = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')
    console.log(currentTime)
    return "hello world"
};
