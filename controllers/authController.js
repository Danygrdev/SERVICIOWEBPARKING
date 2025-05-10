// controllers/authController.js
const jwt = require('jsonwebtoken');
require('dotenv').config();

const secretKey = process.env.JWT_SECRET;

// Método para registrar
exports.register = (req, res) => {
    const { username, password } = req.body;

    // Aquí puedes agregar la lógica de registro (por ejemplo, verificar que el usuario no exista, guardar en DB, etc.)

    res.status(201).json({ message: 'Usuario registrado correctamente' });
};

// Método para login
exports.login = (req, res) => {
    const { username, password } = req.body;

    // Lógica para validar el usuario y la contraseña
    // Puedes verificar las credenciales con tu base de datos aquí

    const payload = { username };

    // Firmar el token
    jwt.sign(payload, secretKey, { expiresIn: '1h' }, (err, token) => {
        if (err) {
            return res.status(500).json({ message: 'Error al generar el token' });
        }
        res.json({ token });
    });
};
