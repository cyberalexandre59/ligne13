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
    if (req.method === "GET") {
        db.query("SELECT * FROM posts ORDER BY created_at DESC", (err, results) => {
            if (err) {
                return res.status(500).json({ error: "Database error" });
            }
            res.status(200).json(results);
        });
    }
}