import type { Metadata } from "next";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
    title: "DoneLog",
    description:
        "Track completed work and improve productivity.",
};

export default function DoneLogLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Navbar />

            <main className="min-h-screen bg-gray-50">
                {children}
            </main>
        </>
    );
}