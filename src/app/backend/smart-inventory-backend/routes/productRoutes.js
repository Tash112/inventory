const express = require('express');
const db = require('../config/db'); // Ensure that your db.js is in a folder named 'config' at the project root

const router = express.Router();

// GET all products
router.get('/', (req, res) => {
    db.query('SELECT * FROM products', (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

// GET a single product by ID
router.get('/:id', (req, res) => {
    db.query('SELECT * FROM products WHERE id = ?', [req.params.id], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        if (results.length === 0) return res.status(404).json({ message: "Product not found" });
        res.json(results[0]);
    });
});

// POST a new product
router.post('/', (req, res) => {
    const { name, quantity, price } = req.body;
    db.query('INSERT INTO products (name, quantity, price) VALUES (?, ?, ?)', [name, quantity, price], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ id: result.insertId, name, quantity, price });
    });
});

// PUT update a product
router.put('/:id', (req, res) => {
    const { name, quantity, price } = req.body;
    db.query('UPDATE products SET name=?, quantity=?, price=? WHERE id=?', [name, quantity, price, req.params.id], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Product updated successfully' });
    });
});

// DELETE a product
router.delete('/:id', (req, res) => {
    db.query('DELETE FROM products WHERE id=?', [req.params.id], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Product deleted successfully' });
    });
});

module.exports = router;
