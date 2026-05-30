import Link from "next/link";
import Image from "next/image";
import { appConfig } from "./config";

export default function DoneLogHomePage() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />

                <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-28">
                    <div className="max-w-4xl text-center mx-auto">
                        <div className="inline-flex items-center rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm">
                            Chrome Extension
                        </div>

                        <h1 className="mt-8 text-5xl md:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1]">
                            Organize Your Work
                            <br />
                            With{" "}
                            <span className="text-black">
                                DoneLog
                            </span>
                        </h1>

                        <p className="mt-8 text-xl text-gray-600 leading-8 max-w-2xl mx-auto">
                            Stop forgetting completed
                            tasks. Track what you've
                            done, manage productivity,
                            and optionally sync tasks
                            directly to Google Sheets.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4 mt-10">
                            <a
                                href="#"
                                className="inline-flex items-center justify-center rounded-2xl bg-black px-8 py-4 text-white font-semibold hover:opacity-90 transition"
                            >
                                Add to Chrome
                            </a>

                            <Link
                                href={appConfig.links.privacy}
                                className="inline-flex items-center justify-center rounded-2xl border border-gray-300 bg-white px-8 py-4 font-medium text-gray-700 hover:bg-gray-50 transition"
                            >
                                Privacy Policy
                            </Link>
                        </div>
                    </div>

                    {/* Preview Card */}
                    <div className="mt-24 max-w-6xl mx-auto">
                        <div className="rounded-[36px] border border-gray-200 bg-white shadow-2xl overflow-hidden">
                            {/* Browser Header */}
                            <div className="border-b bg-gray-50 px-6 py-4 flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-300" />
                                <div className="w-3 h-3 rounded-full bg-yellow-300" />
                                <div className="w-3 h-3 rounded-full bg-green-300" />
                            </div>

                            {/* Screenshot */}
                            <div className="relative bg-gray-100">
                                <Image
                                    src="/images/done-log/DoneLog-preview.png"
                                    alt="DoneLog extension preview"
                                    width={1600}
                                    height={900}
                                    priority
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </div>

                        {/* Caption */}
                        <div className="text-center mt-6">
                            <p className="text-sm text-gray-500">
                                A clean and simple interface for
                                managing completed tasks.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            {/* Features */}
            <section className="py-28 bg-gray-50 border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                            Everything you need to
                            stay productive
                        </h2>

                        <p className="mt-5 text-lg text-gray-600 leading-8">
                            Simple enough to use
                            instantly, powerful enough
                            to stay organized daily.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mt-16">
                        <div className="rounded-[28px] bg-white border border-gray-200 p-8 shadow-sm">
                            <div className="text-4xl">
                                ✅
                            </div>

                            <h3 className="mt-6 text-xl font-semibold">
                                Track Completed Tasks
                            </h3>

                            <p className="mt-4 text-gray-600 leading-7">
                                Keep a clear history
                                of completed work and
                                never lose track of
                                progress.
                            </p>
                        </div>

                        <div className="rounded-[28px] bg-white border border-gray-200 p-8 shadow-sm">
                            <div className="text-4xl">
                                ⚡
                            </div>

                            <h3 className="mt-6 text-xl font-semibold">
                                Fast & Lightweight
                            </h3>

                            <p className="mt-4 text-gray-600 leading-7">
                                Minimal interface,
                                distraction-free
                                experience, and quick
                                task management.
                            </p>
                        </div>

                        <div className="rounded-[28px] bg-white border border-gray-200 p-8 shadow-sm">
                            <div className="text-4xl">
                                📊
                            </div>

                            <h3 className="mt-6 text-xl font-semibold">
                                Google Sheets Sync
                            </h3>

                            <p className="mt-4 text-gray-600 leading-7">
                                Push tasks directly to
                                your Google Sheets for
                                better tracking and
                                reporting.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-28">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="rounded-[40px] bg-black text-white p-12 md:p-20 text-center">
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                            Ready to stay organized?
                        </h2>

                        <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto leading-8">
                            Install DoneLog and start
                            tracking completed work
                            more efficiently.
                        </p>

                        <div className="flex justify-center gap-4 mt-10 flex-wrap">
                            <a
                                href="#"
                                className="rounded-2xl bg-white text-black px-8 py-4 font-semibold hover:opacity-90 transition"
                            >
                                Add to Chrome
                            </a>

                            <Link
                                href={appConfig.links.terms}
                                className="rounded-2xl border border-gray-700 px-8 py-4 font-medium hover:bg-white/10 transition"
                            >
                                View Terms
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}