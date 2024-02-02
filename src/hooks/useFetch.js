import {readLocal} from "./useStorage.js";

export const useFetch = async (method = 'GET', url, auth = false, body = null) => {
    const headers = {
        'Content-Type': 'application/json',
    };
    if (auth) {
        const token = readLocal(_ns_Token);
        // TODO: Check localStorage for a token ?
        headers['Authorization'] = `Bearer ${token}`;
    }
    try {
        const options = {
            method,
            headers,
            body: body ? JSON.stringify(body) : null,
        };

        const response = await fetch(url, options);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.json();
    } catch (e) {
        console.error('Fetch error:', e);
        throw e;
    }
};