import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Image Tools",
    description: "Image editing tools",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}