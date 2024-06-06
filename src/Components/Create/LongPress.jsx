import { useState, useCallback, useEffect } from 'react';

const LongPress = (callback = () => {}, ms = 300) => {
  const [startLongPress, setStartLongPress] = useState(false);

  useEffect(() => {
    let timerId;
    if (startLongPress) {
      timerId = setTimeout(callback, ms);
    } else {
      clearTimeout(timerId);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [startLongPress, callback, ms]);

  const start = useCallback(() => setStartLongPress(true), []);
  const stop = useCallback(() => setStartLongPress(false), []);

  return [start, stop];
};

export default LongPress;