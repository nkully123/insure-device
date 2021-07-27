import * as mongoose from 'mongoose';

export const InsurerOffer = new mongoose.Schema
({
    price:       {type: String,required: false},
    description: {type: String,required: false},
    clientID:    {type: String,required: false}, 
    insuranceID: {type: String,required: false},  
});

export interface Offer extends mongoose.Document
{
    price: string,
    description: string,
    clientID: string,
    insuranceID: string,

}