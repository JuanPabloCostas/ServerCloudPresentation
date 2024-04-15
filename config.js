const mysql = require('mysql2')

const connection = mysql.createConnection({
    user: "admin",
    password: "31eiaMO6uTQL1Y2dzArg",
    host: "database-test.c9wa6o2iew4l.us-east-1.rds.amazonaws.com",
    database: "users"
})

connection.connect(err => {
  if (err) throw err;
  console.log("Connected to database")  
});

module.exports = connection;