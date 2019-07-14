const fotografiasController = require('../controllers').fotografias;
const md_auth = require('../authenticated/authenticated');

module.exports = (app) => {
    app.post('/api/fotografia', md_auth.auth, fotografiasController.createFotografia);
    app.put('/api/fotografia/:id', md_auth.auth, fotografiasController.updateFotografia);
}
