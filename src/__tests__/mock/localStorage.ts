//Source: https://stackoverflow.com/questions/65282181/how-to-use-jest-for-testing-a-react-component-with-localstorage

interface LocalStorageMock {
  getItem: (key: string) => (string | null)
  setItem: (key: string, value: string | number) => void
  removeItem: (key: string) => void
  clear: () => void
}

type Store = {
  [key: string]: string
}

const localStorageMock: LocalStorageMock = (function() {
  let store: Store = {}

  return {
    getItem: function(key) {
      return store[key] || null
    },
    setItem: function(key, value) {
      store[key] = value.toString()
    },
    removeItem: function(key) {
      delete store[key]
    },
    clear: function() {
      store = {}
    }
  }
})()

export default localStorageMock