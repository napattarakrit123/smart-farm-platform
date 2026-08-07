export type SensorType = 'soil_moisture' | 'temperature' | 'humidity' | 'ph' | 'ec' | 'rainfall' | 'light';
export interface SensorReading { deviceId: string; farmId: string; plotId?: string; sensorType: SensorType; value: number; unit: string; recordedAt: string; }
export interface Farm { id: string; name: string; location: string; areaRai: number; }
export interface Plot { id: string; farmId: string; name: string; crop: string; areaRai: number; plantingDate?: string; expectedHarvestDate?: string; }
export interface IrrigationRecommendation { plotId: string; action: 'irrigate' | 'skip' | 'inspect'; waterLiters: number; reason: string; confidence: number; }
export interface ApiResponse<T> { data: T; meta?: Record<string, unknown>; }
