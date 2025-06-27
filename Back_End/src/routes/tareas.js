const express = require('express');
const router = express.Router();
const tareaController = require('../controllers/tarea.controller');
const auth = require('../middleware/auth');

// Obtener todas las tareas
router.get('/', auth, tareaController.getAllTareas);

// Obtener una tarea por ID
router.get('/:id', auth, tareaController.getTareaById);

// Crear una nueva tarea
router.post('/',auth,tareaController.createTarea);

// Actualizar una tarea existente
router.put('/:id',auth,tareaController.updateTarea);

// Eliminar una tarea
router.delete('/:id',auth,tareaController.deleteTarea);

module.exports = router;

