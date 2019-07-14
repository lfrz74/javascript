const usuariosController = require('../controllers').usuarios;
const md_auth = require('../authenticated/authenticated');

module.exports = (app) => {
    app.post('/api/usuario', md_auth.auth, usuariosController.crearUsuario);
    app.post('/api/login', usuariosController.login);
    app.get('/api/usuarios', md_auth.auth, usuariosController.consultarUsuarios);
}
