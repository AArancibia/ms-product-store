import {IsNumber, IsString, ArrayNotEmpty, IsNotEmpty} from 'class-validator';
import {User} from '../../user/dto/user.dto';

export class SaleDto {
    @IsString()
    @IsNotEmpty()
    id: string;
    @IsNumber()
    @IsNotEmpty()
    salePrice: number;
    @ArrayNotEmpty()
    saleDetail: SaleDetailDto[];
    @IsNotEmpty()
    user: User;
}

export class SaleDetailDto {
    @IsString()
    @IsNotEmpty()
    id: string;
    @IsNumber()
    @IsNotEmpty()
    price: number;
    @IsNumber()
    @IsNotEmpty()
    quantity: number;
    @IsString()
    @IsNotEmpty()
    productId: string;
}
