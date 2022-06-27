const Cep = require('../models/Cep');
const Joi = require('joi');

const getByCep = async (cep) => {
    const regex = /\d{5}-?\d{3}/gi;
    
    const isCepValid = regex.test(cep);    
   
    if (!isCepValid) {
        return {
            error: {
                status: 400,
                code: "invalidData",
                message: "CEP Inválido"
            } 
        }
    }

    const result = await Cep.getByCep(cep);

    if (!result) {
        return {
            error: {
                status: 404,
                code: 'notFound',
                message: "CEP não encontrado"
            }
        }
    }
    return result;
}

const addCep = async ({cep, logradouro, bairro, localidade, uf}) => {

    const { error } = Joi.object({
        cep: Joi.string().not().empty().required(),
        logradouro: Joi.string().not().empty().required(),
        bairro: Joi.string().not().empty().required() ,
        localidade: Joi.string().not().empty().required() ,
        uf: Joi.string().not().empty().required(),
      }).validate({ cep, logradouro, bairro, localidade, uf });

    if (error) return {
        error: {
            status: 400,
            code: 'invalidData',
            message: error.message,
        }
    }  

    const result = await Cep.addCep({cep, logradouro, bairro, localidade, uf})
    return result
} 


module.exports = {
    getByCep,
    addCep
}