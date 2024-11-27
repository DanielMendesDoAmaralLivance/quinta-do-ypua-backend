import db from 'src/database';
import AccommodationReservation from 'src/entities/accommodation-reservation';

export class AccommodationReservationRepository {
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
            $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11
        ),
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
}
