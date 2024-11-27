import { Body, Controller, Post } from '@nestjs/common';
import AccommodationReservation from 'src/entities/accommodation-reservation';
import { AccommodationReservationService } from 'src/services/accommodation-reservation-service';

@Controller('accommodation-reservation')
export class AccommodationReservationController {
  constructor(private readonly service: AccommodationReservationService) {}

  @Post()
  async insert(@Body() accommodationReservationDto: AccommodationReservation) {
    return await this.service.insert(accommodationReservationDto);
  }
}
