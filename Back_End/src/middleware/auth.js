const Usuario = require('../models/Usuario');
const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
const token = req.header('Authorization')?.replace('Bearer ', '');
if (!token) {
    return res.status(401).json({ mensaje: 'Token no proporcionado' });
}
try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secreto');
    const usuario = await Usuario.findById(decoded.id);
    if (!usuario) {return res.status(401).json({mensaje: 'Usuario no encontrado'});}
    req.usuario = usuario;
    next();
} catch (error) {
    res.status(401).json({ mensaje: 'Token inválido' });
}
};

