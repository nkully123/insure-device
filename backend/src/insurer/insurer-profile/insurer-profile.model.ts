import * as mongoose from 'mongoose';

export const insurerProfile = new mongoose.Schema
({

    insuranceName: {type: String, required: true},
    email: {type: String, required: false},
    contactNo: {type: String, required: false},
    aboutCompany: {type: String, required: false},
    imageURL: {type: String, required: false},
 
});

export interface Insurer extends mongoose.Document
{
         insuranceName: string,
         email: string,
         contactNo: string,
         aboutCompany: string,
         image: string,
    
}