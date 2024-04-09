import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import bcrypt from 'bcrypt';

export async function post(request) {
    const { email, password } = request.body;

    const db = await open({
        filename: './my-database.db',
        driver: sqlite3.Database
    });

    const user = await db.get('SELECT * FROM users WHERE email = ?', [email]);

    if (!user) {
        return {
            status: 401,
            body: {
                message: 'Invalid email or password.'
            }
        };
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
        return {
            status: 401,
            body: {
                message: 'Invalid email or password.'
            }
        };
    }

    return {
        status: 200,
        body: {
            user: {
                email: user.email
            }
        }
    };
}