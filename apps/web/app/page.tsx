import { Card, Metric } from '@smart-farm/ui';
import { apiGet } from '../lib/api';
export default async function Dashboard(){
 const summary=await apiGet('/dashboard/summary',{farms:1,plots:3,activeDevices:8,alerts:2,waterSavedLiters:1250,estimatedRevenue:84000});
 return <><header className="hero"><h1>Smart Farm Command Center</h1><p>วางแผนปลูก ดูแลพืช วิเคราะห์ IoT พยากรณ์ผลผลิต และบริหารรายได้ในระบบเดียว</p></header><div className="grid"><Card title="พื้นที่"><Metric label="ฟาร์ม" value={summary.farms}/><Metric label="แปลงปลูก" value={summary.plots}/></Card><Card title="IoT"><Metric label="อุปกรณ์ออนไลน์" value={summary.activeDevices}/><Metric label="การแจ้งเตือน" value={summary.alerts}/></Card><Card title="ประสิทธิภาพ"><Metric label="น้ำที่ประหยัด" value={summary.waterSavedLiters} unit="L"/><Metric label="รายได้คาดการณ์" value={summary.estimatedRevenue.toLocaleString()} unit="บาท"/></Card></div></>;
}
