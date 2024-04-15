require('dotenv').config();
const express = require("express");
const connection = require("./config");
const app = express();
const port = 5901; // You can change this to any port you prefer

// Define a route to serve the HTML file
app.get("/", async (req, res) => {
  try {
    connection.query("SELECT COUNT(*) as count FROM users;", (err, result) => {
      if (err) {
        return res.status(400).send(err);
      }

      res.status(200).send(`<html><body><h1>En total hay ${result[0].count} usuarios.</h1></body></html>`);
    });
  } catch (error) {
    res.status(400).json({ error });
  }
});

app.get("/users", async (req, res) => {
  try {
    connection.query("SELECT * FROM users;", (err, result) => {
      if (err) {
        return res.status(400).send(err);
      }

      res.status(200).json(result)

      // res.status(200).send(`<html><body><h1>En total hay ${result[0].count} usuarios.</h1></body></html>`);
    });
  } catch (error) {
    res.status(400).json({ error });
  }
});

app.get("/create", (req, res) => {
  try {
    const usernames = [
      "John Doe",
      "Alice Smith",
      "Bob Johnson",
      "Emily Wilson",
      "Michael Brown",
      "Jessica Carter",
      "David Clark",
      "Olivia Perez",
      "Ryan Taylor",
      "Laura Miller",
      "Sophia Anderson",
      "William Martinez",
      "Grace Thompson",
      "Daniel Rodriguez",
      "Ella Harris",
      "James Lee",
      "Ava Scott",
      "Christopher White",
      "Mia Lopez",
      "Matthew Adams"
  ];
  

    const randomIndex = Math.floor(Math.random() * usernames.length);
    const username = usernames[randomIndex];
    const email = username.replace(/\s+/g, '').toLowerCase() + '@example.com';

    connection.query(`INSERT INTO users (username, email, age, registration_date) VALUES
    (${username}, ${email}, 25, '2023-01-15');`, (err, result) => {
      if (err) {
        return res.status(400).send(err);
      }
    })

    res.status(200).send(`<html><body><h1>${username} agregado a la base de datos.</h1></body></html>`);

  } catch (error) {
    res.status(400).json({ error });
  }
})


// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
