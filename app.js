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

app.get('/', (req, res) =>{
  res.send('Pagina Principal')
}),

app.get('/users', async (req, res) => {
  try {
    const response = await axios.get(urlUsers);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    if (error.response) {
      res.status(error.response.status).json({ error: error.response.data });
    } else {
      res.status(500).send('Error interno al obtener el usuario');
    }
  }
  }
);

app.get('/books', async (req, res) => {
  try {
    const response = await axios.get(urlBooks);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    if (error.response) {
      res.status(error.response.status).json({ error: error.response.data });
    } else {
      res.status(500).send('Error interno al obtener los libros');
    }
  }
});
app.get('/users/:id', async (req, res) => { 
    const { id } = req.params;
    try {
        const response = await axios.get(`${urlUsers}/${id}`);
        res.json(response.data);
    } catch (error) {
        console.error(error);
        if (error.response) {
          res.status(error.response.status).json({ error: error.response.data });
        } else {
          res.status(500).send('Error interno al obtener el id del usuario');
        }
      }
    });

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
//se puede hacer un routes para hacerlo mas limpio