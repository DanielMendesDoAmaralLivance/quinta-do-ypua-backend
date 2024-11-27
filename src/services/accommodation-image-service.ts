import { Injectable } from '@nestjs/common';
import AccommodationImage from 'src/entities/accommodation-image';
import { AccommodationImageRepository } from 'src/repositories/accommodation-image-repository';

@Injectable()
export class AccommodationImageService {
  private readonly repository: AccommodationImageRepository =
    new AccommodationImageRepository();

  async insert(accommodationImage: AccommodationImage) {
    return await this.repository.insert(accommodationImage);
  }
}
