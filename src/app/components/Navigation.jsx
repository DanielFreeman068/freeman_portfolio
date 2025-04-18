"use client";

import { useEffect, useState } from "react";

const sections = ["About Me", "Experience", "Projects"];

export default function SectionIndicator() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const offsets = sections.map((id) => {
        const el = document.getElementById(id.replace(" ", "-"));
        return el ? el.offsetTop : 0;
      });

      const scrollPos = window.scrollY + window.innerHeight / 2;

      const newIndex = offsets.findIndex((offset, i) => {
        const next = offsets[i + 1] || Infinity;
        return scrollPos >= offset && scrollPos < next;
      });

      if (newIndex !== -1) setActiveIndex(newIndex);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-xl px-4">
      <div className="relative flex items-center justify-between">
        {/* Thin connecting line */}
        <div className="absolute top-[18px] left-0 right-0 h-px bg-white/50 z-0" />

        {sections.map((label, i) => (
          <div className="flex flex-col items-center z-10" key={label}>
            {/* Outer Hexagon */}
            <div
              className="relative w-6 h-6 border-[1.5px] border-white"
              style={{
                clipPath:
                  "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
              }}
            >
              {/* Inner Hexagon only for active */}
              {activeIndex === i && (
                <div
                  className="absolute inset-[2px] bg-white"
                  style={{
                    clipPath:
                      "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                  }}
                />
              )}
            </div>

            {/* Label below hexagon */}
            <span
              className={`mt-2 text-xs tracking-wide ${
                activeIndex === i ? "text-white" : "text-white/50"
              }`}
            >
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
