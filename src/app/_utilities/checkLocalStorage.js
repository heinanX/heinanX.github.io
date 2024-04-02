"use client"

const checkLocalStorage = (key) => {
    if (typeof window !== 'undefined') {
        const lsKey = localStorage.getItem(key);
        if (lsKey !== null) {
            return lsKey
        }
    }
    return false;
}

export default checkLocalStorage;
