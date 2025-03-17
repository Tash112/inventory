const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Import and use the product routes
const productRoutes = require('./routes/productRoutes');
app.use('/products', productRoutes);

app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
});
