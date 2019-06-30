const usuariosController = require('../controllers').usuarios;

module.exports = (app) => {
    app.post('/api/usuario', usuariosController.crearUsuario);
    app.post('/api/login', usuariosController.login);
    app.get('/api/usuarios', usuariosController.consultarUsuarios);
}
