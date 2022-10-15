import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { SaleModule } from './sale/sale.module';
import { DeliveryModule } from './delivery/delivery.module';
import { UserModule } from './user/user.module';
import {AuthModule} from './auth/auth.module';
import {ProfileModule} from './profile/profile.module';
import {EurekaModule} from "nestjs-eureka";

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
    EurekaModule.forRoot({
      disable: false,
      disableDiscovery: true,
      eureka: {
        app: 'products-ws',
        host: 'localhost',
        port: 8010,
        servicePath: '/eureka/apps',
        dataCenterInfo: {
          '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
          name: 'products-ws',
        },
      },
      service: {
        name: 'products-ws',
        port: 4000,
        host: 'localhost'
      }
    }),
    CategoryModule,
    SaleModule,
    DeliveryModule,
    UserModule,
    AuthModule,
    ProfileModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
