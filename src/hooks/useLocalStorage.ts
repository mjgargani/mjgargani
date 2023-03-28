import camelcase from 'camelcase'
import { useEffect, useState } from 'react'

interface LocalStorage {
  [key: string]: any
}

function useLocalStorage<T>() {
  const [data, setData] = useState<LocalStorage>()
  
  useEffect(() => {
    if(!!!data){
      const itens = Object.entries(localStorage).map(el => {
        let item;
        try {
          item = JSON.parse(el[1])
        } catch (error) {
          item = el[1].toString() !== "" ? el[1].toString() : undefined
        } finally {
          return { [camelcase(el[0])]:item }
        }
      })
  
      let newData = {};
  
      for (const item of itens) {
        newData = { ...newData, ...item }
      }
  
      setData(newData);
    }
  }, [data])

  return data as T
}

export default useLocalStorage
