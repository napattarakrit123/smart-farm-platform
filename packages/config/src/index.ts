import { z } from 'zod';

const schema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  DATABASE_URL: z.string().default('postgresql://smartfarm:smartfarm@localhost:5432/smartfarm'),
  REDIS_URL: z.string().default('redis://localhost:6379'),
  MQTT_URL: z.string().default('mqtt://localhost:1883'),
  AI_SERVICE_URL: z.string().default('http://localhost:8000'),
  JWT_SECRET: z.string().default('development-only-secret'),
  PORT: z.coerce.number().default(3001),
});

export type AppConfig = z.infer<typeof schema>;
export const loadConfig = (env: NodeJS.ProcessEnv = process.env): AppConfig => schema.parse(env);
