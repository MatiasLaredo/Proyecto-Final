const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const usuarioSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    contrasena: { type: String, required: true },
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
