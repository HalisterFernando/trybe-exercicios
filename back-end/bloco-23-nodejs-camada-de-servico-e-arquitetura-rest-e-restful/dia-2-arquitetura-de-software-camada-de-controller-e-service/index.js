const express = require('express');
const bodyParser = require('body-parser');
const cepRouter = require('./cepRouter');

 const app = express();

 app.use(bodyParser.json())

 app.use('/cep', cepRouter)


 const PORT = 3001

 app.listen(PORT, () => {
     console.log(`Ouvindo a porta ${PORT}`)
 })

