import { useEffect, useState } from 'react';

function useLocalStorage<T>(key: string) {
  const [state, setState] = useState<T | null>(null);
  const [isRefetch, setIsRefetch] = useState<boolean>(true);
  const refetch = () => {
    setIsRefetch(!isRefetch);
  };
  const setData = (data: T) => {
    localStorage.setItem(key, JSON.stringify(data));
    refetch();
  };

  const deleteData = () => {
    localStorage.removeItem(key);
    refetch();
  };

  useEffect(() => {
    setState(JSON.parse(localStorage.getItem(key) || 'null') as T);
  }, [isRefetch]);

  return { data: state, setData, deleteData, refetch };
}

export default useLocalStorage;
