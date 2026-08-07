import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
async function bootstrap(){ const app=await NestFactory.create(AppModule); app.setGlobalPrefix('api'); app.enableCors(); app.useGlobalPipes(new ValidationPipe({transform:true,whitelist:true})); const config=new DocumentBuilder().setTitle('Smart Farm API').setVersion('0.1').build(); SwaggerModule.setup('api/docs',app,SwaggerModule.createDocument(app,config)); await app.listen(process.env.PORT ?? 3001); }
bootstrap();
