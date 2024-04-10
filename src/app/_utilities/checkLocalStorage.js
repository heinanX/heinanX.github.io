"use client"

const checkLocalStorage = (key) => {
    if (typeof window !== 'undefined' && localStorage.getItem(key) != null) {
        return localStorage.getItem(key)
    }
    return false;
}

export default checkLocalStorage;
