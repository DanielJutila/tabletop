import React, { useRef, useState, useCallback, useEffect } from 'react';
import LongPress from './LongPress';

const MobileModules = ({
  id,
  Component,
  onRemove,
  index,
  moveModule,
  modules
}) => {
  const ref = useRef(null);
  const [showDelete, setShowDelete] = useState(false);
  const [buttonInteractive, setButtonInteractive] = useState(false);
  const [isDraggingEnabled, setIsDraggingEnabled] = useState(false);
  const [touchStartY, setTouchStartY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const handleLongPress = useCallback(() => {
    setShowDelete(true);
    setIsDraggingEnabled(true);
    setTimeout(() => {
      setButtonInteractive(true);
    }, 400); // Delay before the button becomes interactive
  }, []);

  const handleClickOutside = useCallback((event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setShowDelete(false);
      setButtonInteractive(false);
      setIsDraggingEnabled(false);
    }
  }, []);

  useEffect(() => {
    if (showDelete) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [showDelete, handleClickOutside]);

  const [start, stop] = LongPress(handleLongPress, 400);

  const handleDelete = () => {
    if (buttonInteractive) {
      onRemove(id);
    }
  };

  const handleDragStart = (e) => {
    if (!isDraggingEnabled) return;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', index);
    ref.current.style.opacity = '0.4';
  };

  const handleDragEnd = () => {
    if (!isDraggingEnabled) return;
    ref.current.style.opacity = '1';
  };

  const handleDragOver = (e) => {
    if (!isDraggingEnabled) return;
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e) => {
    if (!isDraggingEnabled) return;
    e.preventDefault();
    const fromIndex = e.dataTransfer.getData('text/plain');
    moveModule(fromIndex, index);
  };

  const handleTouchStart = (e) => {
    start();
    if (showDelete) {
      setTouchStartY(e.touches[0].clientY);
      setIsDragging(true);
    }
  };

  const handleTouchMove = (e) => {
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
  };

  const handleTouchEnd = (e) => {
    stop();
    setIsDragging(false);
    handleDragEnd(e);
  };

  return (
    <div
      ref={ref}
      className="module-wrapper"
      draggable={isDraggingEnabled}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{ position: 'relative', border: '1px solid black', marginBottom: '8px' }}
    >
      <Component />
      {showDelete && (
        <button
          onClick={handleDelete}
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