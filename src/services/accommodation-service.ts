import { Injectable } from '@nestjs/common';
import { AccommodationRepository } from 'src/repositories/accommodation-repository';

@Injectable()
export class AccommodationService {
  private readonly repository: AccommodationRepository =
    new AccommodationRepository();

  async getAll() {
    return await this.repository.getAll();
  }
}
