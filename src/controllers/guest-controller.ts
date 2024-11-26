import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
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

  @Put(':id')
  async put(@Param('id') id: string, @Body() guestDto: Guest) {
    return await this.service.update(Number(id), guestDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.service.delete(Number(id));
  }
}
