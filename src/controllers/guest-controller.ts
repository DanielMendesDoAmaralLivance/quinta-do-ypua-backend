import { Body, Controller, Get, Post } from '@nestjs/common';
import { GuestService } from '../services/guest-service';
import Guest from 'src/entities/guest';

@Controller('guest')
export class GuestController {
  constructor(private readonly service: GuestService) {}

  @Get()
  async getAll() {
    return await this.service.getAll();
  }

  @Post()
  async insert(@Body() guestDto: Guest) {
    return await this.service.insert(guestDto);
  }
}
