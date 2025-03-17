import mysql from "mysql2/promise";

// Connexion à la base de données
export const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "ligne13",
});
