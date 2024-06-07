import React, { useRef, useState } from 'react';

const PCModules = ({
  id,
  Component,
  onRemove,
  index,
  moveModule,
  modules
}) => {
  const ref = useRef(null);
  const [showDelete, setShowDelete] = useState(false);

  const handleDelete = () => {
    onRemove(id);
  };

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

  return (
    <div
      ref={ref}
      className="module-wrapper"
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
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

export default PCModules;