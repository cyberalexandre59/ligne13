// pages/api/posts/edit/[id].ts

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
    const { id } = req.query;
    const { title, content } = req.body;

    if (req.method === "PUT") {
        const query = "UPDATE posts SET title = ?, content = ? WHERE id = ?";
        db.query(query, [title, content, id], (err) => {
            if (err) {
                return res.status(500).json({ error: "Error updating post" });
            }
            res.status(200).json({ message: "Post updated successfully" });
        });
    }
}
