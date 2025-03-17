// pages/api/posts.js

import mysql from 'mysql2';

// Créer une connexion à la base de données
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ligne13',
});

db.connect((err) => {
    if (err) throw err;
    console.log('Database connected!');
});

export default async function handler(req, res) {
    if (req.method === 'GET') {
        // Récupérer tous les articles de blog
        db.query('SELECT * FROM posts ORDER BY created_at DESC', (err, results) => {
            if (err) {
                return res.status(500).json({ error: 'Database query failed' });
            }
            res.status(200).json(results);
        });
    }
}

