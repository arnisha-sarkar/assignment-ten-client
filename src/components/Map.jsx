import React from "react";

const Map = () => {
  return (
    <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
      <iframe
        title="Google Map"
        src="https://www.google.com/maps?q=Dhaka,Bangladesh&output=embed"
        className="w-full h-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
