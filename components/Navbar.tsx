"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
    {
        name: "Home",
        href: "/",
    },
    {
        name: "Capture",
        href: "/capture-photo",
    },
    {
        name: "Lossless",
        href: "/lossless-compression",
    },
    {
        name: "Lossy",
        href: "/lossy-compression",
    },
    {
        name: "Metadata",
        href: "/metadata-viewer",
    },
    {
        name: "Crop",
        href: "/crop-image",
    },
    {
        name: "Background",
        href: "/background-remover",
    },
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link href="/" className="logo">
                    Image Tools
                </Link>

                <div className="nav-links">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`nav-link ${pathname === item.href ? "active-link" : ""
                                }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}