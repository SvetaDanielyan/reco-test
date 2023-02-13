const USER_DATA_LOCALSTORAGE_KEY = 'user';

export const getUserFromLocalStorage = (isJson = false) => {
  const storageUser = localStorage.getItem(
    USER_DATA_LOCALSTORAGE_KEY
  );
  if (storageUser === null)
    throw new Error('There is no user in local storage');
  return isJson ? JSON.parse(storageUser) : storageUser;
};

export const getItemFromLocalStorage = (key, isJson = false) => {
  if (typeof window === 'undefined') return '';
  const storageItem = localStorage.getItem(key);
  if (storageItem === null) return '';
  return isJson ? JSON.parse(storageItem) : storageItem;
};

export const getItemFromLocalStorageSafe = (
  key,
  isJson = false
) => {
  const storageItem = localStorage.getItem(key);
  return storageItem && isJson ? JSON.parse(storageItem) : storageItem;
};

export const setItemInLocalStorage = (
  key,
  item,
  isStringify = false
) => {
  const entry = isStringify ? JSON.stringify(item) : item;
  localStorage.setItem(key, entry);
};

export const removeItemFromLocalStorage = (key) => {
  localStorage.removeItem(key);
};

export const clearLocalStorage = () => {
  localStorage.clear();
};
