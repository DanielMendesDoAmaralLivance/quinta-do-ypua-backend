import { Module } from '@nestjs/common';
import { GuestController } from './controllers/guest-controller';
import { GuestService } from './services/guest-service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [GuestController],
  providers: [GuestService],
})
export class AppModule {}
