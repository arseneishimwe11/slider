const Connectors = () => {
  return (
    <div>
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
          d="M77 0V72.2273C77 83.273 68.0457 92.2272 57 92.2272H29C17.9543 92.2272 9 101.182 9 112.227V159.363"
          stroke="#007BFF"
          strokeWidth="1.5"
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

export default Connectors;
