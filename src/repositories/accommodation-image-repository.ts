import db from 'src/database';
import AccommodationImage from 'src/entities/accommodation-image';

export class AccommodationImageRepository {
  async insert(accommodationImage: AccommodationImage) {
    await db.query(
      'INSERT INTO "AccommodationImage" ("accommodationId", "fileUrl") VALUES ($1, $2)',
      [accommodationImage.accommodationId, accommodationImage.fileUrl],
    );
  }
}
