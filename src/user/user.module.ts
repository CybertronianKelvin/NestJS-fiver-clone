import { GigSchema } from './../schemas/gig.schema';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from '../schemas/user.schema';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }, { name: 'Gig', schema: GigSchema }])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
