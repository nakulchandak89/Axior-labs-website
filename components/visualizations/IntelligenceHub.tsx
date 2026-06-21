"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { HUB_NODES } from "@/lib/constants";

const r = (n: number, d: number = 4) => Number(n.toFixed(d));

export function IntelligenceHub() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const cx = 400;
  const cy = 250;
  const desktopRadius = 160;

  return (
    <section className="w-full bg-white py-16 sm:py-24 overflow-hidden">
      <div
        className="w-full relative mx-auto px-4 sm:px-6"
        style={{ maxWidth: "1200px" }}
      >
        <svg
          viewBox="0 0 800 500"
          className="w-full max-w-[600px] sm:max-w-[700px] md:max-w-[800px] h-auto drop-shadow-[0_0_12px_rgba(37,99,235,0.2)] overflow-visible mx-auto"
          aria-hidden="true"
        >
          {HUB_NODES.map((node, i) => {
            const rad = (node.angle * Math.PI) / 180;
            const x2 = r(cx + desktopRadius * Math.cos(rad));
            const y2 = r(cy + desktopRadius * Math.sin(rad));

            const isHovered = hoveredNode === node.id;
            const strokeColor = isHovered ? "#4F46E5" : "#E2E8F0";
            const strokeOpacity = isHovered ? 1.0 : 0.8;

            return (
              <motion.line
                key={`path-${node.id}`}
                x1={cx}
                y1={cy}
                x2={x2}
                y2={y2}
                stroke={strokeColor}
                strokeWidth={1.5}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: 1,
                  opacity: strokeOpacity,
                }}
                transition={{
                  duration: 0.8,
                  delay: 1.6 + i * 0.15,
                  ease: "easeOut",
                }}
              />
            );
          })}

          <g transform={`translate(${cx}, ${cy})`}>
            <motion.g
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.9 }}
            >
              <circle
                cx="0"
                cy="0"
                r="48"
                fill="#F8FAFC"
                stroke="#E2E8F0"
                strokeWidth="2"
              />
              <circle
                cx="0"
                cy="0"
                r="36"
                fill="#4f46e5"
                opacity="0.1"
                className="animate-ping"
              />
              <circle
                cx="0"
                cy="0"
                r="24"
                fill="#4f46e5"
                opacity="0.1"
              />

              <g transform="translate(-32, -10)">
                <rect
                  x="2"
                  y="2"
                  width="10"
                  height="2"
                  rx="1"
                  fill="#0d6af2"
                />
                <text
                  x="0"
                  y="16"
                  fill="#0d6af2"
                  fontSize="16"
                  fontWeight="600"
                  className="font-sans tracking-tight"
                >
                  axior
                </text>
                <text
                  x="36"
                  y="16"
                  fill="#000000"
                  fontSize="16"
                  fontWeight="500"
                  className="font-sans tracking-tight"
                >
                  labs
                </text>
              </g>
            </motion.g>
          </g>

          {HUB_NODES.map((node, i) => {
            const rad = (node.angle * Math.PI) / 180;
            const nx = r(cx + desktopRadius * Math.cos(rad));
            const ny = r(cy + desktopRadius * Math.sin(rad));

            const isHovered = hoveredNode === node.id;
            const nodeScale = isHovered ? 1.15 : 1;
            const labelOpacity = isHovered ? 1.0 : 0.6;

            return (
              <g
                key={`node-${node.id}`}
                transform={`translate(${nx}, ${ny})`}
              >
                <motion.g
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: nodeScale, opacity: 1 }}
                  transition={{
                    opacity: { delay: 1.0 + i * 0.1, duration: 0.4 },
                    scale: { duration: 0.2 },
                  }}
                  onMouseEnter={() => setHoveredNode(node.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                  className="cursor-pointer"
                >
                  <circle
                    cx="0"
                    cy="0"
                    r={16}
                    fill="#F8FAFC"
                    stroke={
                      node.color === "#2563EB" ? "#4F46E5" : "#10B981"
                    }
                    strokeWidth={2}
                  />
                  <text
                    x={
                      node.angle > 90 && node.angle < 270 ? -24 : 24
                    }
                    y={4}
                    fill="#0F172A"
                    textAnchor={
                      node.angle > 90 && node.angle < 270
                        ? "end"
                        : "start"
                    }
                    className="font-sans font-bold text-xs uppercase tracking-widest transition-opacity duration-200"
                    style={{ opacity: labelOpacity }}
                  >
                    {node.label}
                  </text>
                </motion.g>
              </g>
            );
          })}
        </svg>
      </div>
    </section>
  );
}
