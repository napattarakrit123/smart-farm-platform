import { Worker } from 'bullmq'; import IORedis from 'ioredis'; import { createLogger } from '@smart-farm/logger';
const log=createLogger('worker'); const connection=new IORedis(process.env.REDIS_URL??'redis://localhost:6379',{maxRetriesPerRequest:null});
new Worker('smart-farm-jobs',async job=>{ log.info({job:job.name,id:job.id},'processing'); if(job.name==='generate-irrigation-recommendation'){ const r=await fetch(`${process.env.AI_SERVICE_URL??'http://localhost:8000'}/v1/recommendations/irrigation`,{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify(job.data)}); if(!r.ok) throw new Error(`AI service ${r.status}`); return r.json(); } return {ignored:true}; },{connection});
log.info('worker started');
