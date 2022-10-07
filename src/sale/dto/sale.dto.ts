import {IsNumber, IsString, ArrayNotEmpty, IsNotEmpty} from "class-validator";

export class SaleDto {
    @IsString()
    @IsNotEmpty()
    id: string;
    @IsNumber()
    @IsNotEmpty()
    salePrice: number;
    @ArrayNotEmpty()
    saleDetail: SaleDetailDto[];
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
