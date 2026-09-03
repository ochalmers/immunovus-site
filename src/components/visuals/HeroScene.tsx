"use client";

import { useEffect, useRef } from "react";
import { NetworkField } from "@/components/visuals/NetworkField";

export function HeroScene() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 22;
      const y = (e.clientY / window.innerHeight - 0.5) * 14;
      node.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div ref={ref} className="hero-scene absolute right-[-10%] top-[8%] h-[80%] w-[70%] opacity-90 md:opacity-100">
      <NetworkField className="h-full w-full" />
    </div>
  );
}
