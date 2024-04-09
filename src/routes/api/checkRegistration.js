import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import bcrypt from 'bcrypt';

let db;

async function openDb() {
    db = await open({
        filename: '/my-database.db',
        driver: sqlite3.Database
    });
}

export async function get(req, res) {
    try {
        await openDb();
        const { email, password } = req.query;
        console.log(`Email: ${email}`); // Print email
        console.log(`Password: ${password}`); // Print password
        const sql = `
            SELECT password
            FROM users
            WHERE email = $email
        `;

        const statement = db.prepare(sql);
        const row = statement.get({ email });

        if (row) {
            const match = await bcrypt.compare(password, row.password);
            if (match) {
                res.status(200).send({ message: 'Credentials are correct.' });
            } else {
                res.status(401).send({ error: 'Incorrect password.' });
            }
        } else {
            res.status(404).send({ error: 'No user found with this email.' });
        }
    } catch (error) {
        res.status(500).send({ error: 'An error occurred while checking the credentials.' });
    }
}

openDb().catch(console.error);
