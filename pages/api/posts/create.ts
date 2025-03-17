// pages/api/posts/create.ts

import { NextApiRequest, NextApiResponse } from "next";
import mysql from "mysql2";

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "ligne13",
});

db.connect();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        const { title, content } = req.body;
        const query = "INSERT INTO posts (title, content, created_at) VALUES (?, ?, NOW())";
        db.query(query, [title, content], (err) => {
            if (err) {
                return res.status(500).json({ error: "Error creating post" });
            }
            res.status(201).json({ message: "Post created successfully" });
        });
    }
}
