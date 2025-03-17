// pages/api/posts/delete/[id].ts

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

    if (req.method === "DELETE") {
        const query = "DELETE FROM posts WHERE id = ?";
        db.query(query, [id], (err) => {
            if (err) {
                return res.status(500).json({ error: "Error deleting post" });
            }
            res.status(200).json({ message: "Post deleted successfully" });
        });
    }
}
