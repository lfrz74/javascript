const usuariosController = require('../controllers').usuarios;

module.exports = (app) => {
    app.post('/api/usuario', usuariosController.crearUsuario);
}
