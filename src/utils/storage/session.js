export const setSession = (key, value) => sessionStorage.setItem(key, value);

export const getSession = (key) => sessionStorage.getItem(key);

export const clearSession = () => sessionStorage.clear();

export const removeSession = (key) => sessionStorage.removeItem(key);
