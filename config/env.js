'use strict';

const environment = process.env.NODE_ENV || 'DEVELOPMENT';
const port = process.env.NODE_APP_PORT || 7000;


const commonConfig = {
	NODE_ENV: environment,
	NODE_APP_PORT: port,
	APP_NAME: 'Charts',
};

const configuration = {
		'DEVELOPMENT': {
			...commonConfig,
		}
};

module.exports = configuration[environment];
