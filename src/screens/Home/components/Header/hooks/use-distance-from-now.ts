import { useEffect, useState } from 'react';
import { getDistanceFromNow } from '@app/utils/date';

const ONE_MINUTE = 1000 * 60;

const useDistanceFromNow = (datetime: number | undefined) => {
  const [distance, setDistance] = useState('-');

  useEffect(() => {
    const callback = () => {
      if (typeof datetime !== 'number') {
        setDistance('-');
        return;
      }

      const date = new Date(datetime * 1000);
      setDistance(getDistanceFromNow(date));
    };

    callback();
    const id = setInterval(callback, ONE_MINUTE);
    return () => {
      clearInterval(id);
    };
  }, [datetime]);

  return distance;
};

export default useDistanceFromNow;
