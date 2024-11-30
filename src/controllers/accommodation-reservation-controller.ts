import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import AccommodationReservation from 'src/entities/accommodation-reservation';
import { AccommodationReservationService } from 'src/services/accommodation-reservation-service';

@Controller('accommodation-reservation')
export class AccommodationReservationController {
  constructor(private readonly service: AccommodationReservationService) {}

  @Get()
  async getAll() {
    return await this.service.getAll();
  }

  @Post()
  async insert(@Body() accommodationReservationDto: AccommodationReservation) {
    return await this.service.insert(accommodationReservationDto);
  }

  @Put(':id/checkin')
  async checkin(@Param('id') id: string) {
    return await this.service.checkin(Number(id));
  }

  @Put(':id/checkout')
  async checkout(@Param('id') id: string) {
    return await this.service.checkout(Number(id));
  }

  @Put(':id/cancel')
  async cancel(@Param('id') id: string) {
    return await this.service.cancel(Number(id));
  }
}
