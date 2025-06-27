const mongoose = require('mongoose');

const tareaSchema = new mongoose.Schema({
    dia: { type: String, required: [true, 'El día es obligatorio'] },
    descripcion: { type: String, required: [true, 'La descripción es obligatoria'] },
    hecha: { type: Boolean, default: false },
    urgencia: { type: String, required: [true, 'La urgencia es obligatoria'] },
    usuarioId: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: [true, 'El ID de usuario es obligatorio'] }
},{
    timestamps: true, // Crea createdAt y updatedAt
}
);

module.exports = mongoose.model('Tarea', tareaSchema);
// Este modelo define la estructura de las tareas en la base de datos MongoDB.