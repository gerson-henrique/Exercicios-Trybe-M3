const express = require('express');
const axios = require('axios').default;
const app = express();
const PORT = 3000;

const API = 'https://api.coindesk.com/v1/bpi/currentprice/BTC.json';

// app.use(express.json());

const tokenValidation = (req, res, next) => {
	const tokenTest = /^[a-zA-Z0-9]$/;
	const token = 'aaaaaaaaaaa1';
	console.log(token);
	if (tokenTest.test(token)) return res.status(401).json({ 'message':'invalid token'});
	next();
};

app.get('/btc/price', tokenValidation, async (req, res) => {
	const response = await axios.get(API);
	if(!response) return res.status(500).end();
	return res.status(200).json(response.data);
});

app.listen(PORT, () => console.log('Run server http://localhost:3000'));

// http://localhost:3000/btc/price?token=123456789abc
