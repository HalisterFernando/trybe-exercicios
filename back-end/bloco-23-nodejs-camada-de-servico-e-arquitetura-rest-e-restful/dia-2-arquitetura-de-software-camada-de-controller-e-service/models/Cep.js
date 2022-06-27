const connection = require('./connection');

const getByCep = async (cep) => {
    const query = `
    SELECT * FROM cep_lookup.ceps
    WHERE cep = ? `;

    const [result] = await connection.execute(query, [cep]);

    if (result.length === 0) return null;
    return result;
}

const addCep = async ({cep, logradouro, bairro, localidade, uf}) => {
    const query = `
    INSERT INTO cep_lookup.ceps
    (cep, logradouro, bairro, localidade, uf)
    VALUES (?, ?, ?, ?, ?)`;

    const [result] = await connection.execute(query, [cep, logradouro, bairro, localidade, uf])

    if(result.length === 0) return null; 

    return result

}

module.exports = {
    getByCep,
    addCep,
}