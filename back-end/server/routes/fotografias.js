const fotografiasController = require('../controllers').fotografias;
const md_auth = require('../authenticated/authenticated');
const cm = require('connect-multiparty');
const md_upload = cm({uploadDir:'./server/uploads/fotografias'});

module.exports = (app) => {
    app.post('/api/fotografia', md_auth.auth, fotografiasController.createFotografia);
    app.put('/api/fotografia/:id', md_auth.auth, fotografiasController.updateFotografia);
    app.post('/api/upload-fotografia/:id', [md_auth.auth, md_upload ], fotografiasController.uploadFotografia);
}
