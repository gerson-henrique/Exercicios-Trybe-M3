const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const bookscontroler = require('./controllers/bookcontroller')

app.use(express.json());

app.get('/books', bookscontroler.getAll)

app.get('/books:id', bookscontroler.getAll)

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));

app.post('/book', BooksController.create);

app.put('/book/:id', BooksController.update);

app.delete('/book/:id', BooksController.remove);