const bookservice = require('../service/bookservice')

const getAll = async ( _req, res) => {
  const books = await bookservice.getAll();
  res.status(200).json(books);
};

const getById = async ( req, res) => {
  const {id} = req.params;

  const book = await bookservice.getById(id);
  if(!book) return res.status(404).json({message: 'Book not find'});
  res.status(200).json(book);
};

const create = async ( req, res) => {
  const { title, author, pageQuantity } = req.body;
try {
  const book = await bookservice.create(title, author, pageQuantity);
  res.status(200).json(book);
  
} catch { e =>{
  res.status(500).json({ message: e.message})
}

}
};

const update = async (req, res) => {
  const { id } = req.params;
  const { title, author, pageQuantity } = req.body;
  
  const updatedUser = await BookService.update(id, { title, author, pageQuantity });

  if (!updatedUser) return res.status(404).json({ message: 'Book not found' });

  res.status(201).json({ message: 'Book updated' });
};

const remove = async (id) => {
  const removed = await Book.destroy(
    { where: { id } },
  );

  return removed;
};

module.exports = {
  getAll,
  create,
  getById,
  update,
  remove,
}