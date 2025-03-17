const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Tash',  // Replace with actual password
    database: 'smart_inventory',
    port: 5000  // Use the correct port
});

db.connect((err) => {
    if (err) {
        console.error('❌ Database connection failed:', err);
    } else {
        console.log('✅ Successfully connected to MySQL on port 5000!');
    }
});

module.exports = db;
