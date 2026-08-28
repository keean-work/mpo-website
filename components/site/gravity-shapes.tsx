"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

// Logo palette.
const GRAY = "#CAD5E2";
const BLUE = "#1447E6";

type Shape = { kind: "square" | "circle"; size: number; color: string };

// A mix of the mark's rounded squares and circles.
const SHAPES: Shape[] = [
  { kind: "square", size: 68, color: GRAY },
  { kind: "circle", size: 44, color: BLUE },
  { kind: "square", size: 52, color: GRAY },
  { kind: "circle", size: 56, color: GRAY },
  { kind: "square", size: 60, color: GRAY },
  { kind: "circle", size: 38, color: BLUE },
  { kind: "square", size: 46, color: GRAY },
  { kind: "circle", size: 50, color: GRAY },
  { kind: "square", size: 40, color: GRAY },
  { kind: "square", size: 54, color: GRAY },
  { kind: "circle", size: 42, color: GRAY },
  { kind: "square", size: 64, color: GRAY },
  { kind: "circle", size: 48, color: BLUE },
  { kind: "square", size: 44, color: GRAY },
  { kind: "circle", size: 58, color: GRAY },
  { kind: "square", size: 50, color: GRAY },
  { kind: "circle", size: 36, color: GRAY },
  { kind: "square", size: 58, color: GRAY },
  { kind: "circle", size: 46, color: GRAY },
  { kind: "square", size: 62, color: GRAY },
  { kind: "circle", size: 40, color: BLUE },
  { kind: "square", size: 48, color: GRAY },
  { kind: "circle", size: 52, color: GRAY },
  { kind: "square", size: 56, color: GRAY },
  { kind: "circle", size: 44, color: GRAY },
  { kind: "square", size: 38, color: GRAY },
  { kind: "circle", size: 54, color: BLUE },
  { kind: "square", size: 66, color: GRAY },
];

// Cursor repulsion: shapes within this radius are gently pushed from the pointer.
const REPEL_RADIUS = 140;
const REPEL_STRENGTH = 0.005;

/**
 * Playful physics backdrop: the logo's squares and circles drop in under
 * gravity, react to the cursor (pushed away as it moves near them), and can be
 * dragged. Air-gap safe (matter-js is bundled, no CDN). Decorative and
 * aria-hidden; respects prefers-reduced-motion with a static settled layout.
 * Absolutely positioned — give the parent `relative overflow-hidden`.
 */
