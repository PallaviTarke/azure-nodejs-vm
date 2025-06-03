const express = require('express');
const mongoose = require('mongoose');
const app = express();

const mongoUrl = process.env.MONGO_URL;

mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("Mongo error:", err));

app.get('/', (req, res) => {
  res.send('Hello from Node.js on Azure with MongoDB!');
});

app.listen(3000, () => console.log("App running on port 3000"));
