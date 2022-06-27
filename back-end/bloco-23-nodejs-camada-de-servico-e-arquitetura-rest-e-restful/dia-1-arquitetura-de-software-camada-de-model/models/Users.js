// models/Author.js
const connection = require('./connection');

function formatUser({ id, first_name: firstName, last_name: lastName, email }) {
	// A única coisa que precisamos fazer agora é criar um objeto com os nomes dos campos alterados
	// e sem o campo password
	return {
		id,
		firstName,
		lastName,
		email,
	};
	}

const newUser = async ({firstName, lastName, email, password}) => {
	const mysql = 'INSERT INTO model_example.users (first_name, last_name, email, password) VALUES (?,?,?,?)'
	
	 const [{insertId}] = await connection.execute(mysql, [firstName, lastName, email, password])
	 return  { id: insertId, firstName, lastName, email, password}	
};

const allUsers = async () => {
	const mysql = 'SELECT * FROM model_example.users'
	const  [users] = await connection.execute(mysql)
	return users
}

const getById = async (id) => {
	const mysql = 'SELECT * FROM model_example.users WHERE id = ?';
	const [userData] = await connection.execute(mysql, [id]);
	return userData
}

module.exports = {
	newUser,
	allUsers,
	getById,
};