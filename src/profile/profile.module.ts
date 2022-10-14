import {Module} from '@nestjs/common';
import {ProfileService} from './profile.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ProfileEntity} from "./profile.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([ProfileEntity]),
  ],
  providers: [ProfileService]
})
export class ProfileModule {
}
