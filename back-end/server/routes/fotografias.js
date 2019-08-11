const fotografiasController = require('../controllers').fotografias;
const md_auth = require('../authenticated/authenticated');
const cm = require('connect-multiparty');
const md_upload = cm({uploadDir:'./server/uploads/fotografias'});

module.exports = (app) => {
    app.post('/api/fotografia', md_auth.auth, fotografiasController.createFotografia);
    app.put('/api/fotografia/:id', md_auth.auth, fotografiasController.updateFotografia);
    app.post('/api/upload-fotografia/:id', [md_auth.auth, md_upload ], fotografiasController.uploadFotografia);
    app.get('/api/get-fotografia/:fotografia/:thumb', fotografiasController.getFotografia);
    app.get('/api/fotografias', fotografiasController.getAll);
    app.get('/api/fotografias-admin', md_auth.auth, fotografiasController.getAllAdmin);
    //Sin jwt les consumí desde ASP.NET MVC Core para la prueba
    app.get('/api/fotografia1/:id', fotografiasController.getFotografiabyId);
    app.post('/api/fotografia2', fotografiasController.createFotografia);
}
