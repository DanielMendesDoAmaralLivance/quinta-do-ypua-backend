import db from 'src/database';
import AccommodationImage from 'src/entities/accommodation-image';

export class AccommodationImageRepository {
  async insert(accommodationImage: AccommodationImage) {
    await db.query(
      `-- Quando a funcionalidade de remover imagens antigas estiver pronta, remover este trecho.
        DELETE FROM "AccommodationImage" WHERE "accommodationId" = $1;`,
      [accommodationImage.accommodationId],
    );

    await db.query(
      `
        INSERT INTO "AccommodationImage" ("accommodationId", "fileUrl") VALUES ($1, $2);
      `,
      [accommodationImage.accommodationId, accommodationImage.fileUrl],
    );
  }
}
