"use client";
import React, { useEffect, useState } from "react";

const ScrollDown: React.FC = () => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const onScroll = () => setHidden(window.scrollY > 200);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (hidden) return null;
  return (
    <div className="scroll-btn" aria-hidden>
      <span className="scroll-btn__sign">Scroll Down</span>
      <span className="scroll-btn__arrow" />
    </div>
  );
};

export default ScrollDown;
