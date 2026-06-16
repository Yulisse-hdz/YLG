const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Usuario = require('../models/Usuario');

const router = express.Router();

// Registro
router.post('/registro', async (req, res) => {
    try {
        const { nombre, correo, password } = req.body;

        const existe = await Usuario.findOne({ correo });

        if (existe) {
            return res.status(400).json({
                mensaje: 'El correo ya existe'
            });
        }

        const passwordHash = await bcrypt.hash(password, 10);

        const usuario = new Usuario({
            nombre,
            correo,
            password: passwordHash
        });

        await usuario.save();

        res.json({
            mensaje: 'Usuario registrado'
        });

    } catch (error) {
        res.status(500).json(error);
    }
});

// Login
router.post('/login', async (req, res) => {
    try {
        const { correo, password } = req.body;

        const usuario = await Usuario.findOne({ correo });

        if (!usuario) {
            return res.status(400).json({
                mensaje: 'Usuario no encontrado'
            });
        }

        const valido = await bcrypt.compare(
            password,
            usuario.password
        );

        if (!valido) {
            return res.status(400).json({
                mensaje: 'Contraseña incorrecta'
            });
        }

        const token = jwt.sign(
            { id: usuario._id },
            process.env.JWT_SECRET,
            { expiresIn: '1d' }
        );

        res.json({
            token
        });

    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;