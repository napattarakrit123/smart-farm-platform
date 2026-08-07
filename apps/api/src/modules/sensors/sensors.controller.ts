import { Controller, Get } from '@nestjs/common'; import { PrismaService } from '../../shared/prisma.service';
@Controller('sensors') export class SensorsController { constructor(private db:PrismaService){} @Get('latest') async latest(){ try{return {data:await this.db.sensorReading.findMany({take:50,orderBy:{recordedAt:'desc'}})}}catch{return {data:[]}} } }
