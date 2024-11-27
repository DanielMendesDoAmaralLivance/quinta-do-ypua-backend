import { Body, Controller, Post } from '@nestjs/common';
import AccommodationReservation from 'src/entities/accommodation-reservation';
import { AccommodationReservationStatus } from 'src/enums/accommodation-reservation-status';
import { AccommodationReservationService } from 'src/services/accommodation-reservation-service';

@Controller('accommodation-reservation')
export class AccommodationReservationController {
  constructor(private readonly service: AccommodationReservationService) {}

  @Post()
  async insert(@Body() accommodationReservationDto: AccommodationReservation) {
    if (!accommodationReservationDto.accommodationReservationStatusId) {
      accommodationReservationDto.accommodationReservationStatusId =
        AccommodationReservationStatus.Confirmed;
    }

    return await this.service.insert(accommodationReservationDto);
  }
}
