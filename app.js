const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 3000;
const urlUsers = `https://api-books-ac3j.onrender.com/users`;
const urlBooks = `https://api-books-ac3j.onrender.com/books`;

app.use(cors());
app.use(express.json());    
app.use(express.urlencoded({ extended: true }));

app.get('/users', async (req, res) => {
  try {
    const response = await axios.get(urlUsers);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching users');
  }
});

app.get('/books', async (req, res) => {
  try {
    const response = await axios.get(urlBooks);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching books');
  }
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});