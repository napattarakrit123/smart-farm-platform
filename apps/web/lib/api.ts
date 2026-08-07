const API = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001/api';
export async function apiGet<T>(path:string, fallback:T):Promise<T>{ try { const r=await fetch(`${API}${path}`,{cache:'no-store'}); if(!r.ok) return fallback; return r.json(); } catch { return fallback; } }
