import React, { useEffect } from 'react';

const CookiePolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-48 pb-20 px-6 max-w-4xl mx-auto bg-white min-h-screen">
            <h1 className="text-4xl font-bold mb-8 text-[#ff4500]">Cookie Policy</h1>
            <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                <p>
                    Our website uses cookies to enhance your browsing experience and provide personalized content. Cookies are small text files that are stored on your device when you visit a website. They help us analyze website traffic, remember your preferences, and improve site performance.
                </p>
                <p>
                    We use both session cookies (which expire when you close your browser) and persistent cookies (which stay on your device until you delete them). We also use third-party cookies from service providers such as Google Analytics to understand how users interact with our website.
                </p>
                <p>
                    By using our website, you consent to the use of cookies in accordance with this Cookie Policy. You can control and manage cookies through your browser settings. However, please note that disabling cookies may affect the functionality of our website.
                </p>
                <p>
                    If you have any questions about our Cookie Policy, please contact us at contact@neuzenai.com.
                </p>
            </div>
        </div>
    );
};

export default CookiePolicy;
