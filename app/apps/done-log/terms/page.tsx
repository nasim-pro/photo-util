import { appConfig } from "../config";

export default function TermsPage() {
    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <section className="border-b border-gray-200 bg-white">
                <div className="max-w-5xl mx-auto px-6 py-20">
                    <span className="inline-flex rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
                        Legal
                    </span>

                    <h1 className="mt-6 text-5xl md:text-6xl font-bold tracking-tight text-gray-900">
                        Terms of Service
                    </h1>

                    <p className="mt-6 text-xl text-gray-600 max-w-3xl leading-8">
                        By installing or using{" "}
                        <span className="font-semibold text-gray-900">
                            {appConfig.name}
                        </span>
                        , you agree to these terms and
                        conditions.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4 text-sm text-gray-500">
                        <span>
                            Last Updated:
                            <strong className="ml-2 text-gray-800">
                                25 January, 2025
                            </strong>
                        </span>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="max-w-5xl mx-auto px-6 py-16">
                <div className="bg-white rounded-[32px] shadow-sm border border-gray-200 overflow-hidden">
                    <div className="p-8 md:p-12">
                        <p className="text-lg text-gray-700 leading-8">
                            Welcome to{" "}
                            <strong>
                                {appConfig.name}
                            </strong>
                            ! By installing or using
                            the DoneLog Chrome
                            extension, you agree to be
                            bound by these Terms of
                            Service. Please read them
                            carefully.
                        </p>

                        <div className="mt-12 space-y-10">
                            {/* Section 1 */}
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900">
                                    1. Acceptance of
                                    Terms
                                </h2>

                                <p className="mt-4 text-gray-700 leading-8">
                                    By using the
                                    DoneLog extension,
                                    you acknowledge
                                    and agree to these
                                    terms. If you do
                                    not agree, please
                                    do not use the
                                    extension.
                                </p>
                            </div>

                            {/* Section 2 */}
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900">
                                    2. Description of
                                    Service
                                </h2>

                                <p className="mt-4 text-gray-700 leading-8">
                                    DoneLog allows
                                    users to create,
                                    manage, and store
                                    their to-do tasks
                                    by pushing them to
                                    Google Sheets.
                                </p>

                                <p className="mt-4 text-gray-700 leading-8">
                                    The extension
                                    provides a simple
                                    interface to
                                    manage tasks
                                    efficiently.
                                </p>
                            </div>

                            {/* Section 3 */}
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900">
                                    3. User
                                    Responsibilities
                                </h2>

                                <div className="mt-5 space-y-4">
                                    <div className="rounded-2xl border border-gray-200 p-5 bg-gray-50">
                                        <p className="font-medium text-gray-900">
                                            I. Data
                                            Accuracy
                                        </p>

                                        <p className="mt-2 text-gray-700 leading-7">
                                            You are
                                            responsible
                                            for the
                                            accuracy of
                                            the data
                                            you enter.
                                        </p>
                                    </div>

                                    <div className="rounded-2xl border border-gray-200 p-5 bg-gray-50">
                                        <p className="font-medium text-gray-900">
                                            II.
                                            Compliance
                                        </p>

                                        <p className="mt-2 text-gray-700 leading-7">
                                            You must
                                            comply with
                                            applicable
                                            laws and
                                            regulations
                                            while using
                                            the
                                            extension.
                                        </p>
                                    </div>

                                    <div className="rounded-2xl border border-gray-200 p-5 bg-gray-50">
                                        <p className="font-medium text-gray-900">
                                            III.
                                            Authorized
                                            Use
                                        </p>

                                        <p className="mt-2 text-gray-700 leading-7">
                                            You may not
                                            use the
                                            extension
                                            for
                                            illegal or
                                            unauthorized
                                            purposes.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Section 4 */}
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900">
                                    4. Privacy
                                </h2>

                                <p className="mt-4 text-gray-700 leading-8">
                                    Your privacy is
                                    important to us.
                                    Please refer to
                                    our Privacy Policy
                                    for information on
                                    how your data is
                                    collected and
                                    used.
                                </p>
                            </div>

                            {/* Section 5 */}
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900">
                                    5. Limitations of
                                    Liability
                                </h2>

                                <p className="mt-4 text-gray-700 leading-8">
                                    DoneLog is
                                    provided
                                    <span className="font-semibold">
                                        {" "}
                                        "as-is"
                                    </span>{" "}
                                    without any
                                    warranties.
                                </p>

                                <p className="mt-4 text-gray-700 leading-8">
                                    We are not
                                    responsible for
                                    any data loss,
                                    damages, or issues
                                    arising from the
                                    use of the
                                    extension.
                                </p>
                            </div>

                            {/* Section 6 */}
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900">
                                    6. Modifications
                                    to the Service
                                </h2>

                                <p className="mt-4 text-gray-700 leading-8">
                                    We reserve the
                                    right to modify or
                                    discontinue the
                                    extension at any
                                    time without prior
                                    notice.
                                </p>
                            </div>

                            {/* Section 7 */}
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900">
                                    7. Termination
                                </h2>

                                <p className="mt-4 text-gray-700 leading-8">
                                    We may suspend or
                                    terminate your
                                    access to the
                                    extension if you
                                    violate these
                                    terms.
                                </p>
                            </div>

                            {/* Section 8 */}
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900">
                                    8. Contact Us
                                </h2>

                                <p className="mt-4 text-gray-700 leading-8">
                                    If you have any
                                    questions about
                                    these terms,
                                    contact us at:
                                </p>

                                <a
                                    href="mailto:khannasimahmad@gmail.com"
                                    className="inline-block mt-4 text-lg font-medium text-black hover:underline"
                                >
                                    khannasimahmad@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}