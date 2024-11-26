import Guest from 'src/entities/guest';
import db from '../database';
import { updatedAt } from 'src/utils/date';

export class GuestRepository {
  async getAll() {
    const { rows } = await db.query('SELECT * FROM "Guest"');

    return rows;
  }

  async insert(guest: Guest) {
    await db.query(
      'INSERT INTO "Guest" ("firstName", "lastName", "email", "document", "updatedAt") VALUES ($1, $2, $3, $4, $5)',
      [
        guest.firstName,
        guest.lastName,
        guest.email,
        guest.document,
        updatedAt(),
      ],
    );
  }
}
