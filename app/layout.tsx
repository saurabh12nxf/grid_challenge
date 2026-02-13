import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Recursive Grid Challenge",
    description: "An interactive 3x3 grid with recursive rules",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="antialiased">
                {children}
            </body>
        </html>
    );
}
