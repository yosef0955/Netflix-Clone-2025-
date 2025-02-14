// utils/truncate.js
export const truncate = (str, n) => {
    if (!str) return "";
    return str.length > n ? str.substr(0, n - 1) + "..." : str;
};