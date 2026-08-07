import { Module } from '@nestjs/common';
import { HealthController } from './health.controller';
import { FarmsController } from './modules/farms/farms.controller';
import { SensorsController } from './modules/sensors/sensors.controller';
import { RecommendationsController } from './modules/recommendations/recommendations.controller';
import { DashboardController } from './modules/dashboard/dashboard.controller';
import { PrismaService } from './shared/prisma.service';
@Module({controllers:[HealthController,FarmsController,SensorsController,RecommendationsController,DashboardController],providers:[PrismaService]}) export class AppModule{}
