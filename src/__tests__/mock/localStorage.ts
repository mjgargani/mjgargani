// Source: https://stackoverflow.com/questions/65282181/how-to-use-jest-for-testing-a-react-component-with-localstorage

type LocalStorageMock = {
  getItem: (key: string) => string | undefined;
  setItem: (key: string, value: string | number) => void;
};

type Store = Record<string, string>;

const localStorageMock: LocalStorageMock = (function () {
  const store: Store = {};

  return {
    getItem(key) {
      return store[key];
    },
    setItem(key, value) {
      store[key] = value.toString();
    },
  };
})();

export default localStorageMock;
