"use client";
import Image from "next/image";
import Link from "next/link";
import { appConfig } from "../config";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-md">
            <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link
                    href={appConfig.links.home}
                    className="flex items-center gap-3"
                >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 shadow-sm">
                        <Image
                            src="/images/done-log/donelogLogo.png"
                            alt="DoneLog Logo"
                            width={28}
                            height={28}
                            priority
                            className="object-contain"
                        />
                    </div>

                    <span className="font-bold text-xl tracking-tight text-gray-900">
                        {appConfig.name}
                    </span>
                </Link>

                <div className="flex items-center gap-6 text-sm font-medium text-gray-700">
                    <Link
                        href={appConfig.links.home}
                        className="hover:text-black transition"
                    >
                        Home
                    </Link>

                    <Link
                        href={appConfig.links.privacy}
                        className="hover:text-black transition"
                    >
                        Privacy
                    </Link>

                    <Link
                        href={appConfig.links.terms}
                        className="hover:text-black transition"
                    >
                        Terms
                    </Link>
                </div>
            </nav>
        </header>
    );
}