import { Injectable } from '@nestjs/common';
import Guest from 'src/entities/guest';
import { GuestRepository } from 'src/repositories/guest-repository';

@Injectable()
export class GuestService {
  private readonly repository: GuestRepository = new GuestRepository();

  async getAll() {
    return await this.repository.getAll();
  }

  async insert(guest: Guest) {
    return await this.repository.insert(guest);
  }
}