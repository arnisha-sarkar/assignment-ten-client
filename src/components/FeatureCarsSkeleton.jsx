const FeatureCarsSkeleton = () => {
  return (
    <div className="border border-[#354EA0] my-5 mx-2.5 animate-pulse">
      <div className="h-[40vh] bg-gray-700 rounded-t-xl"></div>

      <div className="p-5 space-y-4 bg-[#1a1a1a] h-[60vh] rounded-b-xl">
        <div className="h-6 bg-gray-600 rounded w-1/2 mx-auto"></div>
        <div className="h-4 bg-gray-600 rounded w-3/4 mx-auto"></div>
        <div className="h-5 bg-gray-600 rounded w-1/4 mx-auto"></div>

        <div className="h-8 bg-gray-600 rounded-full w-1/3 mx-auto"></div>
        <div className="h-4 bg-gray-600 rounded w-2/4 mx-auto"></div>

        <div className="h-10 bg-gray-600 rounded w-1/2 mx-auto mt-6"></div>
      </div>
    </div>
  );
};

export default FeatureCarsSkeleton;
