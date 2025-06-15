const {validationResult} = require('express-validator');
const usuarioService = require('../service/usuarioService');
const bcrypt = require('bcryptjs');

// Obtener todos los usuarios
exports.getAllUsuarios = async (req, res) => {
  try {
    const usuarios = await usuarioService.getAllUsuarios();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener los usuarios', error: error.message });
  }
};

// Obtener un usuario por ID
exports.getUsuarioById = async (req, res) => {
  try {
    const usuario = await usuarioService.getUsuarioById(req.params.id);
    if (!usuario) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener el usuario', error: error.message });
  }
};


//Crear un nuevo usuario

exports.createUsuario = async (req, res) => {
  try {
    const nuevoUsuario = await usuarioService.createUsuario(req.body);
    res.status(201).json(nuevoUsuario);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al crear el usuario', error: error.message });
  }
};

//Actualizar un usuario

exports.updateUsuario = async (req, res) => {
  try {
    const usuarioActualizado = await usuarioService.updateUsuario(req.params.id, req.body);
    res.json(usuarioActualizado);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al actualizar el usuario', error: error.message });
  }
};

//Eliminar un usuario

exports.deleteUsuario = async (req, res) => {
  try {
    await usuarioService.deleteUsuario(req.params.id);
    res.json({ mensaje: 'Usuario eliminado' });
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al eliminar el usuario', error: error.message });
  }
};

exports.loginUsuario = async (req, res) => { 
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errores: errors.array() });
  }

  const { email, contrasena } = req.body;

  try {
    // Buscar usuario por email
    const usuario = await usuarioService.getUsuarioPorEmail(email);
    if (!usuario) {
      return res.status(400).json({ mensaje: 'Usuario o contraseña incorrectos' });
    }

    // Comparar contraseñas
    const esValida = await bcrypt.compare(contrasena, usuario.contrasena);
    if (!esValida) {
      return res.status(400).json({ mensaje: 'Usuario o contraseña incorrectos' });
    }

    // Login exitoso
    res.json({ mensaje: 'Login exitoso', usuario: { id: usuario._id, nombre: usuario.nombre, email: usuario.email } });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error en el login', error: error.message });
  }
};