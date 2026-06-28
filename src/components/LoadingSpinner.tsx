import React from "react";

const LoadingSpinner = ({ size = "md" }: { size?: "sm" | "md" | "lg" }) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  };

  return (
    <div className="flex min-h-[120px] items-center justify-center">
      <img
        className={`${sizeClasses[size]} object-contain motion-safe:animate-[heartbeat_1.2s_ease-in-out_infinite]`}
        src="/favicon.png"
        alt="Loading"
      />
    </div>
  );
};

export default LoadingSpinner;
