import type { ApiResponse, Farm, SensorReading } from '@smart-farm/types';
export class SmartFarmApiClient {
  constructor(private readonly baseUrl: string) {}
  private async get<T>(path: string): Promise<T> { const r = await fetch(`${this.baseUrl}${path}`); if (!r.ok) throw new Error(`API ${r.status}`); return r.json() as Promise<T>; }
  async farms(): Promise<ApiResponse<Farm[]>> { return this.get('/farms'); }
  async latestReadings(): Promise<ApiResponse<SensorReading[]>> { return this.get('/sensors/latest'); }
}
