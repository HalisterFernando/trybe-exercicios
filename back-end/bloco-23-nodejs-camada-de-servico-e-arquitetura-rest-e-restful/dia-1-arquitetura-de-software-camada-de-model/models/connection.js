const mysql = require('mysql2/promise');

const connection = mysql.createPool({
	host: 'localhost',
	user: 'trybe',
	password: 'p0k3j0_mysql',
	database: 'model_example' });

module.exports = connection;