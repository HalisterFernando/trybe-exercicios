const Cep = require('../services/Cep');

const getByCep = async (req, res) => {
    const { cep } = req.params;

    const result = await Cep.getByCep(cep);
   
    if (result.error) return res.status(result.error.status).json(result.error.message)

    return res.status(200).json(result);
} 

const addCep = async (req, res) => {
    const {cep, logradouro, bairro, localidade, uf} = req.body;
    const result = await Cep.addCep({cep, logradouro, bairro, localidade, uf});

    if(result.error) return res.status(result.error.status).json(result.error.message) 

    return res.status(200).json(result)

}

module.exports = {
    getByCep,
    addCep
}