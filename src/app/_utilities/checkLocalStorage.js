"use client"

const checkLocalStorage = (key) => {
    if (typeof window !== 'undefined') {
        const lsKey = localStorage.getItem(key);
        if (lsKey !== null) {
            return true;
        }
    }
    return false;
}

export default checkLocalStorage;
