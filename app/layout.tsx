import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { ClerkProvider } from '@clerk/nextjs';


const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-poppins',
});

export const metadata: Metadata = {
    title: 'Pick Pic',
    description: 'AI-powered image generator',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider
            appearance={{
                variables: { colorPrimary: '#624cf5' },
            }}
        >
            <html lang="en">
                <body className={cn('font-poppins antialiased', poppins.className)}>{children}</body>
            </html>
        </ClerkProvider>
    );
}
