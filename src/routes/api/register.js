import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import bcrypt from 'bcrypt';

export async function post(request) {
    const { email, password } = request.body;

    const db = await open({
        filename: './my-database.db',
        driver: sqlite3.Database
    });

    const hashedPassword = await bcrypt.hash(password, 10);

    await db.run('INSERT INTO users (email, password) VALUES (?, ?)', [email, hashedPassword]);

    return {
        status: 200,
        body: {
            message: 'User registered successfully.'
        }
    };
}