const ThirdConnector = () => {
  // Calculate path based on scroll position
  const calculatePath = () => {
    const startX = 1;
    const startY = 0;
    const midY = 51.4121;
    const endY = 121;
    const endX = 303;
    
    // Create dynamic movement based on scroll
    const flexOffset = Math.sin(scrollX / 300) * 25; // Wave effect
    const controlPoint1Y = midY + flexOffset;
    const controlPoint2Y = midY - flexOffset;
    
    return `M${startX} ${startY} 
            C${startX} ${controlPoint1Y}, ${startX * 3} ${controlPoint2Y}, ${startX * 20} ${midY} 
            H283 
            C${endX - 20} ${midY}, ${endX} ${midY + 20}, ${endX} ${endY}`;
  };

  return (
    <div className="connector">
      <svg
        width="312"
        height="139"
        viewBox="0 0 312 139"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="10" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <ellipse 
          cx="302.926" 
          cy="125" 
          rx="6.5" 
          ry="6.5" 
          fill="#007BFF" 
          filter="url(#glow)"
        />
        <path
          d={calculatePath()}
          stroke="#007BFF"
          strokeWidth="1.5"
          fill="none"
          style={{
            transition: "d 0.3s ease-out",
          }}
        />
      </svg>
    </div>
  );
};

export default ThirdConnector;
