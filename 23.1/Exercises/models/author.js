const connection = require('./conection');
const serialize = (authordata) => {
return {
  id: authordata.id,
  firstName: authordata.first_name,
  middleName: authordata.middle_name,
  lastName: authordata.last_name
}
}

const getNewAuthor= ({id,firstName,middleName,lastName}) => {
  const fullname = [firstName, middleName, lastName].filter ((name)=>name).join(" ")
  return{
    id,
    firstName,
    middleName,
    lastName,
    fullname, 
  }
}

const getAll = async () => {
  const [authors] = await connection.execute('SELECT * FROM authors;');
  return authors.map(serialize).map(getNewAuthor);
};

module.exports = {
  getAll,
}