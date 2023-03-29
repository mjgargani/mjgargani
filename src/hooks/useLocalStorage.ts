import camelcase from 'camelcase';
import { useEffect, useState } from 'react';

type LocalStorage = Record<string, any>;

function useLocalStorage<T>() {
  const [data, setData] = useState<LocalStorage>();

  useEffect(() => {
    if (!data) {
      let newData: LocalStorage = {};

      Object.entries(localStorage).forEach((el) => {
        let item;
        try {
          item = JSON.parse(el[1] as string) as Record<string, unknown>;
        } catch (error) {
          item = el[1] as string;
        } finally {
          newData = Object.assign(newData, { [camelcase(el[0])]: item });
        }
      });

      setData(newData);
    }
  }, [data]);

  return data as T;
}

export default useLocalStorage;
