import React from "react";

const MarqueeNews = () => {
  const newsItems = [
    "Breaking: Major tech company announces new AI breakthrough!",
    "Stock markets rally as inflation fears subside.",
    "New study shows benefits of a balanced diet.",
    "Climate change summit discusses global action.",
    "Smart public toilets: A revolutionary health solution!",
  ];

  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-4">
      <div className="overflow-hidden relative">
        <div className="whitespace-nowrap animate-marquee text-white font-semibold text-lg md:text-2xl">
          {newsItems.map((item, index) => (
            <span key={index} className="mx-8">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarqueeNews;
