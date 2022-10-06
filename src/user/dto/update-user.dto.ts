import {PartialType} from "@nestjs/mapped-types";
import {CreateUserDto} from "./create-user.dto";

export class UpdateUserDto extends PartialType(CreateUserDto) {
    readonly givenName: string;
    readonly lastName: string;
    readonly surname: string;
    readonly telephone: string;
}
