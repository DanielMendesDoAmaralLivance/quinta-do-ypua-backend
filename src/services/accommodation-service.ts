import { Injectable } from '@nestjs/common';
import { Accommodation } from 'src/entities/accommodation';
import { AccommodationRepository } from 'src/repositories/accommodation-repository';

@Injectable()
export class AccommodationService {
  private readonly repository: AccommodationRepository =
    new AccommodationRepository();

  async getAll() {
    return await this.repository.getAll();
  }

  async insert(accommodation: Accommodation) {
    if (accommodation.active === undefined) {
      accommodation.active = true;
    }

    return await this.repository.insert(accommodation);
  }

  async update(id: number, accommodation: Accommodation) {
    return await this.repository.update(id, accommodation);
  }
}
