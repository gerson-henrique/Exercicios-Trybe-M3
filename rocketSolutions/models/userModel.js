const  connect  = require('./connection');

const create = async (user) => {
  const query = 'INSERT INTO model_example.user (first_name, last_name, email, password) VALUES (?, ?, ?, ?);'
  const  newUser = await connect.execute(query, [user.firstName , user.lastName, user.email, user.password]);
  return newUser;
}

module.exports = {
  create,
}