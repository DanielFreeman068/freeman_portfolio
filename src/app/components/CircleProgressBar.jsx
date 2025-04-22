"use client";
import React, { useState, useEffect } from "react";

const CircleProgressBar = ({ percentage }) => {
    const strokeDasharray = 283;
    const [animatedPercent, setAnimatedPercent] = useState(0);

    useEffect(() => {
        let start = null;

        const animate = (timestamp) => {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            const current = Math.min((progress / 1000) * percentage, percentage);
            setAnimatedPercent(Math.floor(current));

            if (current < percentage) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [percentage]);

    const strokeDashoffset =
        strokeDasharray - (animatedPercent / 100) * strokeDasharray;

    return (
        <div className="flex flex-col items-center justify-center p-4 relative">
            <svg className="w-40 h-40 transform -rotate-90" viewBox="0 0 100 100">
                <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="#A095E3"
                    strokeWidth="10"
                    fill="none"
                />
                <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="#5BC6FF"
                    strokeWidth="10"
                    fill="none"
                    strokeDasharray={strokeDasharray}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                />
            </svg>
            <div className="absolute flex flex-col items-center">
                <span className="text-md text-textPrimary">Proficiency</span>
                <span className="text-xl font-bold text-textPrimary">
                    {animatedPercent}%
                </span>
            </div>
        </div>
    );
};

export default CircleProgressBar;
