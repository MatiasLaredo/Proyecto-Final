const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuario.controller');
const {body}= require('express-validator');
const auth = require('../middleware/auth');

// Obtener todos los usuarios
router.get('/', auth, usuarioController.getAllUsuarios);

// Obtener un usuario por ID
router.get('/:id', auth, usuarioController.getUsuarioById);

// Crear un nuevo usuario
router.post('/', usuarioController.createUsuario);

// Actualizar un usuario existente
router.put('/:id', auth, usuarioController.updateUsuario);

// Eliminar un usuario
router.delete('/:id', auth, usuarioController.deleteUsuario);

// Registro
router.post(
    '/register',
    [
    body('nombre').notEmpty().withMessage('El nombre es obligatorio'),
    body('email').isEmail().withMessage('Debe ser un correo electrónico válido'),
    body('contrasena').isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres')
    ],
    usuarioController.registerUsuario
);

// Login
router.post(
    '/login',
    [
    body('email').isEmail().withMessage('Email inválido'),
    body('contrasena').notEmpty().withMessage('La contraseña es obligatoria')
    ],
    usuarioController.loginUsuario
);

module.exports = router;