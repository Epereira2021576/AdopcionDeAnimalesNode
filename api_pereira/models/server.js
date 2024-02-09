const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../db/config');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usuarioPath = '/api/usuarios';
    this.animalPath = '/api/animales';
    this.conectarDB();
    this.middlewares();
    this.routes();
  }

  async conectarDB() {
    await dbConnection();
  }

  middlewares() {
    this.app.use(express.static('public'));
    this.app.use(cors());
    this.app.use(express.json());
  }

  routes() {
    this.app.use(this.usuarioPath, require('../routes/user.routes'));
    this.app.use(this.animalPath, require('../routes/animal.routes'));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('Server running on port ', this.port);
    });
  }
}

module.exports = Server;
