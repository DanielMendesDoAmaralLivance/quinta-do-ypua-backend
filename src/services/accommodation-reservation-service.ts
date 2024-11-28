import { Injectable } from '@nestjs/common';
import AccommodationReservation from 'src/entities/accommodation-reservation';
import { AccommodationReservationStatus } from 'src/enums/accommodation-reservation-status';
import { AccommodationReservationRepository } from 'src/repositories/accommodation-reservation-repository';

@Injectable()
export class AccommodationReservationService {
  private readonly repository: AccommodationReservationRepository =
    new AccommodationReservationRepository();

  async getAll() {
    return await this.repository.getAll();
  }

  async insert(accommodationReservation: AccommodationReservation) {
    if (!accommodationReservation.accommodationReservationStatusId) {
      accommodationReservation.accommodationReservationStatusId =
        AccommodationReservationStatus.Confirmed;
    }

    return await this.repository.insert(accommodationReservation);
  }
}
