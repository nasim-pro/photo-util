import { appConfig } from "../config";

export default function PrivacyPolicyPage() {
    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <section className="border-b border-gray-200 bg-white">
                <div className="max-w-5xl mx-auto px-6 py-20">
                    <span className="inline-flex rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
                        Legal
                    </span>

                    <h1 className="mt-6 text-5xl md:text-6xl font-bold tracking-tight text-gray-900">
                        Privacy Policy
                    </h1>

                    <p className="mt-6 text-xl text-gray-600 max-w-3xl leading-8">
                        Your privacy matters to us.
                        This page explains how{" "}
                        <span className="font-semibold text-gray-900">
                            {appConfig.name}
                        </span>{" "}
                        handles your data.
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
                            Your privacy is important
                            to us. This Privacy Policy
                            explains how{" "}
                            <strong>
                                DoneLog
                            </strong>{" "}
                            collects, uses, and
                            protects your information
                            when you use our Chrome
                            extension.
                        </p>

                        <div className="mt-12 space-y-10">
                            {/* Section 1 */}
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900">
                                    1. Information We
                                    Collect
                                </h2>

                                <p className="mt-4 text-gray-700 leading-8">
                                    DoneLog does not
                                    collect any
                                    personal data from
                                    users. However, we
                                    may store the
                                    following locally
                                    in your browser:
                                </p>

                                <ul className="mt-5 space-y-3 text-gray-700">
                                    <li className="flex gap-3">
                                        <span>
                                            •
                                        </span>
                                        <span>
                                            To-do task
                                            details
                                            (entered
                                            by you)
                                        </span>
                                    </li>

                                    <li className="flex gap-3">
                                        <span>
                                            •
                                        </span>
                                        <span>
                                            Timestamps
                                            related to
                                            task
                                            management
                                        </span>
                                    </li>
                                </ul>
                            </div>

                            {/* Section 2 */}
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900">
                                    2. How We Use Your
                                    Information
                                </h2>

                                <p className="mt-4 text-gray-700 leading-8">
                                    Your data is only
                                    used locally to
                                    provide the to-do
                                    tracking
                                    functionality.
                                </p>

                                <p className="mt-4 text-gray-700 leading-8">
                                    If you choose to
                                    push tasks to
                                    Google Sheets, the
                                    extension will
                                    store tasks within
                                    your own Google
                                    account.
                                </p>
                            </div>

                            {/* Section 3 */}
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900">
                                    3. Data Storage
                                </h2>

                                <p className="mt-4 text-gray-700 leading-8">
                                    All to-do data is
                                    stored locally in
                                    your browser&apos;s
                                    local storage and,
                                    optionally, in
                                    your Google Sheet
                                    if you connect
                                    your account.
                                </p>

                                <p className="mt-4 text-gray-700 leading-8">
                                    We do not store or
                                    have access to
                                    your data on our
                                    servers.
                                </p>
                            </div>

                            {/* Section 4 */}
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900">
                                    4. Third-Party
                                    Services
                                </h2>

                                <p className="mt-4 text-gray-700 leading-8">
                                    We use Google APIs
                                    to push your
                                    to-do tasks to
                                    your Google Sheet.
                                    Google&apos;s
                                    privacy policies
                                    apply when you
                                    authenticate and
                                    use this feature.
                                </p>
                            </div>

                            {/* Section 5 */}
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900">
                                    5. Your Choices
                                    and Controls
                                </h2>

                                <p className="mt-4 text-gray-700 leading-8">
                                    You can clear your
                                    stored tasks at
                                    any time through
                                    the extension
                                    interface.
                                </p>

                                <p className="mt-4 text-gray-700 leading-8">
                                    You can also
                                    revoke Google
                                    account access
                                    through your
                                    Google security
                                    settings.
                                </p>
                            </div>

                            {/* Section 6 */}
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900">
                                    6. Security
                                    Measures
                                </h2>

                                <p className="mt-4 text-gray-700 leading-8">
                                    We take reasonable
                                    steps to secure
                                    your data stored
                                    locally. However,
                                    you are
                                    responsible for
                                    keeping your
                                    Google account
                                    and data secure
                                    when using the
                                    extension.
                                </p>
                            </div>

                            {/* Section 7 */}
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900">
                                    7. Changes to
                                    this Privacy
                                    Policy
                                </h2>

                                <p className="mt-4 text-gray-700 leading-8">
                                    We may update this
                                    policy from time
                                    to time. Any
                                    significant
                                    changes will be
                                    communicated
                                    through extension
                                    updates or via
                                    our support
                                    channels.
                                </p>
                            </div>

                            {/* Section 8 */}
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900">
                                    8. Contact Us
                                </h2>

                                <p className="mt-4 text-gray-700 leading-8">
                                    If you have any
                                    questions or
                                    concerns about
                                    this Privacy
                                    Policy, contact
                                    us at:
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