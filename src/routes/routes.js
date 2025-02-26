const express = require('express');
const multer = require('multer'); 
const router = express.Router();

const AWSController = require('../Controller/AWSController');
const ImageControllerNova = require('../Controller/ImageController');
const UserControllerNova = require('../Controller/UsuarioController');

const storage = multer.memoryStorage();  
const upload = multer({ storage: storage });  

router.get('/imagens', ImageControllerNova.listarImagem);
router.get('/imagem/:id', ImageControllerNova.buscarImagem);
router.post('/novaImagem', ImageControllerNova.novaImagem);
router.put('/editarImagem/:id', ImageControllerNova.atualizarImagem);  
router.delete('/apagarImagem/:id', ImageControllerNova.removerImagem);

router.post('/novoUsuario', UserControllerNova.novaUsuario);
router.get('/usuarios', UserControllerNova.listarUsuario);
router.get('/usuario/:id', UserControllerNova.buscarUsuario);
router.put('/editarUsuario/:id', UserControllerNova.atualizarUsuario);
router.delete('/apagarUsuario/:id', UserControllerNova.removerUsuario);

router.get('/awscontroller/buscar', AWSController.buscarImagem);
router.post('/awscontroller/enviar/:id', upload.single('imagem'), AWSController.enviarImagem);

module.exports = router;
