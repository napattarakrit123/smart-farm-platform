import { Controller, Get } from '@nestjs/common';
@Controller('dashboard') export class DashboardController { @Get('summary') summary(){return {farms:1,plots:3,activeDevices:8,alerts:2,waterSavedLiters:1250,estimatedRevenue:84000};} }
