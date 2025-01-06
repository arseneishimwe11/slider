import PropTypes from "prop-types";
const Connectors = ({ scrollX }) => {
  // Calculate path based on scroll position
  const calculatePath = () => {
    const baseX = 77;
    const startY = 0;
    const midY = 72.2273;
    const endY = 159.363;
    
    // Make the path more dynamic based on scroll
    const flexOffset = Math.sin(scrollX / 200) * 20; // Creates a wave effect
    const controlPoint1X = baseX + flexOffset;
    const controlPoint2X = 9 + flexOffset;
    
    return `M${baseX} ${startY} 
            C${controlPoint1X} ${midY/2}, ${controlPoint1X} ${midY}, ${baseX} ${midY} 
            H29 
            C${controlPoint2X} ${midY}, ${controlPoint2X} ${(midY + endY)/2}, 9 ${endY}`;
  };

  return (
    <div className="connector">
      <svg
        width="78"
        height="177"
        viewBox="0 0 78 177"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="glow" x="-100%" y="-100%" width="400%" height="400%">
            <feGaussianBlur stdDeviation="10" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <path
          d={calculatePath()}
          stroke="#007BFF"
          strokeWidth="1.5"
          fill="none"
          style={{
            transition: "d 0.3s ease-out",
          }}
        />
        <ellipse
          cx="8.92562"
          cy="160"
          rx="6.5"
          ry="6.5"
          fill="#007BFF"
          filter="url(#glow)"
        />
      </svg>
    </div>
  );
};
Connectors.propTypes = {
  scrollX: PropTypes.string.isRequired
}

export default Connectors;
