"use client";

import { useEffect, useRef, useState } from "react";

const WhatWeDo = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); 
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="flex mt-24 justify-center">
  <div
    ref={ref}
    className={`
      transition-all duration-700 ease-out
      ${visible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"}
    `}
  >
    <h2 className="text-4xl  md:text-6xl font-bold text-white">
      What do we do?
    </h2>
  </div>
</section>

  );
};

export default WhatWeDo;
