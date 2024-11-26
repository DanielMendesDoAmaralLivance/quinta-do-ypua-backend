import { Module } from '@nestjs/common';
import { GuestController } from './controllers/guest-controller';
import { GuestService } from './services/guest-service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AccommodationController } from './controllers/accommodation-controller';
import { AccommodationService } from './services/accommodation-service';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
      serveRoot: '/uploads',
    }),
  ],
  controllers: [GuestController, AccommodationController],
  providers: [GuestService, AccommodationService],
})
export class AppModule {}
