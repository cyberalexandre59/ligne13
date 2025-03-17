import { NextApiRequest, NextApiResponse } from "next";
import mysql from "mysql2/promise";

// Connexion à la base de données
export const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "ligne13",
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Méthode non autorisée" });
    }

    const { username, password } = req.body;

    try {
        // Vérifier si l'utilisateur existe
        const [rows]: any = await db.query("SELECT * FROM users WHERE username = ?", [username]);

        if (rows.length === 0) {
            return res.status(401).json({ message: "Identifiants invalides" });
        }

        const user = rows[0]; // Récupérer l'utilisateur

        // Comparer le mot de passe (directement, car pas haché)
        if (password !== user.password) {
            return res.status(401).json({ message: "Identifiants invalides" });
        }

        // Stocker l'ID utilisateur dans un cookie
        res.setHeader("Set-Cookie", `userId=${user.id}; Path=/; Max-Age=3600`);

        res.status(200).json({ message: "Connexion réussie" });
    } catch (error) {
        console.error("Erreur lors de la connexion :", error);
        res.status(500).json({ message: "Erreur serveur" });
    }
}

export function isAuthenticated(req: NextApiRequest) {
    const cookie = req.headers.cookie || "";
    const userIdMatch = cookie.match(/userId=(\d+)/);
    return userIdMatch ? parseInt(userIdMatch[1]) : null;
}
