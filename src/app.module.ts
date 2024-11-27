import { Module } from '@nestjs/common';
import { GuestController } from './controllers/guest-controller';
import { GuestService } from './services/guest-service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AccommodationController } from './controllers/accommodation-controller';
import { AccommodationService } from './services/accommodation-service';
import { AccommodationReservationController } from './controllers/accommodation-reservation-controller';
import { AccommodationReservationService } from './services/accommodation-reservation-service';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
      serveRoot: '/uploads',
    }),
  ],
  controllers: [
    GuestController,
    AccommodationController,
    AccommodationReservationController,
  ],
  providers: [
    GuestService,
    AccommodationService,
    AccommodationReservationService,
  ],
})
export class AppModule {}
