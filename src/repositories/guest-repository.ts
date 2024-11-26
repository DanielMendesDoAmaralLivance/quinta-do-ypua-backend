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
      'INSERT INTO "Guest" ("firstName", "lastName", "email", "document") VALUES ($1, $2, $3, $4)',
      [guest.firstName, guest.lastName, guest.email, guest.document],
    );
  }

  async update(id: number, guest: Guest) {
    await db.query(
      'UPDATE "Guest" SET "firstName" = $1, "lastName" = $2, "email" = $3, "document" = $4, "updatedAt" = $5 WHERE id = $6',
      [
        guest.firstName,
        guest.lastName,
        guest.email,
        guest.document,
        updatedAt(),
        id,
      ],
    );
  }

  async delete(id: number) {
    await db.query('DELETE FROM "Guest" WHERE id = $1', [id]);
  }
}
