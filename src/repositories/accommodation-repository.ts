import db from 'src/database';
import { Accommodation } from 'src/entities/accommodation';

export class AccommodationRepository {
  async getAll() {
    const { rows } = await db.query(`
        SELECT * FROM "Accommodation" a
        INNER JOIN "AccommodationImage" ai
        ON a."id" = ai."accommodationId"
    `);

    return rows;
  }

  async insert(accommodation: Accommodation): Promise<number> {
    const { rows } = await db.query(
      `
        INSERT INTO "Accommodation" (
          "name", 
          "description", 
          "pricePerNight", 
          "checkin", 
          "checkout", 
          "guests", 
          "beds", 
          "minNights", 
          "active"
        ) VALUES (
          $1, $2, $3, $4, $5, $6, $7, $8, $9
        )
          RETURNING id
    `,
      [
        accommodation.name,
        accommodation.description,
        accommodation.pricePerNight,
        accommodation.checkin,
        accommodation.checkout,
        accommodation.guests,
        accommodation.beds,
        accommodation.minNights,
        accommodation.active,
      ],
    );

    return Number(rows[0].id);
  }
}
