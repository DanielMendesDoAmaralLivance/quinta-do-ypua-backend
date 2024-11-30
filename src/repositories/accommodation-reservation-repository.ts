import db from 'src/database';
import AccommodationReservation from 'src/entities/accommodation-reservation';

export class AccommodationReservationRepository {
  async getAll() {
    const { rows } = await db.query(
      `
        SELECT 
          "id",
          "guests",
          "predictedStartAt",
          "predictedEndAt",
          "startedAt",
          "endedAt",
          "totalPrice",
          "includedLunch",
          "includedDinner",
          "accommodationId",
          "accommodationReservationStatusId",
          "resposibleGuestId"
        FROM "AccommodationReservation"
        ORDER BY id DESC
    `,
    );

    return rows;
  }

  async insert(accommodationReservation: AccommodationReservation) {
    await db.query(
      `
        INSERT INTO "AccommodationReservation" (
            "guests", 
            "predictedStartAt", 
            "predictedEndAt",
            "totalPrice", 
            "includedLunch", 
            "includedDinner", 
            "accommodationId", 
            "accommodationReservationStatusId", 
            "resposibleGuestId"
        )
        VALUES (
            $1, $2, $3, $4, $5, $6, $7, $8, $9
        )
    `,
      [
        accommodationReservation.guests,
        accommodationReservation.predictedStartAt,
        accommodationReservation.predictedEndAt,
        accommodationReservation.totalPrice,
        accommodationReservation.includedLunch,
        accommodationReservation.includedDinner,
        accommodationReservation.accommodationId,
        accommodationReservation.accommodationReservationStatusId,
        accommodationReservation.responsibleGuestId,
      ],
    );
  }

  async checkin(id: number) {
    await db.query(
      `
        UPDATE "AccommodationReservation" 
        SET 
          "accommodationReservationStatusId" = 3,
          "startedAt" = current_timestamp
        WHERE "id" = $1
    `,
      [id],
    );
  }

  async checkout(id: number) {
    await db.query(
      `
        UPDATE "AccommodationReservation" 
        SET 
          "accommodationReservationStatusId" = 6,
          "endedAt" = current_timestamp
        WHERE "id" = $1
    `,
      [id],
    );
  }

  async cancel(id: number) {
    await db.query(
      `
        UPDATE "AccommodationReservation" 
        SET 
          "accommodationReservationStatusId" = 5
        WHERE "id" = $1
    `,
      [id],
    );
  }
}
