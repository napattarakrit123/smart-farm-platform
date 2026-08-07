import { Controller, Get } from '@nestjs/common';
import { PrismaService } from '../../shared/prisma.service';
@Controller('farms') export class FarmsController { constructor(private db:PrismaService){} @Get() async all(){ try{return {data:await this.db.farm.findMany({orderBy:{createdAt:'desc'}})}}catch{return {data:[{id:'farm-demo',name:'Demo Farm',location:'Bangkok',areaRai:12}]}} } }
