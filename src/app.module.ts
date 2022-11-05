import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { SaleModule } from './sale/sale.module';
import { UserModule } from './user/user.module';
import {AuthModule} from './auth/auth.module';
import {ProfileModule} from './profile/profile.module';
import {MailModule} from './mail/mail.module';

@Module({
  imports: [
    ProductModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'carrito',
      autoLoadEntities: true,
      synchronize: true,
    }),
    CategoryModule,
    SaleModule,
    UserModule,
    AuthModule,
    ProfileModule,
    MailModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
