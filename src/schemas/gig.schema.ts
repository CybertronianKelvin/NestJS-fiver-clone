// src/user/user.schema.ts
import { Schema } from 'mongoose';

export const GigSchema = new Schema({
    title: { 
        type: String, 
        required: true 
    },
    description: { type: String, required: true },
    category: { type: String, required: true },
    sellerId: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
    price: { type: Number, required: true },
    status: { type: String, enum: ['Active', 'Inactive'], default: 'Active' },
    tags: [{ type: String }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});