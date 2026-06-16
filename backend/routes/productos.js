const express = require('express');
const router = express.Router();
const Producto = require('../models/Producto');

router.post('/', async (req, res) => {
    try {
        const producto = new Producto(req.body);
        await producto.save();
        res.status(201).json(producto);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const productos = await Producto.find();
        res.json(productos);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
});

module.exports = router;