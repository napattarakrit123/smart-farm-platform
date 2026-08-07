from fastapi import FastAPI
from pydantic import BaseModel, Field
from prometheus_client import Counter, generate_latest
from fastapi.responses import Response

app=FastAPI(title='Smart Farm AI Service',version='0.1.0')
REQUESTS=Counter('smart_farm_ai_requests_total','AI requests',['endpoint'])
class IrrigationInput(BaseModel):
    plot_id:str; soil_moisture:float=Field(ge=0,le=100); temperature_c:float; humidity:float=Field(ge=0,le=100); rain_probability:float=Field(ge=0,le=1); area_m2:float=Field(gt=0)
class YieldInput(BaseModel):
    crop:str; area_rai:float=Field(gt=0); historical_yield_kg_per_rai:float=Field(gt=0); health_score:float=Field(ge=0,le=1); weather_score:float=Field(ge=0,le=1)
@app.get('/health')
def health(): return {'status':'ok','service':'ai-service'}
@app.post('/v1/recommendations/irrigation')
def irrigation(x:IrrigationInput):
    REQUESTS.labels('irrigation').inc(); deficit=max(0,45-x.soil_moisture); weather_factor=1-x.rain_probability; climate_factor=1.15 if x.temperature_c>34 else 1.0; liters=round(deficit/100*x.area_m2*4*weather_factor*climate_factor,2); action='irrigate' if liters>20 else 'skip'; return {'plotId':x.plot_id,'action':action,'waterLiters':liters,'confidence':0.88,'reason':'Rule-based soil-water deficit adjusted by rain probability and heat'}
@app.post('/v1/forecasts/yield')
def yield_forecast(x:YieldInput):
    REQUESTS.labels('yield').inc(); base=x.area_rai*x.historical_yield_kg_per_rai; multiplier=.55*x.health_score+.45*x.weather_score; return {'crop':x.crop,'expectedYieldKg':round(base*multiplier,2),'lowerKg':round(base*multiplier*.85,2),'upperKg':round(base*multiplier*1.15,2)}
@app.get('/metrics')
def metrics(): return Response(generate_latest(),media_type='text/plain')
