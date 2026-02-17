/**
 * Utility to handle API fetches with a CORS proxy fallback if needed.
 * This is particularly useful when the backend (WordPress) hasn't configured CORS 
 * for the production frontend domain (e.g., AWS Amplify).
 */

export const fetchWithFallback = async (url) => {
    const proxies = [
        // 1. Direct (always try first)
        { type: 'direct', url: url },
        // 2. AllOrigins RAW
        { type: 'proxy', url: `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}` },
        // 3. AllOrigins JSON (wrapped - works even when raw is blocked)
        { type: 'json-proxy', url: `https://api.allorigins.win/get?url=${encodeURIComponent(url)}` },
        // 4. CorsProxy.io
        { type: 'proxy', url: `https://corsproxy.io/?${encodeURIComponent(url)}` }
    ];

    for (const p of proxies) {
        try {
            const response = await fetch(p.url);
            if (!response.ok) throw new Error(`Status ${response.status}`);

            if (p.type === 'json-proxy') {
                const data = await response.json();
                // Extract contents from the AllOrigins wrapper
                return new Response(data.contents, {
                    headers: { 'Content-Type': 'application/json' }
                });
            }

            console.log(`Loaded via ${p.type}`);
            return response;
        } catch (err) {
            console.warn(`Failed ${p.type}:`, err.message);
        }
    }

    throw new Error('All data fetch attempts failed. Please verify site CORS settings.');
};
