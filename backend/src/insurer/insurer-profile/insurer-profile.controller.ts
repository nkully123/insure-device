import {Controller,Post,Body, Get, Param, Patch, Delete} from '@nestjs/common';
import { InsurerProfileService } from './insurer-profile.service';

@Controller('insurer-profile')
export class InsurerProfileController 
{
    constructor(private readonly insurerProfile: InsurerProfileService){}

    @Post()
    async addInsuranceCompany
    (
        @Body('insuranceName') insusrerName:string,
        @Body('email') insusrerEmail:string, 
        @Body('contactNo') insusrerContactNo:string, 
        @Body('aboutCompany') insusrerAboutCompany:string,
        @Body('imageURL') insusrerImageURL:string,
         
    ) {

        

      const genID = await this.insurerProfile.insertInsurance
      (
        insusrerName,
        insusrerEmail,
        insusrerContactNo,
        insusrerAboutCompany,
        insusrerImageURL
        );

      return "company ID : " + genID;
    }

 

    @Delete(':id')
    removeInsuranceCompany(@Param('id') insuranceId: string)
    {
         return this.insurerProfile.deleteInsurenceCompany(insuranceId);

    }

    @Patch(':id')
    async updateUser(
     @Param('id') insuranceID:string,
     @Body('insuranceName') insusrerName:string,
     @Body('email') insusrerEmail:string, 
     @Body('contactNo') insusrerContactNo:string, 
     @Body('aboutCompany') insusrerAboutCompany:string,
     @Body('imageURL') insusrerImageURL:string,
     ){
       await  this.insurerProfile.updateInsuranceCompany
       (
        insuranceID,
        insusrerName,
        insusrerEmail,
        insusrerContactNo,
        insusrerAboutCompany,
        insusrerImageURL
       )
         console.log(insuranceID);
 
         return "Insurance Company ID " + insuranceID + " was updated"
     }

}
