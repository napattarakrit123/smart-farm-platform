export const EventNames = {
  SensorReadingReceived: 'sensor.reading.received',
  IrrigationRecommended: 'irrigation.recommended',
  CropHealthAlertCreated: 'crop-health.alert.created',
  YieldForecastRequested: 'yield.forecast.requested',
} as const;
export type EventName = typeof EventNames[keyof typeof EventNames];
