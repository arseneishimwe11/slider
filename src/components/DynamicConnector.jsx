import { useState, useRef } from 'react';

const DynamicLine = () => {
  const [scrollX, setScrollX] = useState(0);
  const containerRef = useRef(null);

  const handleScroll = () => {
    const newScrollX = containerRef.current.scrollLeft;
    setScrollX(newScrollX);
  };

  const generatePath = () => {
    // const start = 77;
    const control = Math.max(72, 72 + scrollX * 0.2); // Adjust curve dynamically
    const end = Math.min(92, 92 - scrollX * 0.1);    // Adjust curve dynamically
    return `M77 0 V${control} C77 ${control + 11} ${68 - scrollX / 10} ${end} 57 ${end} H29`;
  };

  return (
    <div
      ref={containerRef}
      onScroll={handleScroll}
      style={{
        width: '100%',
        overflowX: 'scroll',
        whiteSpace: 'nowrap',
      }}
    >
      <svg width="78" height="177" style={{ display: 'inline-block' }}>
        <path
          d={generatePath()}
          stroke="#007BFF"
          strokeWidth="1.5"
          fill="none"
        />
        <ellipse cx="8.92562" cy="168" rx="8.92562" ry="9" fill="#007BFF" />
      </svg>
    </div>
  );
};

export default DynamicLine;
