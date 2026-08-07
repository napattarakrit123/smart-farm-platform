import type { ReactNode } from 'react';
export function Card({ title, children }: { title: string; children: ReactNode }) {
  return <section style={{border:'1px solid #d9e2dc',borderRadius:12,padding:16,background:'#fff'}}><h3 style={{marginTop:0}}>{title}</h3>{children}</section>;
}
export function Metric({ label, value, unit }: { label:string; value:string|number; unit?:string }) {
  return <div><div style={{fontSize:13,color:'#527060'}}>{label}</div><div style={{fontSize:28,fontWeight:700}}>{value} <small>{unit}</small></div></div>;
}
