import {
  Body,
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AccommodationService } from 'src/services/accommodation-service';
import { diskStorage } from 'multer';
import { Accommodation } from 'src/entities/accommodation';
import * as path from 'path';
import AccommodationImage from 'src/entities/accommodation-image';
import { AccommodationImageService } from 'src/services/accommodation-image-service';

@Controller('accommodation')
export class AccommodationController {
  constructor(
    private readonly service: AccommodationService,
    private readonly accommodationImageService: AccommodationImageService,
  ) {}

  @Get()
  async getAll() {
    return await this.service.getAll();
  }

  @Post()
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './uploads',
        filename: (_req, file, callback) => {
          const filename = `${new Date().getTime()}-${file.originalname}`;
          callback(null, filename);
        },
      }),
    }),
  )
  async insert(
    @Body() accommodationDto: Accommodation,
    @UploadedFile() file: Express.Multer.File,
  ) {
    const accommodationId = await this.service.insert(accommodationDto);

    const accommodationImage: AccommodationImage = {
      accommodationId: accommodationId,
      fileUrl: file.filename,
    };

    await this.accommodationImageService.insert(accommodationImage);
  }
}
