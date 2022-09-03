import React from 'react';

registerOmnibarItem('message-item', ({ data, isLocked, isActive, isTransitioning, isOverlay }) => {
  return (
    <div className={`message-container ${isOverlay ? 'overlay' : ''}`}>
      {data.message}
    </div>
  );
});
