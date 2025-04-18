import DefaultProvider from "@/contexts/DefaultProvider"
import Header from "@/components/Header"
import { Saira } from 'next/font/google'
import type { Metadata } from "next"
import "./globals.css"

const saira = Saira({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600'],
})

export const metadata: Metadata = { title: "Capputeeno" };

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    
    return (
        <html lang="pt-br">
            <body className={saira.className}>
                <DefaultProvider>
                    <Header />
                    {children}
                </DefaultProvider>
            </body>
        </html>
    );

}
