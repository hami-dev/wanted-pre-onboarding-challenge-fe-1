export const Utils = {
  saveLocalStorage: (key, value) => {
    window.localStorage.setItem(key, value);
  },

  getLocalStorage: (key) => {
    window.localStorage.getItem(key);
  },

  removeLocalStorage: (key) => {
    window.localStorage.removeItem(key);
  },
};
