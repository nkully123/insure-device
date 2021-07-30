 
import {Controller,Post,Body, Get, Param, Patch, Delete} from '@nestjs/common';
import { OfferService } from './offer.service';

@Controller('offer')
export class OfferController {

    constructor(private readonly insurerOffer: OfferService){}

        @Post()
        async addOffer
       (
        @Body('price') offerPrice:string,
        @Body('description') offerDescription:string, 
        @Body('clientID') offerClientID:string, 
        @Body('insuranceID') offerInsuranceID:string, 
       
         
      ) {

        const genID = await this.insurerOffer.insertOffer
        (
        offerPrice,
        offerDescription,
        offerClientID,
        offerInsuranceID,
        );
      return "company ID : " + genID;
    }
    
    @Delete(':id')
    removeInsurerOffer(@Param('id') insuranceId: string)
    {
         return this.insurerOffer.deleteInsurerOffer(insuranceId);

    }

    @Patch(':id')
    async updateUser(
     @Param('id') insuranceID:string,
     @Body('price') offerPrice:string,
     @Body('description') offerDescription:string, 
     @Body('clientID') offerClientID:string, 
     @Body('insuranceID') offerInsuranceID:string,
  
     ){
      await  this.insurerOffer.updateInsureOffer  
      (
        
       insuranceID,
       offerPrice,
       offerDescription,
       offerClientID,
       offerInsuranceID,
       
       
      )
        console.log(insuranceID);

        return "Insurance Company ID " + insuranceID + " was updated"
       
      }

}

