const express = require('express');
const bodyParser = require('body-parser');

const { getSimpsons, setSimpsons } = require("./fs-utils");

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

app.get('/simpsons',async (_req,res) => {
  try {
    const result = await getSimpsons()
    return res.status(200).json(result); 
  } catch (error) {
    return res.status(500).end();
  }
})

app.get('/simpsons/:id', async (req, res) => {
  try {
    const {id} = req.params;
    const result = await getSimpsons();
    const filtredResult = result.find((e) => e.id === id);


    if (!filtredResult) {
      // não esqueça de adicionar o return para impedir de que seu código continue.
      return res.status(404).json({ message: 'simpson not found' });
    }

    return res.status(202).json(filtredResult);
  }
  catch (e) {
    return res.status(500).end()
  }
})

app.post('/simpson',async (req, res) => {
  const {id,name} = req.body

  try {
    result = await setSimpsons({
      id: id,
      name: name 
    })
    return res.status(200).json({"message":"pod cola dog"})
  } catch (error) {
    console.log('q papelão hein')
  }
})

app.listen(3010, () => {
  console.log("ouvindo na porta 3010");
})