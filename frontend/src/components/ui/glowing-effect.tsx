import React, { memo, useCallback, useEffect, useRef } from "react";

interface GlowingEffectProps {
  spread?: number;
  glow?: boolean;
  disabled?: boolean;
  proximity?: number;
  inactiveZone?: number;
  borderWidth?: number;
  className?: string;
  // kept for API compatibility, unused in new impl
  blur?: number;
  variant?: "default" | "white";
  movementDuration?: number;
}

const GlowingEffect = memo(
  ({
    spread = 40,
    glow = false,
    disabled = true,
    proximity = 64,
    borderWidth = 1,
    movementDuration = 0.25,
    className = "",
  }: GlowingEffectProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const rafRef = useRef<number>(0);

    const handleMove = useCallback(
      (e?: PointerEvent) => {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = requestAnimationFrame(() => {
          const el = containerRef.current;
          if (!el) return;

          const rect = el.getBoundingClientRect();
          const mx = e?.clientX ?? rect.left + rect.width / 2;
          const my = e?.clientY ?? rect.top + rect.height / 2;

          const inRange =
            mx >= rect.left - proximity &&
            mx <= rect.right + proximity &&
            my >= rect.top - proximity &&
            my <= rect.bottom + proximity;

          if (!inRange) {
            el.style.setProperty("--ge-opacity", "0");
            return;
          }

          // position relative to the element
          el.style.setProperty("--ge-x", `${mx - rect.left}px`);
          el.style.setProperty("--ge-y", `${my - rect.top}px`);
          el.style.setProperty("--ge-opacity", "1");
        });
      },
      [proximity]
    );

    useEffect(() => {
      if (disabled) return;
      const onMove = (e: PointerEvent) => handleMove(e);
      const onScroll = () => handleMove();
      document.body.addEventListener("pointermove", onMove, { passive: true });
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => {
        cancelAnimationFrame(rafRef.current);
        document.body.removeEventListener("pointermove", onMove);
        window.removeEventListener("scroll", onScroll);
      };
    }, [disabled, handleMove]);

    if (disabled) return null;

    const gradientSize = spread * 3.8;
    const auraSize = spread * 5.2;

    return (
      <div
        ref={containerRef}
        className={`pointer-events-none absolute inset-0 rounded-[inherit] ${className}`}
        style={
          {
            zIndex: 1,
            padding: `${borderWidth}px`,
            background: `
              radial-gradient(${auraSize}px circle at var(--ge-x, 50%) var(--ge-y, 50%), rgba(34, 211, 238, 0.34), rgba(20, 184, 166, 0.24) 35%, rgba(13, 148, 136, 0.15) 58%, transparent 82%),
              radial-gradient(${gradientSize}px circle at var(--ge-x, 50%) var(--ge-y, 50%), #A5F3FC 0%, #67E8F9 22%, #22D3EE 42%, #14B8A6 64%, transparent 100%)
            `,
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "destination-out",
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            maskComposite: "exclude",
            opacity: `var(--ge-opacity, ${glow ? 1 : 0})`,
            transition: `opacity 0.3s ease, background-position ${movementDuration}s linear`,
            filter: glow
              ? "drop-shadow(0 0 14px rgba(34, 211, 238, 0.70)) drop-shadow(0 0 28px rgba(20, 184, 166, 0.45))"
              : "none",
          } as React.CSSProperties
        }
      />
    );
  }
);

GlowingEffect.displayName = "GlowingEffect";
export { GlowingEffect };
