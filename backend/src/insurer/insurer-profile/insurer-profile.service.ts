import { NotFoundException } from "@nestjs/common";
import { Injectable } from "@nestjs/common";
import {InjectModel} from '@nestjs/mongoose';
import { Model } from "mongoose";

import { Insurer } from './insurer-profile.model';

@Injectable()
export class InsurerProfileService 
{
    private insuranceCompany : Insurer[] = [];

    constructor(@InjectModel('Insurer') private readonly insurerModel: Model<Insurer>){}

    async insertInsurance
    (
        insuranceName: string,
        email: string,
        contactNo: string,
        aboutCompany: string,
        image: string,


        ){
        const newInsuranceCompany = new this.insurerModel
        ({
            insuranceName: insuranceName,
            email : email,
            contactNo : contactNo,
            aboutCompany : aboutCompany,
            image: image
        });
       const result = await newInsuranceCompany.save();
       console.log(result);
       return result.id as string;
    }


    async deleteInsurenceCompany(insurerID: string)
    {

     const results = await this.insurerModel.deleteOne({_id: insurerID}).exec();

      if(results.n === 0)
      {
        throw new NotFoundException('could not find insurance with ID ' + insurerID );
      }
      return "Insurance Company Id " + insurerID + " was deleted";
        
    }

    async updateInsuranceCompany
    (
        id: string,
        insuranceName: string,
        email: string,
        contactNo: string,
        aboutCompany: string,
        image: string,
        
            )
            {
                const updatedInsuranceCompany = await this.findInsurance(id);
    
                if(insuranceName)
                {
                    updatedInsuranceCompany.insuranceName = insuranceName;
                }
                if(email)
                {
                    updatedInsuranceCompany.email = email;
                }
                 if(contactNo)
                 {
                    updatedInsuranceCompany.contactNo = contactNo;
                 }
                 if(aboutCompany)
                 {
                    updatedInsuranceCompany.aboutCompany = aboutCompany;
                 }
                 if(image)
                 {
                    updatedInsuranceCompany.image = image;
                 }
                 console.log(updatedInsuranceCompany);
                 updatedInsuranceCompany.save();
            }

            private async findInsurance(id: string): Promise<Insurer>
            {
                console.log(id);
                let insuranceCompany;
    
                try
                {
                    insuranceCompany = await this.insurerModel.findById(id).exec();
    
                console.log(insuranceCompany);
    
                }
                catch(error)
                {
                    throw new NotFoundException('could not find insurance of ID ' + id );
                }
    
                if(!insuranceCompany)
                {
                    throw new NotFoundException('could not find insurance of ID ' + id );
                }
    
          
                return insuranceCompany;
    
               
    
            }
  
}
