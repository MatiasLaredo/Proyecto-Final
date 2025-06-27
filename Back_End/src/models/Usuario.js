const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const usuarioSchema = new mongoose.Schema({
    nombre: { type: String, required: [true, 'El nombre es obligatorio'] },
    email: { type: String, required: [true, 'El email es obligatorio'], unique: true },
    contrasena: { type: String, required: [true, 'La contraseña es obligatoria'] },
    rol: { type: String, default: 'usuario' },
    fechaRegistro: { type: Date, default: Date.now }
});

usuarioSchema.pre('save', async function(next) {
    if (!this.isModified('contrasena')) return next();
    try {
        const salt = await bcrypt.genSalt(10);
        this.contrasena = await bcrypt.hash(this.contrasena, salt);
        next();
    } catch (error) {
        next(error);
    }
});

module.exports = mongoose.model('Usuario', usuarioSchema);
