import React, { useRef, useState } from 'react';

const MobileModules = ({
  id,
  Component,
  onRemove,
  index,
  moveModule,
  modules,
}) => {
  const ref = useRef(null);
  const [buttonInteractive, setButtonInteractive] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [isDraggingEnabled, setIsDraggingEnabled] = useState(false);
  const [touchStartY, setTouchStartY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [longPressTriggered, setLongPressTriggered] = useState(false);
  let touchTimer = useRef(null);


  const handleLongPress = () => {
    setLongPressTriggered(true);
    setShowDelete(true);
    setButtonInteractive(true);
    setIsDraggingEnabled(true);
  };

  const handleTouchStart = (e) => {
    setLongPressTriggered(false);
    touchTimer.current = setTimeout(() => {
      handleLongPress();
    }, 400); // 400ms threshold for long press
    setTouchStartY(e.touches[0].clientY);
    setIsDragging(true);
  };

  const handleTouchEnd = (e) => {
    clearTimeout(touchTimer.current);
    if (!longPressTriggered && showDelete) {
      // It's a tap
      setIsDraggingEnabled(false);
      setShowDelete(false);
    }
    setIsDragging(false);
  };

  const handleTouchMove = ((e) => {
    
    if (!isDragging || !isDraggingEnabled) return;
    const touchY = e.touches[0].clientY;

    const moduleHeight = ref.current.clientHeight;
    const modulesContainer = ref.current.parentElement;
    const containerTop = modulesContainer.getBoundingClientRect().top;
    const containerScrollTop = modulesContainer.scrollTop;
    const newIndex = Math.floor((touchY + containerScrollTop - containerTop) / moduleHeight);

    if (newIndex !== index && newIndex >= 0 && newIndex < modules.length) {
      moveModule(index, newIndex);
      setTouchStartY(touchY);
    }
  });
  const handleDeleteButtonClick = (e) => {
    onRemove(id);
  };
  return (
    <div
      ref={ref}
      className="module-wrapper"
      draggable={isDraggingEnabled}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      
      style={{ position: 'relative', border: '1px solid black', marginBottom: '8px' }}
    >
      <Component />
      {showDelete && (
        <button
        onTouchStart={(e) => e.stopPropagation()} 
        onClick={handleDeleteButtonClick}
          style={{
            position: 'absolute',
            top: '8px',
            right: '8px',
            background: 'red',
            color: 'white',
            border: 'none',
            padding: '8px',
            cursor: buttonInteractive ? 'pointer' : 'not-allowed',
          }}
        >
          Delete
        </button>
      )}
    </div>
  );
};

export default MobileModules;