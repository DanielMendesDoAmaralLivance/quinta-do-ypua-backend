import { Injectable } from '@nestjs/common';
import AccommodationReservation from 'src/entities/accommodation-reservation';
import { AccommodationReservationRepository } from 'src/repositories/accommodation-reservation-repository';

@Injectable()
export class AccommodationReservationService {
  private readonly repository: AccommodationReservationRepository =
    new AccommodationReservationRepository();

  async insert(accommodationReservation: AccommodationReservation) {
    return await this.repository.insert(accommodationReservation);
  }
}
