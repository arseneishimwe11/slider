const SecondConnector = () => {
  return (
    <svg
      width="140"
      height="180"
      viewBox="0 0 120 172"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="largeGlow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="10" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <ellipse
        cx="110.926"
        cy="150"
        rx="6.5"
        ry="6.5"
        fill="#007BFF"
        filter="url(#largeGlow)"
      />

      <path
        d="M1 0V70.7055C1 81.7512 9.95431 90.7055 21 90.7055H91C102.046 90.7055 111 99.6598 111 110.706V154"
        stroke="#007BFF"
        strokeWidth="1.5"
      />
    </svg>
  );
};

export default SecondConnector;
