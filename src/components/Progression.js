const Progression = (props) => {
    const lgId = Math.floor(Math.random() * 1e10); // supaya linear gradient nya gak sama, kalo id nya sama nanti gak bisa beda2 offsetnya
  return (
    <div style={props.style}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 125"
        className="progression"
      >
        <defs>
          <linearGradient id={lgId}>
            <stop offset="0%" stopColor="#ECC055" />
            <stop offset={`${props.progress}%`} stopColor="#ECC055" />
            <stop offset="0%" stopColor="#C4C4C4" />
            <stop offset="100%" stopColor="#C4C4C4" />
          </linearGradient>
        </defs>
        <path
          fill={`url(#${lgId})`}
          stroke="#E5E1E0"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="10px"
          d="M115 55L455 55A25 25 180 0 1 455 105L105 105L115 25L85 55L60 5L35 55L5 25L20 105H105"
        />
      </svg>
    </div>
  );
};

export default Progression;
