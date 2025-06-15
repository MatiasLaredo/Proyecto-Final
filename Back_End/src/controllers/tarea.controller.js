const tareaService = require('../service/tareaService');

// Obtener todas las tareas

exports.getAllTareas = async (req, res) => {
  try {
    const tareas = await tareaService.getAllTareas();
    res.json(tareas);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener las tareas', error: error.message });
  }
};

// Obtener una tarea por ID
exports.getTareaById = async (req, res) => {
  try {
    const tarea = await tareaService.getTareaById(req.params.id);
    if (!tarea) {
      return res.status(404).json({ mensaje: 'Tarea no encontrada' });
    }
    res.json(tarea);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener la tarea', error: error.message });
  }
};


// Crear una nueva tarea

exports.createTarea = async (req, res) => {
  try {
    const nuevaTarea = await tareaService.createTarea(req.body);
    res.status(201).json(nuevaTarea);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al crear la tarea', error: error.message });
  }
};

// Actualizar una tarea existente

exports.updateTarea = async (req, res) => {
  try {
    const tareaActualizada = await tareaService.updateTarea(req.params.id, req.body);
    res.json(tareaActualizada);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al actualizar la tarea', error: error.message });
  }
};

// Eliminar una tarea

exports.deleteTarea = async (req, res) => {
  try {
    await tareaService.deleteTarea(req.params.id);
    res.json({ mensaje: 'Tarea eliminada' });
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al eliminar la tarea', error: error.message });
  }
};