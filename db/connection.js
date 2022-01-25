const mysql = require('mysql2');

const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: '!Maxwell217',
      database: 'election'
    },
    console.log('Connected to the election database.')
  );

  module.exports = db;