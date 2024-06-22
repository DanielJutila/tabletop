import React, { useRef, useEffect, useCallback} from 'react';
import useLongPress from './useLongPress';

const MobileModules = ({
  id,
  Component,
  onRemove,
  index,
  moveModule,
  modules,
}) => {
  const ref = useRef(null);
  const lpHandlers = useLongPress();

  const handleTouchMove = (e) => {
    if (!lpHandlers.isDraggingEnabled) return;

    const touchY = e.touches[0].clientY;
    const moduleHeight = ref.current.clientHeight;
    const modulesContainer = ref.current.parentElement;
    const containerTop = modulesContainer.getBoundingClientRect().top;
    const containerScrollTop = modulesContainer.scrollTop;
    const newIndex = Math.floor((touchY + containerScrollTop - containerTop) / moduleHeight);

    if (newIndex !== index && newIndex >= 0 && newIndex < modules.length) {
      moveModule(index, newIndex);
    }
  };

  const handleDeleteButtonClick = useCallback((e) => {
    e.stopPropagation();
    onRemove(id);
  }, [id, onRemove]);


  return (
    <div
      ref={ref}
      className="module-wrapper"
      draggable={lpHandlers.isDraggingEnabled}
      onTouchStart={lpHandlers.onTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={lpHandlers.onTouchEnd}
      style={{ position: 'relative', border: '1px solid black', marginBottom: '8px' }}
    >
      <Component />
      {lpHandlers.showDelete && (
        <button
          onTouchStart={e => e.stopPropagation()}
          onTouchEnd={e => e.stopPropagation()}
          onClick={(e) => {
            e.stopPropagation();
            handleDeleteButtonClick(e);
          }}
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

export default MobileModules;