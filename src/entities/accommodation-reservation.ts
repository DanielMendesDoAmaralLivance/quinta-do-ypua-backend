export default interface AccommodationReservation {
  guests: number;
  predictedStartAt: Date;
  predictedEndAt: Date;
  totalPrice: number;
  includedLunch: boolean;
  includedDinner: boolean;
  accommodationId: number;
  accommodationReservationStatusId: number;
  responsibleGuestId: number;
}
