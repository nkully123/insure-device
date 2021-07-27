import { Module } from '@nestjs/common';
import { OfferController } from './offer.controller';
import { OfferService } from './offer.service';
import {MongooseModule} from '@nestjs/mongoose'
import { InsurerOffer } from './offer.model';


@Module({
  imports:[
    MongooseModule.forFeature([{ name: 'Offer', schema: InsurerOffer }]),
    ],

  controllers: [OfferController],
  providers: [OfferService]
})
export class OfferModule {}
