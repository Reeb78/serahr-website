export default function WaveDivider() {
  return (
    <div className="relative -mt-1 bg-white">
      <svg
        viewBox="0 0 1440 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full"
        preserveAspectRatio="none"
      >
        <path
          d="M0 60V20C240 45 480 55 720 45C960 35 1200 15 1440 25V60H0Z"
          fill="white"
        />
        <path
          d="M0 20C240 45 480 55 720 45C960 35 1200 15 1440 25"
          stroke="#EAF4FB"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>
    </div>
  );
}
