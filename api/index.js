const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// GET endpoint
app.get("/", (req, res) => {
  const response = {
    message: "GET request received",
  };
  res.json(response);
});

// GET endpoint
app.get("/hello", (req, res) => {
  const response = {
    message: "Hello from iic2173!",
  };
  res.json(response);
});

// POST endpoint
app.post("/", (req, res) => {
  const requestBody = req.body;
  const response = {
    message: "POST request received",
    dataReceived: requestBody,
  };
  res.json(response);
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
