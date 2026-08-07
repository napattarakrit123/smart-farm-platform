import { z } from 'zod';
export const sensorReadingSchema = z.object({
  deviceId: z.string().min(1), farmId: z.string().min(1), plotId: z.string().optional(),
  sensorType: z.enum(['soil_moisture','temperature','humidity','ph','ec','rainfall','light']),
  value: z.number().finite(), unit: z.string().min(1), recordedAt: z.string().datetime()
});
export type SensorReadingInput = z.infer<typeof sensorReadingSchema>;
