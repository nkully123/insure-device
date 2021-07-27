import { Injectable } from '@nestjs/common';

import { NotFoundException } from "@nestjs/common";

import {InjectModel} from '@nestjs/mongoose';
import { Model } from "mongoose";

import { Offer } from './offer.model';

@Injectable()
export class OfferService {

    private insuranceOffer : Offer[] = [];

    constructor(@InjectModel('Offer') private readonly offerModel: Model<Offer>){}
    async insertOffer
    (
        price: string,
        description: string,
        clientID: string,
        insuranceID: string,
        

        ){
        const newInsuranceOffer = new this.offerModel
        ({
            price: price,
            description : description,
            clientID : clientID,
            insuranceID : insuranceID,
            
        });
       const result = await newInsuranceOffer.save();
       console.log(result);
       return result.id as string;
    }

    async deleteInsurerOffer(insurerID: string)
    {

     const results = await this.offerModel.deleteOne({_id: insurerID}).exec();

      if(results.n === 0)
      {
        throw new NotFoundException('could not find offer with ID ' + insurerID );
      }
      return "Offer Id " + insurerID + " was deleted";
        
    }
}


