export const Utils = {
  saveLocalStorage: (key, value) => {
    window.localStorage.setItem(key, value);
  },

  getLocalStorage: (key) => {
    return window.localStorage.getItem(key);
  },

  removeLocalStorage: (key) => {
    window.localStorage.removeItem(key);
  },

  isTokenExist: () => {
    const token = Utils.getLocalStorage('token');
    if (token) {
      return true;
    }
    return false;
  },
};
