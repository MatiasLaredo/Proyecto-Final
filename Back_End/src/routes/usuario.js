const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuario.controller');
const {body}= require('express-validator');

// Obtener todos los usuarios
router.get('/', usuarioController.getAllUsuarios);

// Obtener un usuario por ID
router.get('/:id', usuarioController.getUsuarioById);

// Crear un nuevo usuario
router.post('/', usuarioController.createUsuario);

// Actualizar un usuario existente
router.put('/:id', usuarioController.updateUsuario);

// Eliminar un usuario
router.delete('/:id', usuarioController.deleteUsuario);

//Rutas de login y registro
router.post('/login', 
    body('email').isEmail().withMessage('Debe ser un correo electrónico válido'),
    body('contrasena').notEmpty().withMessage('La contraseña es obligatoria'),
    usuarioController.loginUsuario
);

module.exports = router;