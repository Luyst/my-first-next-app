export async function apiFetch<T>(
    endpoint: string,
    options?: RequestInit
): Promise<T> {
    try {
        const res = await fetch(endpoint, {
            headers: {
                "Content-Type": "application/json",
            },
            ...options,
        });

        if (!res.ok) {
            throw new Error(`API error: ${res.status}`);
        }

        return res.json();
    } catch (error) {
        console.error("API Fetch Error:", error);
        throw error;
    }
}
