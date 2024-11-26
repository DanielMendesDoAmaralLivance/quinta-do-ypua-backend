import { Controller, Get } from '@nestjs/common';
import { AccommodationService } from 'src/services/accommodation-service';

@Controller('accommodation')
export class AccommodationController {
  constructor(private readonly service: AccommodationService) {}

  @Get()
  async getAll() {
    return await this.service.getAll();
  }
}