export function GravityShapes({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const shapeRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const allEls = shapeRefs.current.filter(Boolean) as HTMLDivElement[];
    // Halve the shape count on small screens so they don't crowd the view; the
    // extras are hidden (not animated). Decided once at mount to avoid tearing
    // down and rebuilding the physics engine on resize.
    const mobile = window.matchMedia("(max-width: 639px)").matches;
    const count = mobile ? Math.ceil(allEls.length / 2) : allEls.length;
    const els = allEls.slice(0, count);
    for (const el of allEls.slice(count)) el.style.display = "none";
    const W = container.offsetWidth;
    const H = container.offsetHeight;

    // Reduced motion: lay the shapes out statically along the bottom.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      let x = 24;
      els.forEach((el) => {
        const s = el.offsetWidth;
        if (x + s > W - 12) x = 24;
        el.style.transform = `translate(${x}px, ${H - s - 20}px) rotate(-4deg)`;
        x += s + 18;
      });
      return;
    }

    let raf = 0;
    let cancelled = false;
    let cleanup = () => {};

    (async () => {
      const Matter = (await import("matter-js")).default;
      // The effect can be torn down (e.g. mobile/desktop switch) before the
      // async import resolves — bail so we never start an orphaned engine.
      if (cancelled) return;
      const { Engine, World, Bodies, Body, Runner } = Matter;

      const engine = Engine.create();
      engine.gravity.y = 1;

      const wallOpts = { isStatic: true, friction: 0.4, restitution: 0.2 };
      const floor = Bodies.rectangle(W / 2, H + 30, W * 2, 60, wallOpts);
      const leftW = Bodies.rectangle(-30, H / 2, 60, H * 2, wallOpts);
      const rightW = Bodies.rectangle(W + 30, H / 2, 60, H * 2, wallOpts);
      World.add(engine.world, [floor, leftW, rightW]);

      const items = els.map((el, i) => {
        const size = el.offsetWidth;
        const isCircle = el.dataset.kind === "circle";
        const x = Math.max(size / 2 + 10, Math.min(W - size / 2 - 10, Math.random() * W));
        const y = -120 - i * 70;
        const body = isCircle
          ? Bodies.circle(x, y, size / 2, {
              restitution: 0.5,
              friction: 0.08,
              density: 0.0012,
            })
          : Bodies.rectangle(x, y, size, size, {
              restitution: 0.45,
              friction: 0.08,
              density: 0.0012,
              chamfer: { radius: size * 0.24 },
            });
        Body.setAngle(body, (Math.random() - 0.5) * 0.6);
        World.add(engine.world, body);
        return { el, body, size };
      });

      // Pointer state (relative to the container).
      const pointer = { x: -9999, y: -9999, inside: false };
      let drag: { body: Matter.Body; id: number; el: HTMLDivElement } | null = null;

      const sync = () => {
        // Cursor repulsion — push nearby shapes away from the pointer.
        if (pointer.inside) {
          for (const it of items) {
            if (drag && drag.body === it.body) continue;
            const dx = it.body.position.x - pointer.x;
            const dy = it.body.position.y - pointer.y;
            const dist = Math.hypot(dx, dy);
            if (dist > 0 && dist < REPEL_RADIUS) {
              const strength = 1 - dist / REPEL_RADIUS;
              const f = REPEL_STRENGTH * it.body.mass * strength;
              Body.applyForce(it.body, it.body.position, {
                x: (dx / dist) * f,
                y: (dy / dist) * f,
              });
            }
          }
        }
        for (const { el, body, size } of items) {
          el.style.transform = `translate(${body.position.x - size / 2}px, ${
            body.position.y - size / 2
          }px) rotate(${body.angle}rad)`;
        }
        raf = requestAnimationFrame(sync);
      };
      sync();

      const runner = Runner.create();
      Runner.run(runner, engine);

      // Per-shape drag.
      const downHandlers = items.map((it) => {
        const handler = (e: PointerEvent) => {
          drag = { body: it.body, id: e.pointerId, el: it.el };
          it.el.setPointerCapture(e.pointerId);
          it.el.classList.add("cursor-grabbing");
          Body.setStatic(it.body, true);
          Body.setVelocity(it.body, { x: 0, y: 0 });
          e.preventDefault();
        };
        it.el.addEventListener("pointerdown", handler);
        return handler;
      });

      const onMove = (e: PointerEvent) => {
        const r = container.getBoundingClientRect();
        pointer.x = e.clientX - r.left;
        pointer.y = e.clientY - r.top;
        pointer.inside =
          pointer.x >= 0 && pointer.x <= W && pointer.y >= 0 && pointer.y <= H;
        if (drag) {
          Body.setPosition(drag.body, {
            x: Math.max(0, Math.min(W, pointer.x)),
            y: Math.max(0, Math.min(H, pointer.y)),
          });
        }
      };
      const onLeave = () => {
        pointer.inside = false;
      };
      const onUp = () => {
        if (!drag) return;
        Body.setStatic(drag.body, false);
        drag.el.classList.remove("cursor-grabbing");
        drag = null;
      };
      window.addEventListener("pointermove", onMove);
      window.addEventListener("pointerup", onUp);
      window.addEventListener("pointercancel", onUp);
      container.addEventListener("pointerleave", onLeave);

      cleanup = () => {
        cancelAnimationFrame(raf);
        Runner.stop(runner);
        Engine.clear(engine);
        items.forEach((it, i) => it.el.removeEventListener("pointerdown", downHandlers[i]));
        window.removeEventListener("pointermove", onMove);
        window.removeEventListener("pointerup", onUp);
        window.removeEventListener("pointercancel", onUp);
        container.removeEventListener("pointerleave", onLeave);
      };
    })();

    return () => {
      cancelled = true;
      cleanup();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      {SHAPES.map((s, i) => (
        <div
          key={i}
          ref={(el) => {
            shapeRefs.current[i] = el;
          }}
          data-kind={s.kind}
          className="pointer-events-auto absolute left-0 top-0 cursor-grab touch-none select-none"
          style={{
            width: s.size,
            height: s.size,
            background: s.color,
            borderRadius: s.kind === "circle" ? "9999px" : `${Math.round(s.size * 0.24)}px`,
            transform: "translate(-200px, -200px)",
            willChange: "transform",
          }}
        />
      ))}
    </div>
  );
}
