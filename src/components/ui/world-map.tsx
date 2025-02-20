"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import DottedMap from "dotted-map";
import Image from "next/image";
import { useTheme } from "next-themes";

interface MapProps {
  start?: { lat: number; lng: number };
  lineColor?: string;
  spreadCount?: number;
}

export function WorldMap({
  start = { lat: 27.9944024, lng: -81.7602544 }, // Florida, USA
  lineColor = "#0ea5e9",
  spreadCount = 10,
}: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const map = new DottedMap({ height: 100, grid: "diagonal" });
  const { theme } = useTheme();
  const [, setAnimationTrigger] = useState(0);
  const [endPoints, setEndPoints] = useState<Array<{ lat: number; lng: number }>>([]);

  const svgMap = map.getSVG({
    radius: 0.22,
    color: theme === "dark" ? "#FFFFFF40" : "#00000040",
    shape: "circle",
    backgroundColor: theme === "dark" ? "black" : "white",
  });

  useEffect(() => {
    // Generate random worldwide endpoints
    const newEndPoints = Array.from({ length: spreadCount }, () => ({
      lat: Math.random() * 180 - 90, // Random latitude (-90 to 90)
      lng: Math.random() * 360 - 180, // Random longitude (-180 to 180)
    }));
    setEndPoints(newEndPoints);
  }, [spreadCount]);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationTrigger((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const projectPoint = (lat: number, lng: number) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  };

  const createCurvedPath = (
    start: { x: number; y: number },
    end: { x: number; y: number }
  ) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 50;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  return (
    <div className="w-full aspect-[2/1] dark:bg-black bg-white rounded-lg relative font-sans">
      <Image
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className="h-full w-full [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] pointer-events-none select-none"
        alt="world map"
        height="495"
        width="1056"
        draggable={false}
      />
      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="w-full h-full absolute inset-0 pointer-events-none select-none"
      >
        {endPoints.map((end, i) => {
          const startPoint = projectPoint(start.lat, start.lng);
          const endPoint = projectPoint(end.lat, end.lng);
          return (
            <motion.path
              key={`path-${i}`}
              d={createCurvedPath(startPoint, endPoint)}
              fill="none"
              stroke="url(#path-gradient)"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 0.5 * i, ease: "easeOut" }}
            />
          );
        })}

        <defs>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Starting point in Florida */}
        <circle
          cx={projectPoint(start.lat, start.lng).x}
          cy={projectPoint(start.lat, start.lng).y}
          r="3"
          fill={lineColor}
        />
      </svg>
    </div>
  );
}
