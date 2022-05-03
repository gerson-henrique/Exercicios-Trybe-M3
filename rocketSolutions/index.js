const express = require('express');
const app = express();
const userModel = require('./models/userModel')

app.use(express.json());

app.post('/user', async (req, res) => {
  const {firstName, lastName, email, password} = req.body
  const user = req.body
  const resposta = await userModel.create(user)
  return res.status(201).json(resposta);
})

app.listen('3001', () => {
  console.log("Rodando")
})