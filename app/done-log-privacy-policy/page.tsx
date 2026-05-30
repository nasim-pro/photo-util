import PageContainer from "@/components/PageContainer";

export default function PrivacyPolicyPage() {
    return (
        <PageContainer>
            <div className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-2xl border border-slate-100">
                <p className="mb-6 text-sm text-slate-500 font-medium">
                    Last Updated: 25 January, 2025
                </p>

                <p className="mb-6 text-slate-700 leading-relaxed">
                    Your privacy is important to us. This Privacy Policy explains how DoneLog collects, uses, and protects your information when you use our Chrome extension.
                </p>

                <h3 className="text-xl font-bold mt-8 mb-3 text-slate-900">1. Information We Collect</h3>
                <p className="mb-4 text-slate-700 leading-relaxed">
                    DoneLog does not collect any personal data from users. However, we may store the following locally in your browser:
                </p>
                <ul className="list-disc ml-6 mb-6 text-slate-700 space-y-2">
                    <li>To-do task details (entered by you).</li>
                    <li>Timestamps related to task management.</li>
                </ul>

                <h3 className="text-xl font-bold mt-8 mb-3 text-slate-900">2. How We Use Your Information</h3>
                <p className="mb-4 text-slate-700 leading-relaxed">
                    Your data is only used locally to provide the to-do tracking functionality.
                </p>
                <p className="mb-6 text-slate-700 leading-relaxed">
                    If you choose to push tasks to Google Sheets, the extension will store tasks within your own Google account.
                </p>

                <h3 className="text-xl font-bold mt-8 mb-3 text-slate-900">3. Data Storage</h3>
                <p className="mb-6 text-slate-700 leading-relaxed">
                    All to-do data is stored locally in your browser's local storage and, optionally, in your Google Sheet if you connect your account. We do not store or have access to your data on our servers.
                </p>

                <h3 className="text-xl font-bold mt-8 mb-3 text-slate-900">4. Third-Party Services</h3>
                <p className="mb-6 text-slate-700 leading-relaxed">
                    We use Google APIs to push your to-do tasks to your Google Sheet. Google's privacy policies apply when you authenticate and use this feature.
                </p>

                <h3 className="text-xl font-bold mt-8 mb-3 text-slate-900">5. Your Choices and Controls</h3>
                <p className="mb-6 text-slate-700 leading-relaxed">
                    You can clear your stored tasks at any time through the extension interface. You can also revoke Google account access through your Google security settings.
                </p>

                <h3 className="text-xl font-bold mt-8 mb-3 text-slate-900">6. Security Measures</h3>
                <p className="mb-6 text-slate-700 leading-relaxed">
                    We take reasonable steps to secure your data stored locally. However, you are responsible for keeping your Google account and data secure when using the extension.
                </p>

                <h3 className="text-xl font-bold mt-8 mb-3 text-slate-900">7. Changes to this Privacy Policy</h3>
                <p className="mb-6 text-slate-700 leading-relaxed">
                    We may update this policy from time to time. Any significant changes will be communicated through the extension update or via our support channels.
                </p>

                <h3 className="text-xl font-bold mt-8 mb-3 text-slate-900">8. Contact Us</h3>
                <p className="text-slate-700 leading-relaxed">
                    If you have any questions or concerns about this Privacy Policy, please contact us at
                    <a href="mailto:khannasimahmad@gmail.com" className="text-blue-600 underline ml-1">khannasimahmad@gmail.com</a>.
                </p>
            </div>
        </PageContainer>
    );
}