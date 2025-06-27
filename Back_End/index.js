const express = require('express'); // Importamos express
const app = express(); // Creamos la app
const PORT = 3000; // Puerto donde escuchará el servidor
const mongoose = require('mongoose');
require('dotenv').config();
const connectDB = require('./config/database');
const cors = require('cors');
connectDB();

app.use(cors({
  origin: 'http://localhost:5173' 
})); // Habilitar CORS


//importar rutas

const tareasRoutes = require('./src/routes/tareas');
const usuariosRoutes = require('./src/routes/usuario');

app.use(express.json()); // Middleware para parsear JSON

app.use('/api/tareas', tareasRoutes);
app.use('/api/usuarios', usuariosRoutes);




app.get('/ping-db', async (req, res) => {
  try {
    const admin = mongoose.connection.db.admin();
    const result = await admin.ping();
    res.status(200).json({ message: '🟢 MongoDB responde', result });
  } catch (err) {
    console.error('❌ Error en ping:', err.message);
    res.status(500).json({ message: '🔴 Error al conectar con MongoDB', error: err.message });
  }
});


app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});





