import { IsNotEmpty, IsOptional, IsString, IsEnum, IsNumber, ArrayNotEmpty } from 'class-validator';
export class CreateGigDto {
    @IsNotEmpty()
    @IsString()
    title: string;
  
    @IsNotEmpty()
    @IsString()
    description: string;
  
    @IsNotEmpty()
    @IsString()
    category: string;
  
    @IsNotEmpty()
    sellerId: string;
  
    @IsNotEmpty()
    @IsNumber()
    price: number;
  
    @IsOptional()
    @IsEnum(['Active', 'Inactive'])
    status?: string;
  
    @IsOptional()
    @ArrayNotEmpty()
    @IsString({ each: true })
    tags?: string[];
  }
