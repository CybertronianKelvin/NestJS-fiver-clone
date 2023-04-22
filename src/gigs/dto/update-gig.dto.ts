import { PartialType } from '@nestjs/mapped-types';
import { IsOptional, IsEnum, IsArray, ArrayNotEmpty, IsString, IsNumber } from 'class-validator';
import { CreateGigDto } from './create-gig.dto';
import { Gig } from '../interfaces/gig.interface';

export class UpdateGigDto extends PartialType(CreateGigDto) {
  @IsOptional()
  @IsString()
  title?: Gig['title'];

  @IsOptional()
  @IsString()
  description?: Gig['description'];

  @IsOptional()
  @IsString()
  category?: Gig['category'];

  @IsOptional()
  sellerId?: Gig['sellerId'];

  @IsOptional()
  @IsNumber()
  price?: Gig['price'];

  @IsOptional()
  @IsEnum(['Active', 'Inactive'])
  status?: Gig['status'];

  @IsOptional()
  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  tags?: Gig['tags'];
}
