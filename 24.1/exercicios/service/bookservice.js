const { book } = require('../models');
const book = require('../models/book');

const getAll = async () => {
  const books = await book.findAll();
  return books;
}

const getById = async () => {
  const book = await book.findByPk(id);
  return book;
}

const create = async () => {
  const book = await book.create({title, author, pageQuantity})
  return book;
}

const update = async (id, { title, author, pageQuantity }) => {
  const [updated] = await Book.update(
    { 
      title, 
      author, 
      pageQuantity, 
    }, 
    { where: { id } },
  );

  return updated;
};

const remove = async (id) => {
  const removed = await Book.destroy(
    { where: { id } },
  );

  return removed;
};


module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};