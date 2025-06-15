const Tarea= require('../models/Tarea');

// Crear una tarea
async function createTarea(data) {
  const tarea = new Tarea(data);
  return await tarea.save();
}

// Obtener todas las tareas
async function getAllTareas() {
  return await Tarea.find();
}

// Obtener una tarea por ID
async function getTareaById(id) {
  return await Tarea.findById(id);
}

// Actualizar una tarea
async function updateTarea(id, data) {
  return await Tarea.findByIdAndUpdate(id, data, { new: true });
}

// Eliminar una tarea
async function deleteTarea(id) {
  return await Tarea.findByIdAndDelete(id);
}

module.exports = {
  createTarea,
  getAllTareas,
  getTareaById,
  updateTarea,
  deleteTarea
};