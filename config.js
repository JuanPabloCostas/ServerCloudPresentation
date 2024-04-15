const mysql = require('mysql2')

const connection = mysql.createConnection({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
})

connection.connect(err => {
  if (err) throw err;
  console.log("Connected to database")  
});

module.exports = connection;