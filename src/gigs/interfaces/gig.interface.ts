import { Document } from 'mongoose';

export interface Gig extends Document {
  id: string;
  title: string;
  description: string;
  category: string;
  sellerId: string;
  price: number;
  status: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}