import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "NQ Strategy Lab", description: "Interactive Nasdaq futures strategy backtesting and research terminal." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
