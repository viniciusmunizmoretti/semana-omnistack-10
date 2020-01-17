const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://viniciusmoretti:<meubanquinhodedadinhos>@cluster0-ullde.mongodb.net/semanaomnistack10retryWrites=true&w=majority', {
  useNewUrlParser: true, 
  useUnifiedTopology: true
});

app.use(express.json());
app.use(routes);

// Métodos HTTP: get, post, put, delete

// Tipos de parâmetro:
// Query Params: request.query (filtros, ordenação, paginação, ...)
// Route Params: request.params (identificar um recurso na alteração ou remoção)
// Body: request.body (dados para criação ou alteração de registro)

// MongoDB(nao-relacional)



app.listen(3333);