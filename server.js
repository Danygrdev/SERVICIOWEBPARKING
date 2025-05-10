// server.js
const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes'); // Asegúrate de que este path sea correcto

app.use(express.json()); // Middleware para parsear el cuerpo de la solicitud

// Usar las rutas en el prefijo '/api/auth'
app.use('/api/auth', authRoutes);

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});
