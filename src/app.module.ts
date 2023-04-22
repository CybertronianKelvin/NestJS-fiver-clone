import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { APP_FILTER } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { NotFoundExceptionFilter } from './exceptions/not-found-exception.filter';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import {GigsModule} from './gigs/gigs.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URL, { dbName: process.env.MONGODB_NAME }),
    UserModule,
    GigsModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: NotFoundExceptionFilter,
    },
  ],
})
export class AppModule {}
