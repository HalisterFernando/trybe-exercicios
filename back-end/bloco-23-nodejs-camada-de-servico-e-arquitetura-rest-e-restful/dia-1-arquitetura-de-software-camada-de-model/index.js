const express = require('express');
const bodyParser = require('body-parser')
const Users = require('./models/Users')
const validateUsers = require('./middlewares/validateUser')
const PORT = 3002;

const app = express();

app.use(bodyParser.json());

app.post('/user', validateUsers, async (req, res) => {
    try {
        const {firstName, lastName, email, password} = req.body;      
        
        const newUser = await Users.newUser({firstName, lastName, email, password});
       
        return res.status(201).json(newUser)
    } catch (err) {
        console.log(err);
        return res.status(500).end();
    }
})

app.get('/user', async (_req, res) => {
    const users = await Users.allUsers();
    return res.status(201).send(users)
})

app.get('/user/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const user = await Users.getById(id)
        if (user.length === 0) {
            return res.status(404).json({message: 'usuário não encontrado'})
        }
        return res.status(200).send(user)
    } catch (err) {
        console.log(err)
    }
})




app.listen(PORT, () => {
	console.log(`Ouvindo a porta ${PORT}`);
});