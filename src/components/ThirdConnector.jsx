const ThirdConnector = () => {
  return (
    <div>
      <svg
        width="218"
        height="139"
        viewBox="0 0 218 139"
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
          cx="208.926"
          cy="130"
          rx="7"
          ry="7"
          fill="#007BFF"
          filter="url(#glow)"
        />
        <path
          d="M1 0V31.6246C1 42.6703 9.95431 51.6246 21 51.6246H189C200.046 51.6246 209 60.5789 209 71.6246V121.5"
          stroke="#007BFF"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
};

export default ThirdConnector;
