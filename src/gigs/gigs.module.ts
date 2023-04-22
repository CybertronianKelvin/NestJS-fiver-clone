import { Module } from '@nestjs/common';
import { GigsService } from './gigs.service';
import { MongooseModule } from '@nestjs/mongoose';
import { GigSchema } from '../schemas/gig.schema';
import { GigsController } from './gigs.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Gig', schema: GigSchema }])],
  controllers: [GigsController],
  providers: [GigsService]
})
export class GigsModule {}
