"use client";

import { useEffect, useRef, useState } from "react";

export default function TimelineProgress({ steps = 4 }: { steps?: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    function onScroll() {
      if (!container) return;

      // Find all step circles (the round numbered elements on the timeline)
      const stepCircles = container.parentElement?.querySelectorAll<HTMLElement>(
        "[data-timeline-step]"
      );
      if (!stepCircles || stepCircles.length === 0) return;

      const firstStep = stepCircles[0];
      const lastStep = stepCircles[stepCircles.length - 1];

      const containerRect = container.getBoundingClientRect();
      const firstRect = firstStep.getBoundingClientRect();
      const lastRect = lastStep.getBoundingClientRect();

      // The line should span from first step center to last step center
      const lineTop = firstRect.top + firstRect.height / 2 - containerRect.top;
      const lineBottom = lastRect.top + lastRect.height / 2 - containerRect.top;
      const lineHeight = lineBottom - lineTop;

      if (lineHeight <= 0) return;

      const windowCenter = window.innerHeight * 0.6;

      // Progress based on how far the viewport center has moved through the steps
      const firstStepScreen = firstRect.top + firstRect.height / 2;
      const lastStepScreen = lastRect.top + lastRect.height / 2;

      const pct = Math.max(
        0,
        Math.min(1, (windowCenter - firstStepScreen) / (lastStepScreen - firstStepScreen))
      );

      setProgress(pct);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [steps]);

  return (
    <div ref={containerRef} className="absolute left-6 top-0 hidden h-full sm:left-1/2 sm:block">
      {/* Background track */}
      <div className="absolute inset-0 w-px -translate-x-1/2 bg-serahr-ice" />
      {/* Filled progress — clamped to step positions */}
      <div
        className="absolute top-0 w-px -translate-x-1/2 bg-gradient-to-b from-serahr-bright via-serahr-medium to-serahr-deep"
        style={{ height: `${progress * 100}%` }}
      />
    </div>
  );
}
