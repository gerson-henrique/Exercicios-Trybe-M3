const express = require('express')
const app = express()
const port = 3000;
const author = require('./models/author');

app.get('/authors', async (req, res) => {
  const authors = await author.getAll();
  res.status(200).json(authors);
});

const dataIntegrity = (req,res,next)  => {
  const {firstName, lastName, email, password} = req.body;
  if(!firstName || !lastName || !email || !password) return res.status(400).json({
    error: true,
    message: "Todos os campos são obrigatorios"
  })
  else if(password.length < 6) return res.status(400).json({
    error: true,
    message: "a senha deve possuir mais de 6 caracteres"
  })
}

app.post('/user', async (req, res) => {
  const authors = await author.getAll();
  res.status(200).json(authors);
});



app.listen(port, () => console.log(`Example app listening on port ${port}!`))