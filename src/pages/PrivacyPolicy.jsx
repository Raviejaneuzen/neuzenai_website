import React, { useEffect } from 'react';

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-48 pb-20 px-6 max-w-4xl mx-auto bg-white min-h-screen">
            <h1 className="text-4xl font-bold mb-8 text-[#ff4500]">Privacy Policy</h1>
            <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                <p>
                    At NeuzenAI, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you visit our website or use our services.
                </p>
                <p>
                    We collect personal information that you voluntarily provide to us when you register on the website, express an interest in obtaining information about us or our products and services, when you participate in activities on the website or otherwise when you contact us. The personal information that we collect depends on the context of your interactions with us and the website, the choices you make and the products and features you use.
                </p>
                <p>
                    We use personal information collected via our website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations. We indicate the specific processing grounds we rely on next to each purpose listed below: to facilitate account creation and logon process, to send you marketing and promotional communications, to send administrative information to you, and to post testimonials.
                </p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
