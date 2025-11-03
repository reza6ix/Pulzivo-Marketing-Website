import React, { useEffect, useState, Suspense } from 'react';

const Spline = React.lazy(() => import('@splinetool/react-spline'));

const SplineSection: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="relative w-full h-[500px] flex items-center justify-center">
      <Suspense fallback={<div className="w-full h-full bg-gray-200 flex items-center justify-center"><p>Loading Spline scene...</p></div>}>
        <Spline scene="https://prod.spline.design/KsbWqpHbPp8xIVHC/scene.splinecode" />
      </Suspense>
    </div>
  );
};

export default SplineSection; 