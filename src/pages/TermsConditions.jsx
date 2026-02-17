import React, { useEffect } from 'react';

const TermsConditions = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-48 pb-20 px-6 max-w-4xl mx-auto bg-white min-h-screen">
            <h1 className="text-4xl font-bold mb-8 text-[#ff4500]">Terms of Service</h1>
            <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                <p>
                    Welcome to NeuzenAI. These Terms of Service ("Terms") govern your use of our website and services. By accessing or using our website, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our website or services.
                </p>
                <p>
                    All content, trademarks, service marks, logos, and other intellectual property displayed on our website are the property of NeuzenAI or their respective owners. You may not use, reproduce, modify, or distribute any content from our website without our prior written consent.
                </p>
                <p>
                    You agree to use our website and services only for lawful purposes and in accordance with these Terms. You may not use our website in any manner that could damage, disable, overburden, or impair our servers or networks, or interfere with any other party's use and enjoyment of our website.
                </p>
                <p>
                    We reserve the right to modify or terminate our website and services at any time, without notice. We also reserve the right to update these Terms from time to time. Your continued use of our website after any changes to these Terms constitutes your acceptance of such changes.
                </p>
            </div>
        </div>
    );
};

export default TermsConditions;
