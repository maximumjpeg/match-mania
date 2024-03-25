const db = require('./index.js');

module.exports = {
  createUser: (userName, firstName, lastName, callback) => {},
  getUser: (id, callback) => {
    const queryStr = `SELECT * FROM USERS WHERE ID = $1`;
    async db.query(queryStr, [])
  }
}