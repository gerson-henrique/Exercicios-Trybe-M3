const connection = require('./conection');
const serialize = (authordata) => {
return {
  id: authordata.id,
  firstName: authordata.first_name,
  middleName: authordata.middle_name,
  lastName: authordata.lastName
}
}

const getAll = async () => {
  const [authors] = await connection.execute('SELECT * FROM authors;');
  return authors.map(serialize);
};

module.exports = {
  getAll,
}