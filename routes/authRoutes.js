// routes/authRoutes.js
const express = require('express');
const router = express.Router();

// Asegúrate de que el controlador esté correctamente importado
const authController = require('../controllers/authController'); 

// Ruta para registrar
router.post('/register', authController.register);

// Ruta para login
router.post('/login', authController.login);

module.exports = router;
