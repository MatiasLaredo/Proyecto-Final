const express = require('express');
const router = express.Router();
const tareaController = require('../controllers/tarea.controller');

// Obtener todas las tareas
router.get('/', tareaController.getAllTareas);

// Obtener una tarea por ID
router.get('/:id', tareaController.getTareaById);

// Crear una nueva tarea
router.post('/', tareaController.createTarea);

// Actualizar una tarea existente
router.put('/:id', tareaController.updateTarea);

// Eliminar una tarea
router.delete('/:id', tareaController.deleteTarea);

module.exports = router;

