import { Controller, Get } from '@nestjs/common';
@Controller('recommendations') export class RecommendationsController { @Get('irrigation') irrigation(){ return {data:[{plotId:'plot-a',action:'irrigate',waterLiters:320,reason:'Soil moisture below target and no rain expected',confidence:.91}]}; } }
