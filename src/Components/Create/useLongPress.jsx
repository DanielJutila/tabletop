import { useRef, useState, useCallback } from 'react';

const useLongPress = () => {
  const [longPressTriggered, setLongPressTriggered] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [isDraggingEnabled, setIsDraggingEnabled] = useState(false);
  const [displayOptions, setDisplayOptions] = useState(false);
  const touchTimer = useRef(null);

  const handleLongPress = useCallback(() => {
    setShowDelete(true);
    setIsDraggingEnabled(true);
  }, []);

  const handleClick = useCallback(() => {
    setShowDelete(false);
    setIsDraggingEnabled(false);
  }, []);

  const handleTouchStart = useCallback(() => {
    console.log('touch Started');
    setLongPressTriggered(false);
    touchTimer.current = setTimeout(() => {
      setLongPressTriggered(true);
      handleLongPress();
    }, 1000);
  }, [handleLongPress]);

  const handleTouchEnd = useCallback(() => {
    console.log('touch Ended');
    clearTimeout(touchTimer.current); 
    if (!longPressTriggered) {
      handleClick();
    }
    setLongPressTriggered(false);
  }, [longPressTriggered, handleClick]);

  const handleTouchMove = useCallback(() => {
    clearTimeout(touchTimer.current);
    setDisplayOptions(false);
  }, []);

  return {
    onTouchStart: handleTouchStart,
    onTouchEnd: handleTouchEnd,
    onTouchMove: handleTouchMove,
    showDelete,
    isDraggingEnabled,
  };
};

export default useLongPress;