import './globals.css';
export const metadata = { title:'Smart Farm Platform', description:'AI and IoT farming operations' };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="th"><body><main className="shell"><nav className="nav"><a href="/">Dashboard</a><a href="/farms">Farms</a><a href="/sensors">Sensors</a><a href="/recommendations">Recommendations</a></nav>{children}</main></body></html>; }
