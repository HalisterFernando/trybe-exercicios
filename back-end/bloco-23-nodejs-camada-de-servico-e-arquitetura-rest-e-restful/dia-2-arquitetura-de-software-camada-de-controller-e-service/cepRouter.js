const express = require('express');
const router = express.Router();
const Cep = require('./controllers/Cep');

router.get('/:cep', Cep.getByCep)
router.post('/', Cep.addCep)
module.exports = router