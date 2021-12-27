'use strict';
exports.main_handler = async (event, context) => {
		console.log(process.env)
    console.log(process.env.SCF_RUNTIME)
    return "Hello world"
};
