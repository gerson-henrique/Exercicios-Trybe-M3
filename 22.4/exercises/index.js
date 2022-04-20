const express = require('express');
const bodyParser = require('body-parser');
const { appendFile } = require('fs');
const { application } = require('express');

app = express();

app.use(bodyParser.json());

app.get('/ping',(_req,res) => {
  return res.json({"message":"pong"}); 
})

app.post('/hello',(req,res) => {
  const {name} = req.body;


  return res.json({"message":`Hello ${name}`}); 
})

app.post('/greatings',(req,res) => {
  const {name, age} = req.body;

  if (age <= 17) return res.status(401).json({"Message":" Unauthorized"});

  return res.json({"message":`Hello ${name}`}); 

})

app.put('/user/:name/:age',(req,res) => {
  const {name, age} = req.params
  return res.json({"message":`Hello ${name}, você tem ${age} anos de idade!`}); 

})




app.listen(3010, () => {
  console.log("ouvindo na porta 3010");
})