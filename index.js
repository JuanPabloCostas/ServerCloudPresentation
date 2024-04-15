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

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

// admin
// 31eiaMO6uTQL1Y2dzArg
