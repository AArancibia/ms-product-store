import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport';
import {ValidationPipe} from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
    app.setGlobalPrefix('api');
    app.useGlobalPipes(new ValidationPipe());
    app.enableCors();
  app.use(session({
    name: 'NESTJS_SESSION_ID',
    secret: 'FSDFSDFSDFSDSDSVASFHGADHS',
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 60000,
    }
  }));
  app.use(passport.initialize());
  app.use(passport.session());
  await app.listen(4000);
}
bootstrap();
