const validateUsers = (req, res, next) => {
    const {firstName, lastName, email, password} = req.body;
    if (!firstName || !lastName || !email || !password) {
        return res.status(401).json({message: 'Preencha todos os campos'})        
    } 
    if(password.length < 6) {
        return res.status(401).json({message: 'A senha deve possuir 6 ou mais caracteres'})
    }
    return next();
} 

module.exports = validateUsers;