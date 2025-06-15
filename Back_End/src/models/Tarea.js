const mongoose = require('mongoose');

const tareaSchema = new mongoose.Schema({
    dia: { type: String, required: true },
    descripcion: { type: String, required: true },
    hecha: { type: Boolean, default: false },
    urgencia: { type: String, required: true },
    usuarioId: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true }
},{
    timestamps: true, // Crea createdAt y updatedAt
}
);

module.exports = mongoose.model('Tarea', tareaSchema);
// Este modelo define la estructura de las tareas en la base de datos MongoDB.