// src/user/user.schema.ts
import { Schema } from 'mongoose';

export const UserSchema = new Schema({
  username: String,
  email: String,
  password: String,
  role: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});
