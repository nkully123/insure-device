import { Module } from '@nestjs/common';
import { InsurerProfileController } from './insurer-profile.controller';
import { InsurerProfileService } from './insurer-profile.service';

@Module({
  controllers: [InsurerProfileController],
  providers: [InsurerProfileService]
})
export class InsurerProfileModule {}
