import React, { useRef, useEffect, useState, useCallback } from 'react';
import LongPress from './LongPress';

const DraggableModuleWrapper = ({ id, Component, onRemove, index, moveModule, modules }) => {
  const ref = useRef(null);
  const [showDelete, setShowDelete] = useState(false);
  const [buttonInteractive, setButtonInteractive] = useState(false);
  const [touchStartY, setTouchStartY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  // Long press functionality
  const handleLongPress = () => {
    setShowDelete(true);
    setTimeout(() => {
      setButtonInteractive(true);
    }, 400); // Delay before the button becomes interactive
  };
  const [start, stop] = LongPress(handleLongPress, 400);
  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setShowDelete(false);
      setButtonInteractive(false);
    }
  };
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
  }, [showDelete]);



  const handleDelete = () => {
    if (buttonInteractive) {
      onRemove(id);
    }
  };

  // Drag and drop functionality
  const handleDragStart = (e) => {

    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', index);
    ref.current.style.opacity = '0.4';
  };

  const handleDragEnd = () => {
    ref.current.style.opacity = '1';
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const fromIndex = e.dataTransfer.getData('text/plain');
    moveModule(fromIndex, index);
  };


  const handleTouchStart = (e) => {
   start();
    setTouchStartY(e.touches[0].clientY);
    setIsDragging(true);
   
  };
  const handleTouchMove = (e) => {
    if (!isDragging) return;
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
    handleDragEnd(e);
  };
  return (
    <div
      ref={ref}
      draggable
      //For mouse function
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}

      //For touch function Delete Button
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
          cursor: 'pointer',
        }}
      >
        Delete
      </button>
      )}

    </div>
  );
};

export default DraggableModuleWrapper;