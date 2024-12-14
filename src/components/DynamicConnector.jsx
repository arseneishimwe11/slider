import { useRef } from "react";
import PropTypes from 'prop-types';
const DynamicConnectors = ({ positions }) => {
  const svgRef = useRef(null);

  const calculatePath = (start, end) => {
    return `M${start.x},${start.y} C${start.x},${(start.y + end.y) / 2} ${end.x},${(start.y + end.y) / 2} ${end.x},${end.y}`;
  };

  return (
    <svg ref={svgRef} width="100%" height="100%" style={{ position: "absolute", top: 0, left: 0, zIndex: -1 }}>
      {positions.map((pos, index) => (
        <path
          key={index}
          d={calculatePath(pos.start, pos.end)}
          stroke="#007BFF"
          strokeWidth="2"
          fill="none"
        />
      ))}
    </svg>
  );
};

DynamicConnectors.propTypes = {
  positions: PropTypes.arrayOf(
    PropTypes.shape({
      start: PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired,
      }).isRequired,
      end: PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired,
      }).isRequired,
    })
  ).isRequired,
};

export default DynamicConnectors;
