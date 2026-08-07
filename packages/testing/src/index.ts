export const testFarm = { id: 'farm-demo', name: 'Demo Farm', location: 'Bangkok', areaRai: 12 };
export const testReading = { deviceId:'dev-1', farmId:'farm-demo', plotId:'plot-a', sensorType:'soil_moisture', value:31, unit:'%', recordedAt:new Date().toISOString() } as const;
