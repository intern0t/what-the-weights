const isLocalStorageAvailable = () => {
    const checkdata = "wtw-storage-test";
    try {
        localStorage.setItem([checkdata], checkdata);
        return localStorage.getItem([checkdata]) === checkdata;
    } catch {
        return false;
    }
};

export { isLocalStorageAvailable };
