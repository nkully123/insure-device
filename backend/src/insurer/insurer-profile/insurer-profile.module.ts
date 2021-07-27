import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose'

import { InsurerProfileController } from './insurer-profile.controller';
import { InsurerProfileService } from './insurer-profile.service';
import { insurerProfile } from './insurer-profile.model';

@Module({

  imports:[
    MongooseModule.forFeature([{ name: 'Insurer', schema: insurerProfile }]),
    ],

  controllers: [InsurerProfileController],
  providers: [InsurerProfileService]
})
export class InsurerProfileModule {}
