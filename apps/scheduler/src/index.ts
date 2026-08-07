import cron from 'node-cron'; import { Queue } from 'bullmq'; import IORedis from 'ioredis'; import { createLogger } from '@smart-farm/logger';
const log=createLogger('scheduler'); const connection=new IORedis(process.env.REDIS_URL??'redis://localhost:6379',{maxRetriesPerRequest:null}); const queue=new Queue('smart-farm-jobs',{connection});
cron.schedule('*/15 * * * *',async()=>{ await queue.add('generate-irrigation-recommendation',{plot_id:'plot-a',soil_moisture:31,temperature_c:34,humidity:65,rain_probability:.15,area_m2:6400},{removeOnComplete:100,removeOnFail:100}); log.info('scheduled irrigation job'); });
log.info('scheduler started');
