"use client";

import { useEffect, useState } from "react";

function Banner() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const hidden = sessionStorage.getItem("divhidden");
    if (hidden) {
      setIsVisible(false);
    }
  }, []);

  const handleHide = () => {
    setIsVisible(false);
    sessionStorage.setItem("divhidden", "true");
  };

  if (!isVisible) return null;
  return (
    <div className="bg-primary_background py-4 px-8 flex justify-between place-content-center">
      <h4 className="  text-xl font-sans font-semibold text-primary_text ml-40 ">
        Join Tripma today and save up to 20% on your flight using code TRAVEL at
        checkout. Promotion valid for new users only.
      </h4>
      <button className="text-primary_text w-8 h-8 " onClick={handleHide}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
}

export default Banner;
