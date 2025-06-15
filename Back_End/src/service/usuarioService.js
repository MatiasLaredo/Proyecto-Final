const Usuario = require("../models/Usuario");

// Crear un usuario
async function createUsuario(data) {
  const usuario = new Usuario(data);
  return await usuario.save();
}

// Obtener todos los usuarios
async function getAllUsuarios() {
  return await Usuario.find();
}

// Obtener un usuario por ID
async function getUsuarioById(id) {
  return await Usuario.findById(id);
}

// Actualizar un usuario
async function updateUsuario(id, data) {
  return await Usuario.findByIdAndUpdate(id, data, { new: true });
}

// Eliminar un usuario
async function deleteUsuario(id) {
  return await Usuario.findByIdAndDelete(id);
}
// Obtener un usuario por email
async function getUsuarioPorEmail(email){
  return await Usuario.findOne({email});
}


module.exports = {
  createUsuario,
  getAllUsuarios,
  getUsuarioById,
  updateUsuario,
  deleteUsuario,
  getUsuarioPorEmail
};