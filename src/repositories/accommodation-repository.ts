import db from 'src/database';

export class AccommodationRepository {
  async getAll() {
    const { rows } = await db.query(`
        SELECT * FROM "Accommodation" a
        INNER JOIN "AccommodationImage" ai
        ON a."id" = ai."accommodationId"
    `);

    return rows;
  }
}
