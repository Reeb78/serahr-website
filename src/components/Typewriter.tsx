"use client";

import { useState, useEffect } from "react";

export default function Typewriter({
  text,
  speed = 60,
  delay = 600,
  className,
}: {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
}) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const done = count >= text.length;

  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!started || done) return;
    const timeout = setTimeout(() => setCount((c) => c + 1), speed);
    return () => clearTimeout(timeout);
  }, [started, count, done, speed]);

  // Zero-width cursor that doesn't affect layout
  const cursor = !done && (
    <span
      key="cursor-wrap"
      style={{
        display: "inline-block",
        width: 0,
        height: 0,
        position: "relative",
        verticalAlign: "baseline",
        overflow: "visible",
      }}
    >
      <span
        className="animate-pulse"
        style={{
          position: "absolute",
          left: "2px",
          bottom: "0",
          display: "block",
          width: "3px",
          height: "0.95em",
          backgroundColor: "currentColor",
          opacity: 0.7,
          borderRadius: "1px",
        }}
      />
    </span>
  );

  // Split text into words and spaces, preserving character indices
  const segments: { text: string; startIdx: number; isSpace: boolean }[] = [];
  let idx = 0;
  for (const match of text.matchAll(/(\S+|\s+)/g)) {
    segments.push({ text: match[0], startIdx: idx, isSpace: /^\s/.test(match[0]) });
    idx += match[0].length;
  }

  return (
    <span className={className}>
      {count === 0 && cursor}
      {segments.map((seg) => {
        const chars = seg.text.split("").map((char, i) => {
          const globalIdx = seg.startIdx + i;
          return (
            <span key={globalIdx}>
              <span style={{ visibility: globalIdx < count ? "visible" : "hidden" }}>
                {char}
              </span>
              {globalIdx === count - 1 && cursor}
            </span>
          );
        });

        // Words stay together (no mid-word line break), spaces can break
        if (seg.isSpace) {
          return <span key={`s${seg.startIdx}`}>{chars}</span>;
        }
        return (
          <span key={`w${seg.startIdx}`} style={{ whiteSpace: "nowrap" }}>
            {chars}
          </span>
        );
      })}
    </span>
  );
}
